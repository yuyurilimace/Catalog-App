import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./Context/authContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);
  if (auth?.userToken) {
    return <>{children}</>;
  }
  return <Navigate to={"/"} />;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                {" "}
                <div> Rota protegida </div>{" "}
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/" element={<div> home path </div>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { AppRouter };
