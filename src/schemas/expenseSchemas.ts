import { z } from "zod";

export const getExpenseByIdSchema = z.object({
  params: z.object({
    _id: z.string(),
  }),
});

export const createExpenseBodySchema = z
  .object({
    date: z.coerce.date(),
    category: z.string(),
    description: z.string(),
    value: z.number(),
  })
  .strict();

export const createExpenseSchema = z.object({
  body: createExpenseBodySchema,
});

export const updateExpenseBodySchema = z
  .object({
    date: z.coerce.date().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    value: z.number().optional(),
  })
  .strict();

export const updateExpenseSchema = z.object({
  params: z.object({
    _id: z.string(),
  }),
  body: updateExpenseBodySchema,
});

export const deleteExpenseSchema = z.object({
  params: z.object({
    _id: z.string(),
  }),
});
