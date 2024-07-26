import { z } from 'zod';

export const getExpenseByIdSchema = z.object({
  params: z.object({
    _id: z.string(),
  }),
});

export const createExpenseBodySchema = z
  .object({
    date: z.string().date(),
    category: z.string(),
    description: z.string(),
    value: z.number(),
    installments: z.number().optional().nullable(),
  })
  .strict();

export const createExpenseSchema = z.object({
  body: createExpenseBodySchema,
});

export const updateExpenseBodySchema = z
  .object({
    date: z.string().date().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    value: z.number().optional(),
    installments: z
      .object({
        current: z.number(),
        total: z.number(),
      })
      .optional(),
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

export const getExpensesQuery = z
  .object({
    category: z.string().optional(),
    startDate: z.string().date().optional(),
    endDate: z.string().date().optional(),
    pageSize: z.string(),
    pageNumber: z.string(),
  })
  .strict();

export const getExpensesSchema = z.object({
  query: getExpensesQuery,
});
