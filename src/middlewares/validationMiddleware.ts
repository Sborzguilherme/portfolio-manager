import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

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
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .send("Unprocessable entity");
    }
  };
}
