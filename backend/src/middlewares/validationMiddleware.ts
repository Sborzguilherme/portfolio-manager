import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { HTTP_ERRORS } from '../contants';

export function validate(schema: ZodSchema) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (err) {
      console.log(`[${validate.name} error]`, err.errors);
      return res.status(HTTP_ERRORS.VALIDATION_ERROR.status).send({
        success: false,
        message: HTTP_ERRORS.VALIDATION_ERROR.message,
      });
    }
  };
}
