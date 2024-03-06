import { Router } from "express";
import { expenseController } from "../controller";
import { validate } from "../middlewares";
import { getExpenseById, createExpenseSchema } from "../schemas";

const router = Router();

router.get(
  "/expense/:_id",
  validate(getExpenseById),
  expenseController.getExpenseById
);
router.get("/expense", expenseController.getExpenses);
router.post(
  "/expense",
  validate(createExpenseSchema),
  expenseController.createExpense
);
router.patch("/expense/:id", expenseController.updateExpense);
router.delete("/expense/:id", expenseController.deleteExpense);

export default router;
