import { Router } from "express";
import { expenseController } from "../controller";

const router = Router();

router.get("/expense/:id", expenseController.getExpenseById);
router.get("/expense", expenseController.getExpenses);
router.post("/expense", expenseController.createExpense);
router.patch("/expense/:id", expenseController.updateExpense);
router.delete("/expense/:id", expenseController.deleteExpense);

export default router;
