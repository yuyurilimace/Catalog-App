import type { Server } from "miragejs";

export {};

declare global {
  interface Window {
    mirajeServer?: Server;
  }
}
