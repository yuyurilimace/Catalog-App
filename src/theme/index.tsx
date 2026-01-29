import { createTheme } from "@mui/material";

import type {} from "@mui/x-data-grid/themeAugmentation";
const theme = createTheme({
  typography: {
    fontFamily: [
      "ui-sans-serif",
      "system-ui, sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),
  },
  palette: {
    orange: {
      50: "#fff7ed",
      100: "#ffedd4",
      200: "#ffd6a7",
      500: "#ff6900",
      600: "#f54900",
      700: "#ca3500",
      900: "#7e2a0c",
    },
    red: {
      50: "#fef2f2",
      200: "#ffc9c9",
      500: "#fb2c36",
      600: "#e7000b",
      700: "#c10007",
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d0fae5",
      500: "#00bc7d",
      600: "#009966",
      700: "#007a55",
    },
    green: {
      50: "#f0fdf4",
      500: "#00c950",
      600: "#00a63e",
    },
    cyan: {
      50: "#ecfeff",
      100: "#cefafe",
      200: "#a2f4fd",
      500: "#00b8db",
      600: "#0092b8",
      700: "#007595",
    },
    blue: {
      50: "#eff6ff",
      200: "#bedbff",
      500: "#2b7fff",
      600: "#155dfc",
      700: "#1447e6",
    },
    // Cores únicas
    purple: { main: "#ad46ff" },
    pink: { main: "#f6339a" },
    teal: { main: "#00bba7" },
    sky: { main: "#f0f9ff" },
    yellow: { main: "#f0b100" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "calc(0.625rem - 2px)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#2196f3",
          textDecoration: "none",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
        },
        columnHeader: {
          color: "#fff",
          backgroundColor: "#8C4F1C",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#8C4F1C",
          color: "#fff",
        },
      },
    },
  },
});

export { theme };
