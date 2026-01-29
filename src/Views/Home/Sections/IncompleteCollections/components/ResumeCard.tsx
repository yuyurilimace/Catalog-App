import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";

import { TrendingUp } from "lucide-react";
import { theme } from "../../../../../theme";

export const ResumeCard = () => {
  const mockedData = [
    {
      id: 0,
      value: 10,
      label: "Completos",
      color: theme.palette.emerald?.[500],
    },
    {
      id: 1,
      value: 15,
      label: "Incompletos",
      color: theme.palette.grey?.[500],
    },
    { id: 2, value: 20, label: "Parados", color: theme.palette.orange?.[500] },
  ];
  return (
    <Grid container size={12}>
      <Grid size={12}>
        <Card sx={{ borderRadius: "0.625rem" }}>
          <CardHeader
            title="Status das coleções"
            slotProps={{ title: { variant: "h6" } }}
            avatar={<TrendingUp color={theme.palette.blue?.[500]} />}
          />
          <CardContent>
            <PieChart
              colors={mockedData.map((data) => data.color)}
              hideLegend
              series={[
                {
                  data: mockedData,
                  valueFormatter: ({ value }) => `${value}%`,
                },
              ]}
              width={200}
              height={200}
            />
            <Box display={"flex"} flexDirection={"column"} marginTop={4}>
              {mockedData.map((data) => (
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  textAlign={"start"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Box
                      sx={{
                        backgroundColor: data.color,
                        borderRadius: "50%",
                        width: "10px",
                        height: "10px",
                        marginRight: 2,
                      }}
                    />
                    <Typography> {data.label} </Typography>
                  </Box>
                  <Typography> {data.value} </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
