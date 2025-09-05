import { createServer } from "miragejs";
import LoginMockRoutes from "./Routes/login";

export default function StartServer() {
  console.log("subiu servidor de mock");
  if (window.mirajeServer) {
    console.log("subiu servidor de mock");
    createServer({
      routes() {
        LoginMockRoutes(this);
      },
    });
    return;
  }
  console.log("Servidor já aberto");
}
