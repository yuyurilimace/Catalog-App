import { Button, Grid } from "@mui/material";
import { Plus } from "lucide-react";

export const ActionToolbar = () => {
  return (
    <Grid size={{ md: 12 }} justifyContent={"flex-end"} container>
      <Button
        sx={{
          background: (theme) =>
            `linear-gradient(to right,${theme.palette.blue?.[600]},${theme.palette.cyan?.[600]})`,
          textTransform: "none",
          ":hover": {
            background: (theme) =>
              `linear-gradient(to right,${theme.palette.blue?.[700]},${theme.palette.cyan?.[700]})`,
          },
        }}
        variant="contained"
        startIcon={<Plus size={18} />}
      >
        Adicionar Mangá
      </Button>
    </Grid>
  );
};
