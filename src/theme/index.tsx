import { createTheme } from "@mui/material";

import type {} from "@mui/x-data-grid/themeAugmentation";
const theme = createTheme({
  palette: {
    primary: {
      main: "#CC7C3C",
      light: "#E6A873",
      dark: "#8C4F1C",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f6eeda",
      paper: "#f5f0e6",
    },
    appBarColors: {
      main: "#8C4F1C",
      light: "#E6A873",
      dark: "#fff",
      contrastText: "#fff",
    },
  },
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
