import { Router } from "express";
import { expenseController } from "../controller";
import { validate } from "../middlewares";
import {
  getExpenseByIdSchema,
  createExpenseSchema,
  deleteExpenseSchema,
  updateExpenseSchema,
} from "../schemas";

const router = Router();

router.get(
  "/expense/:_id",
  validate(getExpenseByIdSchema),
  expenseController.getExpenseById
);
router.get("/expense", expenseController.getExpenses);
router.post(
  "/expense",
  validate(createExpenseSchema),
  expenseController.createExpense
);
router.patch(
  "/expense/:_id",
  validate(updateExpenseSchema),
  expenseController.updateExpense
);
router.delete(
  "/expense/:_id",
  validate(deleteExpenseSchema),
  expenseController.deleteExpense
);

export default router;
