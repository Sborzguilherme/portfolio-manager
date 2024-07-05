import {
  CreateExpense,
  CreateExpenseDto,
  Expense,
  ExpenseDto,
  GetExpensesQuery,
  GetExpensesQueryDto,
  UpdateExpense,
  UpdateExpenseDto,
} from 'types';
import { fromDateToString, fromStringToDate } from '../utils';
import { DATE_FORMAT } from '../constants';

export function getExpenseQueryFromDto(expenseQueryDto: GetExpensesQueryDto): GetExpensesQuery {
  const { startDate, endDate, category, pageNumber, pageSize } = expenseQueryDto;
  return {
    startDate: startDate ? fromStringToDate(startDate, DATE_FORMAT.STRING_INPUT_FORMAT) : undefined,
    endDate: endDate ? fromStringToDate(endDate, DATE_FORMAT.STRING_INPUT_FORMAT) : undefined,
    category: category ? category : undefined,
    pageNumber: parseInt(pageNumber),
    pageSize: parseInt(pageSize),
  };
}

export function createExpenseFromDto(expenseDto: CreateExpenseDto): CreateExpense {
  return {
    ...expenseDto,
    date: fromStringToDate(expenseDto.date, DATE_FORMAT.STRING_INPUT_FORMAT),
    installments: expenseDto.installments ?? null,
  };
}

export function updateExpenseFromDto(expenseDto: UpdateExpenseDto): UpdateExpense {
  return Object.keys(expenseDto).reduce((acc, key) => {
    if (!expenseDto[key]) {
      return acc;
    }

    let val = expenseDto[key];
    if (key === 'date') {
      val = fromStringToDate(val, DATE_FORMAT.STRING_INPUT_FORMAT);
    }

    return {
      ...acc,
      val,
    };
  }, {});
}

export function fromExpenseToDto(expense: Expense): ExpenseDto {
  return {
    ...expense,
    date: fromDateToString(expense.date),
  };
}
