import { AppBar, Grid, Container } from "@mui/material";

import { Logo } from "./logo";
import { NavigateButtons } from "./actions";

const CustomAppBar = ({ routeNames }: { routeNames: string[] }) => {
  return (
    <AppBar
      position="static"
      sx={{
        height: "10%",
        background: "linear-gradient(to right ,#2563eb,#0891b2)",
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid
          container
          height={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid>
            <Logo />
          </Grid>
          <Grid container alignItems={"center"} spacing={2}>
            <NavigateButtons routeNames={routeNames} />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export { CustomAppBar };
