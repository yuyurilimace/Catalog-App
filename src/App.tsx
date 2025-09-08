import { ThemeProvider } from "@mui/material";
import "./App.css";
import { AppRouter } from "./router";
import { theme } from "./theme";
import StartServer from "./miraje";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const enableMockServer = import.meta.env.VITE_API_MOCK;
  const AppMode = import.meta.env.MODE;
  console.log(AppMode);
  if (enableMockServer && AppMode === "development") {
    StartServer();
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
