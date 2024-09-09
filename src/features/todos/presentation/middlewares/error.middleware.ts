import type { Response, Request, NextFunction } from "express";
import { AppError } from "../../../../core/errors/app.error";
import { HttpStatusCode } from "../../../../core/constants/http";

export class ErrorMiddleware {
  public static handleError(
    error: unknown,
    _: Request,
    res: Response,
    next: NextFunction
  ) {
    if (error instanceof AppError) {
    } else {
      const message = "An internal error occurred";

      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message });
    }
  }
}
