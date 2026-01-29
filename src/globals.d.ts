import type { Server } from "miragejs";

export {};

declare global {
  interface Window {
    mirajeServer?: Server;
  }
}

declare module "@mui/material/styles" {
  interface ColorScale {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    900?: string;
  }

  interface SimpleColor {
    main: string;
  }

  interface Theme {
    palette: PaletteOptions;
  }

  interface PaletteOptions {
    orange?: ColorScale;
    red?: ColorScale;
    emerald?: ColorScale;
    green?: ColorScale;
    cyan?: ColorScale;
    blue?: ColorScale;
    purple?: SimpleColor;
    pink?: SimpleColor;
    teal: SimpleColor;
    sky: SimpleColor;
    yellow: SimpleColor;
    appBarColors?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
}
