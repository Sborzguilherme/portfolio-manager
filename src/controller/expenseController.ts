import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ExpensesModel } from "../models";

export async function getExpenseById(req: Request, res: Response) {
  try {
    const { _id } = req.params;
    const expense = await ExpensesModel.findOne(_id);

    return res.status(StatusCodes.OK).send(expense);
  } catch (error) {
    console.log(`[${getExpenseById.name} error]`, error);
    return res.status(StatusCodes.NOT_FOUND).send();
  }
}
export function getExpenses() {}
export async function createExpense(req: Request, res: Response) {
  try {
    const payload = req.body;
    const id = await ExpensesModel.insertOne(payload);

    return res.status(StatusCodes.CREATED).send({ id });
  } catch (error) {
    console.log(`[${createExpense.name} error]`, error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  }
}
export function updateExpense() {}
export function deleteExpense() {}
