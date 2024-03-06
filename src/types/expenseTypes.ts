import { z } from "zod";
import { createExpenseSchema } from "../schemas";

export type CreateExpense = z.infer<typeof createExpenseSchema>;
