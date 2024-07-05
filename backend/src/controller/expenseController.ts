import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createReadStream } from 'fs';
import { parse } from 'fast-csv';
import { ExpensesModel } from '../models';
import { CreateExpenseDto, ExpenseCSVDto, GetExpensesQueryDto, UpdateExpenseDto } from 'types';
import { formatExpensesFromCSV } from '../utils';
import { APIError } from '../APIError';
import { HTTP_ERRORS } from '../constants';
import {
  createExpenseFromDto,
  fromExpenseToDto,
  getExpenseQueryFromDto,
  updateExpenseFromDto,
} from '../dto';

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

    return res.status(StatusCodes.OK).send(fromExpenseToDto(expense));
  } catch (error) {
    next(new APIError({ method: getExpenseById.name }));
    return true;
  }
}

export async function getExpenses(req: Request, res: Response, next: NextFunction) {
  try {
    const getExpensesQuery = getExpenseQueryFromDto(req.query as GetExpensesQueryDto);
    const result = await ExpensesModel.find(getExpensesQuery);

    const formattedExpenses = result.expenses.map(fromExpenseToDto);

    return res.status(StatusCodes.OK).send({ expenses: formattedExpenses, total: result.total });
  } catch (error) {
    next(new APIError({ method: getExpenses.name }));
    return true;
  }
}

export async function createExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const createExpense = createExpenseFromDto(req.body as CreateExpenseDto);

    const _id = await ExpensesModel.insertOne(createExpense);

    return res.status(StatusCodes.CREATED).send({ _id });
  } catch (error) {
    next(new APIError({ method: createExpense.name }));
    return true;
  }
}

export async function updateExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { _id } = req.params;

    const expense = await ExpensesModel.findOne(_id);

    if (!expense) {
      next(new APIError({ method: createExpense.name, ...HTTP_ERRORS.NOT_FOUND }));
    }

    const updateExpensePayload = updateExpenseFromDto(req.body as UpdateExpenseDto);

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
    const path = `./tmp/${req?.file?.filename}`;
    const expenses: ExpenseCSVDto[] = [];

    createReadStream(path)
      .pipe(parse({ headers: true }))
      .on('error', (error) => {
        throw error.message;
      })
      .on('data', (row: ExpenseCSVDto) => {
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
