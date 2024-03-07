import { ObjectId } from "mongodb";
import { getDbClient, collectionNames } from "../db";
import { CreateExpense } from "../types";

const ExpenseColletction = getDbClient().collection(collectionNames.EXPENSES);

export async function findOne(_id: string) {
  return ExpenseColletction.findOne(new ObjectId(_id));
}

export async function insertOne(expense: CreateExpense): Promise<string> {
  const insertedDocument = await ExpenseColletction.insertOne(expense);
  return insertedDocument.insertedId.toString();
}

export async function deleteOne(_id: string) {
  const deletedDocument = await ExpenseColletction.deleteOne({
    _id: new ObjectId(_id),
  });
  return deletedDocument.deletedCount;
}
