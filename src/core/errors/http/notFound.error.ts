import { HttpStatusCode } from "../../constants/http";
import { AppError } from "../app.error";

export class NotFound extends AppError {
  constructor(message: string) {
    super(message, NotFound.name, HttpStatusCode.NOT_FOUND);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}
