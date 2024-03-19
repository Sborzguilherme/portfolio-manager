import { NextFunction, Request, Response } from 'express';
import { APIError } from '../APIError';
import { HTTP_ERRORS } from '../contants';

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  let { status, message } = HTTP_ERRORS.INTERNAL_SERVER_ERROR;

  if (err instanceof APIError) {
    status = err.status;
    message = err.message;

    console.log(`[${err.method} error]`, err.stack);
  }

  return res.status(status).send({ success: false, message });
}
