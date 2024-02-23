import { ExpensesModel } from "../models";

export async function getExpenseById(req, res) {
  try {
    const { id } = req.params;
    const expense = await ExpensesModel.getExpenseById(id);

    return res.send(expense);
  } catch (error) {
    console.log(`${getExpenseById.name} error`, error);
  }
}
export function getExpenses() {}
export function createExpense() {}
export function updateExpense() {}
export function deleteExpense() {}
