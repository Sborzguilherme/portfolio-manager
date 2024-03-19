import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createReadStream } from 'fs';
import { parse } from 'fast-csv';
import { ExpensesModel } from '../models';
import { GetExpenses } from 'types';
import { fromDateToString, fromStringToDate, formatExpensesFromCSV } from '../utils';
import { APIError } from '../APIError';
import { HTTP_ERRORS } from '../contants';

export async function getExpenseById(req: Request, res: Response, next: NextFunction) {
  try {
    const { _id } = req.params;
    const expense = await ExpensesModel.findOne(_id);

    if (!expense) {
      throw new APIError({
        method: getExpenseById.name,
        ...HTTP_ERRORS.NOT_FOUND,
      });
    }

    return res.status(StatusCodes.OK).send({
      ...expense,
      date: fromDateToString(expense.date),
    });
  } catch (error) {
    next(new APIError({ method: getExpenseById.name }));
    return true;
  }
}

export async function getExpenses(req: Request, res: Response, next: NextFunction) {
  try {
    const { category, startDate, endDate, pageSize, pageNumber } = req.query as GetExpenses;

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

    return res.status(StatusCodes.OK).send({ expenses: formattedExpenses, total: result.total });
  } catch (error) {
    next(new APIError({ method: getExpenses.name }));
    return true;
  }
}

export async function createExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    const _id = await ExpensesModel.insertOne({
      ...payload,
      date: fromStringToDate(payload.date),
      installments: payload.installments ?? null,
    });

    return res.status(StatusCodes.CREATED).send({ _id });
  } catch (error) {
    next(new APIError({ method: createExpense.name }));
    return true;
  }
}

export async function updateExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { _id } = req.params;
    const payload = req.body;

    if (payload.date) {
      payload.date = fromStringToDate(payload.date);
    }

    const expense = await ExpensesModel.findOne(_id);

    if (!expense) {
      next(new APIError({ method: createExpense.name, ...HTTP_ERRORS.NOT_FOUND }));
    }

    const updateExpensePayload = {
      ...expense,
      ...payload,
    };

    const updatedExpense = await ExpensesModel.updateOne(_id, updateExpensePayload);

    return res.status(StatusCodes.OK).send(updatedExpense);
  } catch (error) {
    next(new APIError({ method: createExpense.name }));
    return true;
  }
}

export async function deleteExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { _id } = req.params;
    const deletedExpense = await ExpensesModel.deleteOne(_id);

    if (!deletedExpense) {
      next(new APIError({ method: deleteExpense.name, ...HTTP_ERRORS.NOT_FOUND }));
    }

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    next(new APIError({ method: deleteExpense.name }));
    return true;
  }
}

export async function importExpenses(req: Request, res: Response, next: NextFunction) {
  try {
    const path = `./tmp/${req.file.filename}`;
    const expenses = [];

    createReadStream(path)
      .pipe(parse({ headers: true }))
      .on('error', (error) => {
        throw error.message;
      })
      .on('data', (row) => {
        expenses.push(row);
      })
      .on('end', async () => {
        const formattedExpenses = expenses.map(formatExpensesFromCSV);
        const result = await ExpensesModel.bulkInsert(formattedExpenses);
        res.status(StatusCodes.OK).send(result);
      });

    return true;
  } catch (error) {
    next(new APIError({ method: importExpenses.name }));
    return true;
  }
}
