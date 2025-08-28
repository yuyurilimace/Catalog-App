import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./Context/authContext";
import { LoginView } from "./Views/Login";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);
  console.log(auth);
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
            path="/home"
            element={
              <ProtectedRoute>
                {" "}
                <div> Rota protegida </div>{" "}
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/" element={<LoginView />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { AppRouter };
