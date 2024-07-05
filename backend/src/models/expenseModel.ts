import { ObjectId } from 'mongodb';
import { getDbClient, collectionNames } from '../db';
import { CreateExpense, UpdateExpense, Expense, GetAllExpenses, GetExpensesQuery } from '../types';

const ExpenseColletction = getDbClient().collection(collectionNames.EXPENSES);

export async function findOne(_id: Expense['_id']) {
  return ExpenseColletction.findOne(new ObjectId(_id)) as unknown as Promise<Expense | null>;
}

export async function insertOne(expense: CreateExpense): Promise<Expense['_id']> {
  const insertedDocument = await ExpenseColletction.insertOne(expense);
  return insertedDocument.insertedId.toString();
}

export async function updateOne(_id: Expense['_id'], expense: UpdateExpense): Promise<Expense> {
  const updatedDocument = await ExpenseColletction.findOneAndUpdate(
    { _id: new ObjectId(_id) },
    { $set: expense },
    { returnDocument: 'after' },
  );

  if (!updatedDocument) {
    throw Error(`Error updating document ${_id}`);
  }

  return {
    _id: updatedDocument._id.toString(),
    category: updatedDocument.category,
    description: updatedDocument.description,
    date: updatedDocument.date,
    value: updatedDocument.value,
    installments: updatedDocument.installments,
  };
}

export async function deleteOne(_id: Expense['_id']) {
  const deletedDocument = await ExpenseColletction.deleteOne({
    _id: new ObjectId(_id),
  });
  return deletedDocument.deletedCount;
}

export async function find({
  category,
  startDate,
  endDate,
  pageSize,
  pageNumber,
}: GetExpensesQuery): Promise<GetAllExpenses> {
  let filters = {};
  let skip = 0;
  let limit = 100;

  if (category) {
    filters = {
      ...filters,
      category,
    };
  }

  if (startDate) {
    filters = {
      ...filters,
      date: {
        $gte: new Date(startDate),
      },
    };
  }

  if (endDate) {
    filters = {
      ...filters,
      date: {
        $lte: new Date(endDate),
      },
    };
  }

  if (pageSize && pageNumber) {
    skip = (pageNumber - 1) * pageSize;
    limit = pageSize;
  }

  const expenses = (await ExpenseColletction.aggregate([
    { $match: filters },
    {
      $group: {
        _id: null,
        expenses: {
          $push: {
            _id: '$_id',
            category: '$category',
            description: '$description',
            date: '$date',
            value: '$value',
            installments: '$installments',
          },
        },
        total: {
          $sum: 1,
        },
      },
    },
    {
      $unwind: '$expenses',
    },
    {
      $sort: {
        'expenses.date': 1,
      },
    },
    {
      $group: {
        _id: null,
        expenses: {
          $push: '$expenses',
        },
        total: { $first: '$total' },
      },
    },
    {
      $project: {
        _id: 0,
        expenses: {
          $slice: ['$expenses', skip, limit],
        },
        total: 1,
      },
    },
  ]).toArray()) as GetAllExpenses[];

  if (expenses.length === 0) {
    return {
      expenses: [],
      total: 0,
    };
  }

  return expenses[0];
}

function mapIdsFromBulkInsert(insertedIds: { [key: number]: ObjectId }) {
  return {
    _ids: Object.values(insertedIds).map((_id) => _id.toString()),
  };
}

export async function bulkInsert(expenses): Promise<{ _ids: string[] }> {
  try {
    const { insertedIds } = await ExpenseColletction.insertMany(expenses, {
      ordered: false,
    });

    return mapIdsFromBulkInsert(insertedIds);
  } catch (error: any) {
    console.log(
      `[expenseModel.${bulkInsert.name}]: Number of ignored duplicate records = ${error.writeErrors.length}`,
    );
    return mapIdsFromBulkInsert(error.result.insertedIds);
  }
}
