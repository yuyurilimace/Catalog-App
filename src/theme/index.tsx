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
  palette: {},
  components: {
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
