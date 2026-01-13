import { Card, CardContent, Grid } from "@mui/material";

export const LoginCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card raised sx={{ borderRadius: "calc(0.625rem + 4px)" }}>
      <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }}>
        <Grid height={"100%"} container>
          {children}
        </Grid>
      </CardContent>
    </Card>
  );
};
