import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import { LoginView } from "./Views/Login";

import { AppViewTemplate } from "./Components/AppViewTemplate";
import { Home } from "./Views/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <AppViewTemplate>
                <Home />
              </AppViewTemplate>
            }
          ></Route>

          <Route path="/" element={<LoginView />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { AppRouter };
