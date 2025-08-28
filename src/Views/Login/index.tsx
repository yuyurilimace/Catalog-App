import { Grid } from "@mui/material";
import { ImageSection } from "./Sections/ImageSection";
import { FormSection } from "./Sections/FormSection";

const LoginView = () => {
  return (
    <Grid sx={{ height: "100vh" }} container>
      <Grid size={{ xl: 8, lg: 7, md: 6, sm: 0, xs: 0 }}>
        <ImageSection />
      </Grid>
      <Grid
        bgcolor={"background.default"}
        alignContent={"center"}
        justifyItems={"center"}
        size={{ xl: 4, lg: 5, md: 6, sm: 12, xs: 12 }}
      >
        <FormSection />
      </Grid>
    </Grid>
  );
};

export { LoginView };
