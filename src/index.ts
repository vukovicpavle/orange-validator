import { HttpError } from "@vukovicpavle/orange-http-error";
import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export function validatorMiddleware(
  schema: Schema,
  options?: { allowUnknown?: boolean }
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, options);
    if (error) {
      next(new HttpError(400, error.message));
    } else {
      next();
    }
  };
}
