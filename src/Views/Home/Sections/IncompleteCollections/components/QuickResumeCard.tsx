import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { theme } from "../../../../../theme";

export const QuickResumeCard = () => {
  return (
    <Grid container size={12}>
      <Grid size={12}>
        <Card
          sx={{
            background: `linear-gradient(to bottom right,${theme.palette.blue?.[500]},${theme.palette.cyan?.[500]})`,
          }}
        >
          <CardHeader
            title="Resumo rapido"
            slotProps={{ title: { color: "#fff" } }}
          />
          <CardContent>
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color="#fff"> info a </Typography>
                <Typography color="#fff"> info b </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
