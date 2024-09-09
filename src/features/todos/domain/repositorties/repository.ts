import { type TodoEntity } from "../entities";
export abstract class TodoRepository {
  abstract getAll(): Promise<TodoEntity[]>;
  // other operations can go here
}
