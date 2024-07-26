import { z } from 'zod';
import { createExpenseBodySchema, updateExpenseBodySchema, getExpensesQuery } from '../schemas';

export type CreateExpenseDto = z.infer<typeof createExpenseBodySchema>;
export type UpdateExpenseDto = z.infer<typeof updateExpenseBodySchema>;
export type GetExpensesQueryDto = z.infer<typeof getExpensesQuery>;

type Installments = {
  current: number;
  total: number;
};

export type Expense = {
  _id: string;
  category: string;
  description: string;
  value: number;
  date: Date;
  installments: Installments | null;
};

export type ExpenseDto = {
  _id: string;
  category: string;
  description: string;
  value: number;
  date: string;
  installments: Installments | null;
};

export type CreateExpense = Omit<Expense, '_id'>;
export type UpdateExpense = {
  category?: string;
  description?: string;
  value?: number;
  date?: Date;
  installments?: Installments | null;
};
export type GetExpensesQuery = {
  startDate?: Date;
  endDate?: Date;
  pageSize: number;
  pageNumber: number;
  category?: string;
};

export type GetAllExpenses = {
  expenses: Expense[];
  total: number;
};

export type ExpenseCSVDto = {
  Data: string;
  Categoria: string;
  Descricao: string;
  Valor: string;
};
