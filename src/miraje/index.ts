import { createServer } from "miragejs";
import LoginMockRoutes from "./Routes/login";

export default function StartServer() {
  if (!window.mirajeServer) {
    console.log("subiu servidor de mock");
    createServer({
      routes() {
        this.namespace = "api";
        LoginMockRoutes(this);
      },
    });
  } else {
    console.log("Servidor já aberto");
  }
}
