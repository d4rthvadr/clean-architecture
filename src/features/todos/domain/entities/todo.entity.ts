export class TodoEntity {
  private constructor(
    public id: number,
    public text: string,
    public isComplete: boolean
  ) {}

  public static fromJson(obj: Record<string, unknown>): TodoEntity {
    const { id, text, isCompleted = false } = obj;
    if (!id) throw new Error();
    if (!text) throw new Error();

    return new TodoEntity(id as number, text as string, isCompleted as boolean);
  }
}
