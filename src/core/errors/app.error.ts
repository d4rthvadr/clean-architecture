import type { HttpStatusCode } from "../constants/http";

export class AppError extends Error {
  public readonly name: string;
  public readonly statusCode: HttpStatusCode;

  constructor(
    message: string,
    name: string,
    statusCode: HttpStatusCode | number
  ) {
    super(message);
    this.name = name ?? "Error";
    this.statusCode = statusCode;
  }
}
