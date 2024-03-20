import { Router } from 'express';
import { expenseController } from '../controller';
import { validate, uploadMiddleware } from '../middlewares';
import {
  getExpenseByIdSchema,
  createExpenseSchema,
  deleteExpenseSchema,
  updateExpenseSchema,
  getExpensesSchema,
} from '../schemas';

const router = Router();

router.get(
  '/expense/:_id',
  validate(getExpenseByIdSchema),
  expenseController.getExpenseById,
);
router.get(
  '/expense',
  validate(getExpensesSchema),
  expenseController.getExpenses,
);
router.post(
  '/expense',
  validate(createExpenseSchema),
  expenseController.createExpense,
);
router.patch(
  '/expense/:_id',
  validate(updateExpenseSchema),
  expenseController.updateExpense,
);
router.delete(
  '/expense/:_id',
  validate(deleteExpenseSchema),
  expenseController.deleteExpense,
);

router.post(
  '/expense/import',
  uploadMiddleware.single('csvFile'),
  expenseController.importExpenses,
);

export default router;