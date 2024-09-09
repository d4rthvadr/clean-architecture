import { AppRoutes } from "./routes";

function main(): void {
  const server = new Server({
    routes: AppRoutes.routes,
    apiPrefix: envs.API_PREFIX,
    port: eventNames.PORT,
  });
}
(() => {
  main();
})();
