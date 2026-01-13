import { Grid, Box } from "@mui/material";

import { LoginForm } from "./LoginForm";
import { LoginFormHeader } from "./LoginFormHeader";

const FormSection = () => {
  return (
    <Grid
      alignItems={"center"}
      justifyContent={"center"}
      size={{ md: 6, sm: 12, xs: 12 }}
      spacing={8}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={6}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <LoginFormHeader />
        <LoginForm />
      </Box>
    </Grid>
  );
};

export { FormSection };
