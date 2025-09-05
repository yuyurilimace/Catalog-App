export {};

declare global {
  interface Window {
    mirajeServer?: import("miragejs").Server;
  }
}
