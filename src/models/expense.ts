import { ObjectId } from "mongodb";
import { getDbClient } from "../db";

const ExpenseColletction = getDbClient().collection("Expense");

export async function getExpenseById(id: string) {
  return ExpenseColletction.findOne(new ObjectId(id));
}
