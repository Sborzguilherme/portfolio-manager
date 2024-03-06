import { z } from "zod";

export const getExpenseById = z.object({
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
