import type { TodoEntity } from "../entities";

export abstract class TodoDataStore {
  abstract getAll(): Promise<TodoEntity[]>;
  // rest of operations
}
