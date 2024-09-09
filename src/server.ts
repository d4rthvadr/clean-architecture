import type { NextFunction, Response, Request, Router } from "express";
//import compression from "compression";
import express from "express";
import { NotFound } from "./core/errors/http/notFound.error";

interface ServerOptions {
  port: number;
  routes: Router;
  apiPrefix: string;
}

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly routes: Router;
  private readonly apiPrefix: string;

  constructor(options: ServerOptions) {
    const { port, routes, apiPrefix } = options;

    this.port = port;
    this.routes = routes;
    this.apiPrefix = apiPrefix;
  }

  async start(): Promise<void> {
    this.app.use(express.urlencoded());

    // this.app.use(compression());

    // TODO: Add rate-limiting support

    // COrs
    this.app.use((req, res, next) => {
      // allowed origins
      // Optionally retrieve from a datastore

      const allowedOrigins = ["http://localhost:3000"];

      const origin = req.headers.origin;

      if (allowedOrigins.includes(origin!)) {
        res.setHeader("Access-Control-Allow-Origin", origin!);
      }

      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    });

    this.app.use(this.apiPrefix, this.routes);

    // Handle routes not found
    this.routes.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new NotFound(`Cant find ${req.originalUrl} on this server!`));
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}...`);
    });
  }
}
