import { Grid, Paper, Box } from "@mui/material";
import Logo from "../../../assets/logo.svg";
import { LoginForm } from "./LoginForm";

const FormSection = () => {
  return (
    <Paper elevation={8} sx={{ width: "80%" }}>
      <Grid container padding={3}>
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          size={12}
          padding={3}
        >
          <Box width={"100%"} height={"auto"} maxWidth={"400px"}>
            <Logo />
          </Box>
        </Grid>
        <LoginForm />
      </Grid>
    </Paper>
  );
};

export { FormSection };
