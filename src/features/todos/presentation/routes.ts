import { Router } from "express";
import { TodoDataStoreImpl } from "../infrastructure/local.dataStore.impl";
import { TodoRepositoryImp } from "../infrastructure/repository.impl";
import { TodoController } from "./controller";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();

    const repository = new TodoRepositoryImp(new TodoDataStoreImpl());

    const controller = new TodoController(repository);

    router.get("/", controller.getAll);

    // rest of routes
    return router;
  }
}
