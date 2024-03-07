import { z } from "zod";
import { createExpenseBodySchema, updateExpenseBodySchema } from "../schemas";

export type CreateExpense = z.infer<typeof createExpenseBodySchema>;
export type Expense = CreateExpense & {
  _id: string;
};
export type UpdateExpense = z.infer<typeof updateExpenseBodySchema>;
