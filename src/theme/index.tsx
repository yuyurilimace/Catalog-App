import { createTheme } from "@mui/material";

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
  },
});

export { theme };
