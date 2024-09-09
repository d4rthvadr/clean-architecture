import { HttpStatusCode } from "../../constants/http";
import { AppError } from "../app.error";

export class BadRequest extends AppError {
  constructor(message: string) {
    super(message, BadRequest.name, HttpStatusCode.BAD_REQUEST);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}
