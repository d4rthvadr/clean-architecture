import type { TodoDataStore } from "../domain/dataStore/dataStore";
import type { TodoEntity } from "../domain/entities";
import type { TodoRepository } from "../domain/repositorties/repository";

export class TodoRepositoryImp implements TodoRepository {
  constructor(private readonly dataSource: TodoDataStore) {}
  getAll(): Promise<TodoEntity[]> {
    return this.dataSource.getAll();
  }
}
