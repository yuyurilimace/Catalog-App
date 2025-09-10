import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import { CustomAppBar } from "../AppBar";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";

const AppViewTemplate = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);
  const routeNames = ["Home", "Dashboard", "Pill"];
  if (auth?.userToken) {
    return (
      <>
        <CustomAppBar routeNames={routeNames} />
        <Container maxWidth={false}>{children}</Container>
      </>
    );
  }
  return <Navigate to={"/"} />;
};

export { AppViewTemplate };
