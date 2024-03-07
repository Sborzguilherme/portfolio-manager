import { z } from "zod";

export const getExpenseByIdSchema = z.object({
  params: z.object({
    _id: z.string(),
  }),
});

export const createExpenseSchema = z.object({
  body: z.object({
    date: z.coerce.date(),
    category: z.string(),
    description: z.string(),
    value: z.number(),
  }),
});

export const deleteExpenseSchema = z.object({
  params: z.object({
    _id: z.string(),
  }),
});
