import { ObjectId } from "mongodb";
import { getDbClient } from "../db";
import { Expense } from "types";

const ExpenseColletction = getDbClient().collection("Expense");

export async function findOne(id: string) {
  return ExpenseColletction.findOne(new ObjectId(id));
}

export async function insertOne(expense: Expense) {
  return ExpenseColletction.insertOne(expense);
}
