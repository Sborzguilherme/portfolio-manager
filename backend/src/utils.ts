import moment from 'moment';
import { CreateExpense, ExpenseCSVDto } from 'types';
import { DATE_FORMAT } from './constants';

export function fromStringToDate(str: string, inputFormat) {
  return moment(str, inputFormat).toDate();
}

export function fromDateToString(date: Date) {
  return moment(date).format(DATE_FORMAT.DISPLAY_FORMAT);
}

function getInstallmentsAndDescriptionFromRawDescription(rawDescription) {
  const installmentPattern = /\(\d*\/\d*\)/g;
  const parenthesisPattern = /[{()}]/g;

  const rawInstallment = rawDescription.match(installmentPattern);
  if (!rawInstallment) {
    return {
      installments: null,
      description: rawDescription,
    };
  }

  const [current, total] = rawInstallment[0]
    .replace(parenthesisPattern, '')
    .split('/')
    .map((r) => Number(r));

  const description = rawDescription.replace(installmentPattern, '').trim();

  return {
    installments: {
      current,
      total,
    },
    description,
  };
}

function formatMonetaryValueFromCSV(rawValue: string) {
  const valuePattern = /(\d.)*\d+,\d{2}/;
  const monetaryVal = rawValue.match(valuePattern);

  if (!monetaryVal) {
    throw new Error('Invalid monetary value');
  }

  const temp = monetaryVal[0].replace('.', '').replace(',', '.');
  return Number(temp);
}

export function formatExpensesFromCSV(item: ExpenseCSVDto): CreateExpense {
  const { description, installments } = getInstallmentsAndDescriptionFromRawDescription(
    item.Descricao,
  );

  const value = formatMonetaryValueFromCSV(item.Valor);

  return {
    category: item.Categoria,
    date: fromStringToDate(item.Data, DATE_FORMAT.DISPLAY_FORMAT),
    description,
    value,
    installments,
  };
}
