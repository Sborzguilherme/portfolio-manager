import { ObjectId } from "mongodb";
import { getDbClient, collectionNames } from "../db";
import { CreateExpense } from "../types";

const ExpenseColletction = getDbClient().collection(collectionNames.EXPENSES);

export async function findOne(id: string) {
  return ExpenseColletction.findOne(new ObjectId(id));
}

export async function insertOne(expense: CreateExpense): Promise<string> {
  const insertedDocument = await ExpenseColletction.insertOne(expense);
  return insertedDocument.insertedId.toString();
}
