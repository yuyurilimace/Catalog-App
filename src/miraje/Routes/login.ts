import { Server } from "miragejs";
import type { AnyFactories, AnyModels, Registry } from "miragejs/-types";

const LoginMockRoutes = (server: Server<Registry<AnyModels, AnyFactories>>) => {
  server.get("/api/login", (schema, Request) => {
    return { message: "Deu bom" };
  });
};

export default LoginMockRoutes;
