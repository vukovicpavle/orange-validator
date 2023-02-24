import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export function validatorMiddleware(
  schema: Schema,
  options?: { allowUnknown?: boolean }
): (req: Request, res: Response, next: NextFunction) => void;
