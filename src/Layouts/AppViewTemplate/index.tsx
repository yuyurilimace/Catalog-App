import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import { CustomAppBar } from "../../Components/AppBar";
import { Box, Container } from "@mui/material";
import { Navigate } from "react-router-dom";

const AppViewTemplate = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);
  const routeNames = ["Dashboard", "Collecions"];
  if (auth?.userToken) {
    return (
      <Box
        height={"100vh"}
        sx={{
          background:
            "linear-gradient(to bottom right,#eff6ff,#ecfeff,#f0f9ff)",
        }}
        display={"flex"}
        flexDirection={"column"}
      >
        <CustomAppBar routeNames={routeNames} />
        <Container maxWidth="xl">{children}</Container>
      </Box>
    );
  }
  return <Navigate to={"/"} />;
};

export { AppViewTemplate };
