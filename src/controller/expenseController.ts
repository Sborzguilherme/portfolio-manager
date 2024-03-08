import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ExpensesModel } from '../models';
import { GetExpenses } from 'types';
import { fromDateToString, fromStringToDate } from '../utils';

export async function getExpenseById(req: Request, res: Response) {
  try {
    const { _id } = req.params;
    const expense = await ExpensesModel.findOne(_id);

    if (!expense) {
      return res.boom.notFound();
    }

    return res.status(StatusCodes.OK).send({
      ...expense,
      date: fromDateToString(expense.date),
    });
  } catch (error) {
    console.log(`[${getExpenseById.name} error]`, error);
    return res.boom.badImplementation();
  }
}

export async function getExpenses(req: Request, res: Response) {
  try {
    const { category, startDate, endDate, pageSize, pageNumber } =
      req.query as GetExpenses;

    const result = await ExpensesModel.find(
      category,
      startDate,
      endDate,
      parseInt(pageSize),
      parseInt(pageNumber),
    );

    const formattedExpenses = result.expenses.map((r) => ({
      ...r,
      date: fromDateToString(r.date),
    }));

    return res
      .status(StatusCodes.OK)
      .send({ expenses: formattedExpenses, total: result.total });
  } catch (error) {
    console.log(`[${createExpense.name} error]`, error);
    return res.boom.badImplementation();
  }
}

export async function createExpense(req: Request, res: Response) {
  try {
    const payload = req.body;
    const _id = await ExpensesModel.insertOne({
      ...payload,
      date: fromStringToDate(payload.date),
      installments: payload.installments ?? null,
    });

    return res.status(StatusCodes.CREATED).send({ _id });
  } catch (error) {
    console.log(`[${createExpense.name} error]`, error);
    return res.boom.badImplementation();
  }
}

export async function updateExpense(req: Request, res: Response) {
  try {
    const { _id } = req.params;
    const payload = req.body;

    if (payload.date) {
      payload.date = fromStringToDate(payload.date);
    }

    const expense = await ExpensesModel.findOne(_id);

    if (!expense) {
      return res.boom.notFound();
    }

    const updateExpensePayload = {
      ...expense,
      ...payload,
    };

    const updatedExpense = await ExpensesModel.updateOne(
      _id,
      updateExpensePayload,
    );

    return res.status(StatusCodes.OK).send(updatedExpense);
  } catch (error) {
    console.log(`[${updateExpense.name} error]`, error);
    return res.boom.badImplementation();
  }
}

export async function deleteExpense(req: Request, res: Response) {
  try {
    const { _id } = req.params;
    const deletedExpense = await ExpensesModel.deleteOne(_id);

    if (!deletedExpense) {
      return res.boom.notFound();
    }

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    console.log(`[${deleteExpense.name} error]`, error);
    return res.boom.badImplementation();
  }
}
