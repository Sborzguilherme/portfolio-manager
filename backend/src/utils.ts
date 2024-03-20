import moment from 'moment';
import { CreateExpense, ExpenseCSV } from 'types';

const BRAZILIAN_DATE_FORMAT = 'DD/MM/YYYY';

export function fromStringToDate(str: string) {
  return moment(str, BRAZILIAN_DATE_FORMAT).toDate();
}

export function fromDateToString(date: Date) {
  return moment(date).format(BRAZILIAN_DATE_FORMAT);
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

function formatValueFromCSV(rawValue: string) {
  const valuePattern = /(\d.)*\d+,\d{2}/;
  const temp = rawValue
    .match(valuePattern)[0]
    .replace('.', '')
    .replace(',', '.');
  return Number(temp);
}

export function formatExpensesFromCSV(item: ExpenseCSV): CreateExpense {
  const { description, installments } =
    getInstallmentsAndDescriptionFromRawDescription(item.Descricao);

  const value = formatValueFromCSV(item.Valor);

  return {
    category: item.Categoria,
    date: fromStringToDate(item.Data),
    description,
    value,
    installments,
  };
}
