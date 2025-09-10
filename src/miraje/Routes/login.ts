import { Server } from "miragejs";
import type { AnyFactories, AnyModels, Registry } from "miragejs/-types";

const LoginMockRoutes = (server: Server<Registry<AnyModels, AnyFactories>>) => {
  return server.post("/login", (schema, Request) => {
    return { token: "mocked_jwt_Token", isAuth: true };
  });
};

export default LoginMockRoutes;
