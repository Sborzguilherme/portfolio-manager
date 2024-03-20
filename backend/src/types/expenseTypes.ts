import { z } from 'zod';
import {
  createExpenseBodySchema,
  updateExpenseBodySchema,
  getExpensesQuery,
} from '../schemas';

export type CreateExpense = z.infer<typeof createExpenseBodySchema>;
export type Expense = CreateExpense & {
  _id: string;
};
export type UpdateExpense = z.infer<typeof updateExpenseBodySchema>;
export type GetExpenses = z.infer<typeof getExpensesQuery>;

export type GetAllExpenses = {
  expenses: Expense[];
  total: number;
};

export type ExpenseCSV = {
  Data: string;
  Categoria: string;
  Descricao: string;
  Valor: string;
};
