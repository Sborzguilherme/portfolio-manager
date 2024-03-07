import { Router } from "express";
import { expenseController } from "../controller";
import { validate } from "../middlewares";
import {
  getExpenseByIdSchema,
  createExpenseSchema,
  deleteExpenseSchema,
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
router.patch("/expense/:id", expenseController.updateExpense);
router.delete(
  "/expense/:_id",
  validate(deleteExpenseSchema),
  expenseController.deleteExpense
);

export default router;
