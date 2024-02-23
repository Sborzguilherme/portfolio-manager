import { Router } from "express";
import expenseRouter from "./expenseRouter";

const router = Router();

router.use("/", expenseRouter);

export default router;
