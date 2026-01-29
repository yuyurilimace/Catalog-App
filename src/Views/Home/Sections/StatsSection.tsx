import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { BookOpen, CircleAlert, CircleCheck, Eye, Pause } from "lucide-react";
import { theme } from "../../../theme";
import { Icon } from "../../../Components/Icon";

export const StatsSection = () => {
  const CardsMap = [
    {
      icon: <BookOpen color={theme.palette.blue?.[600]} size={24} />,
      iconBackground: theme.palette.blue?.[50],
      dataColor: `linear-gradient(to right, ${theme.palette.blue?.[500]},${theme.palette.blue?.[600]} )`,
      data: "200",
      title: "Total de volumes",
      subtitle: "",
    },
    {
      icon: <Eye color={theme.palette.green?.[600]} size={24} />,
      iconBackground: theme.palette.green?.[50],
      dataColor: `linear-gradient(to right, ${theme.palette.green?.[500]},${theme.palette.green?.[600]} )`,
      data: "200",
      title: "Volumes Lidos",
      subtitle: "50% do total",
    },
    {
      icon: <CircleCheck color={theme.palette.emerald?.[600]} size={24} />,
      iconBackground: theme.palette.emerald?.[50],
      dataColor: `linear-gradient(to right, ${theme.palette.emerald?.[500]},${theme.palette.emerald?.[600]} )`,
      data: "200",
      title: "Coleções completas",
      subtitle: "de 10 coleções",
    },
    {
      icon: <CircleAlert color={theme.palette.orange?.[600]} size={24} />,
      iconBackground: theme.palette.orange?.[50],
      dataColor: `linear-gradient(to right, ${theme.palette.orange?.[500]},${theme.palette.orange?.[600]} )`,
      data: "200",
      title: "Coleções Incompletas",
      subtitle: "necessitam de volumes",
    },
    {
      icon: <Pause color={theme.palette.grey?.[600]} size={24} />,
      iconBackground: theme.palette.grey?.[50],
      dataColor: `linear-gradient(to right, ${theme.palette.grey?.[500]},${theme.palette.grey?.[600]} )`,
      data: "200",
      title: "Coleções paradas",
      subtitle: "sem progresso",
    },
  ];
  return (
    <Grid size={{ md: 12 }} container spacing={4} columns={{ md: 25, sm: 15 }}>
      {CardsMap.map((card) => (
        <Grid size={5}>
          <Card
            sx={{
              borderRadius: "calc(0.625rem + 4px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              height: "100%",
            }}
          >
            <CardContent sx={{ padding: "calc(0.25rem * 6)" }}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
              >
                <Icon
                  padding={1.5}
                  background={card.iconBackground}
                  icon={card.icon}
                />
                <Box marginTop={1.5}>
                  <Typography
                    variant="body1"
                    color="transparent"
                    sx={{ background: card.dataColor, backgroundClip: "text" }}
                  >
                    {card.data}
                  </Typography>
                  <Typography color={theme.palette.grey?.[600]}>
                    {card.title}
                  </Typography>
                  <Typography color={theme.palette.grey?.[400]}>
                    {card.subtitle}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
