import type { Server } from "miragejs";

export {};

declare global {
  interface Window {
    mirajeServer?: Server;
  }
}

declare module "@mui/material/styles" {
  interface PaletteOptions {
    appBarColors?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
}
