import type { TodoDataStore } from "../domain/dataStore/dataStore";
import { TodoEntity } from "../domain/entities";

const TODOS_MOCK = [
  {
    id: 1,
    text: "First todo...",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Second todo...",
    isCompleted: false,
  },
];

export class TodoDataStoreImpl implements TodoDataStore {
  async getAll(): Promise<TodoEntity[]> {
    return TODOS_MOCK.map((t) => TodoEntity.fromJson(t));
  }
}
