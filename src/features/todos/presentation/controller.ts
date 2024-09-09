import type { TodoRepository } from "../domain/repositorties/repository";
import { type Response, type Request, type NextFunction } from "express";
import { GetTodos } from "../domain/useCases/getAll.usecase";

export class TodoController {
  constructor(private readonly repository: TodoRepository) {}

  public getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const todoList = new GetTodos(this.repository).execute();

      return res.send(todoList);
    } catch (error) {
      next(error);
    }
  }

  public getById(req: Request, res: Response) {
    const user = req.user;
    console.log(user);
    return res.send({});
  }
}
