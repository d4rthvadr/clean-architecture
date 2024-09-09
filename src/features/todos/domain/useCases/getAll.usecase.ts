import type { TodoEntity } from "../entities";
import type { TodoRespository } from "../repositorties/repository";

export interface GetTodosUseCase {
  execute: () => Promise<TodoEntity[]>;
}

export class GetTodos implements GetTodosUseCase {
  constructor(private readonly repository: TodoRespository) {}

  async execute(): Promise<TodoEntity[]> {
    return this.repository.getAll();
  }
}
