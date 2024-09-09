import { User } from "./interfaces";

declare global {
  declare namespace Express {
    interface Request {
      user: User;
    }
  }
}
