// import { Grid } from "@mui/material";
// import { ImageSection } from "./Sections/ImageSection";
// import { FormSection } from "./Sections/FormSection";

import { Box, Container } from "@mui/material";

import { ImageSection } from "./Sections/ImageSection";

import { LoginCard } from "./Sections/LoginCard";
import { FormSection } from "./Sections/FormSection";
const LoginView = () => {
  return (
    <Box
      height={"100vh"}
      sx={{
        background: "linear-gradient(to bottom right,#eff6ff,#ecfeff,#f0f9ff)",
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container>
        <LoginCard>
          <ImageSection />
          <FormSection />
        </LoginCard>
      </Container>
    </Box>
  );
};

export { LoginView };
