import { Grid } from "@mui/material";
import { AppViewTemplate } from "../../Layouts/AppViewTemplate";

import { ActionToolbar } from "./Sections/ActionToolbar";
import { StatsSection } from "./Sections/StatsSection";
import { IncompleteCollectionsSection } from "./Sections/IncompleteCollections";

const Home = () => {
  return (
    <AppViewTemplate>
      <Grid container spacing={3}>
        <ActionToolbar />
        <StatsSection />
        <IncompleteCollectionsSection />
      </Grid>
    </AppViewTemplate>
  );
};

export { Home };
