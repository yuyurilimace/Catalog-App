import { Box, Chip, Grid, LinearProgress, Typography } from "@mui/material";
import { BookMarked } from "lucide-react";
import { theme } from "../../../../../theme";

interface Title {
  title: string;
  lastVolume: number;
  ownedCollectionAmount: number;
  missingVolumesAmount: number;
  collectionProgress: number;
  lectureProgress: number;
  missingVolumes: number[];
}

export const IncompleteTitleCard = (title: Title) => {
  return (
    <Grid container padding={3} spacing={2}>
      <Grid justifyItems={"center"}>
        <Box display={"flex"} gap={"calc(0.25rem * 3)"}>
          <Box
            px={2}
            py={3}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            sx={{
              background: "linear-gradient(to bottom right,#2b7fff,#00b8db)",
              borderRadius: "calc(0.625rem + 4px)",
            }}
          >
            <BookMarked color="white" size={32} />
          </Box>
        </Box>
      </Grid>
      <Grid container size={{ md: 10 }} rowGap={3}>
        <Grid size={{ md: 9 }}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.125rem"}
              color={theme.palette.grey?.[700]}
            >
              {title.title}
            </Typography>
            <Typography variant="subtitle1" color={theme.palette.grey?.[500]}>
              {title.ownedCollectionAmount} de {title.lastVolume} Volumes
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ md: 3 }} textAlign={"end"}>
          <Chip
            label={`${title.missingVolumesAmount} faltando`}
            sx={{
              backgroundColor: theme.palette.orange?.[100],
              color: theme.palette.orange?.[600],
              fontSize: "1rem",
            }}
          />
        </Grid>
        <Grid container size={12}>
          <Box display={"flex"} flexDirection={"column"} flex={1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="subtitle1">
                {" "}
                Progresso da coleção{" "}
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                {title.collectionProgress}%{" "}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={10}
              sx={{
                backgroundColor: theme.palette.grey?.[200],
                height: 12,
                borderRadius: "0.625rem",
                "& .MuiLinearProgress-bar": {
                  background: `linear-gradient(to right,${theme.palette.orange?.[500]},${theme.palette.red?.[500]})`,
                  borderRadius: "0.625rem",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid container size={12}>
          <Box display={"flex"} flexDirection={"column"} flex={1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="subtitle1">
                {" "}
                Progresso de Leitura{" "}
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                {title.lectureProgress}%{" "}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={80}
              sx={{
                backgroundColor: theme.palette.grey?.[200],
                height: 12,
                borderRadius: "0.625rem",
                "& .MuiLinearProgress-bar": {
                  background: `linear-gradient(to right,${theme.palette.emerald?.[500]},${theme.palette.green?.[500]})`,
                  borderRadius: "0.625rem",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid container size={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            padding={2.5}
            flex={1}
            sx={{
              borderColor: theme.palette.orange?.[200],
              borderWidth: "1px",
              borderRadius: "0.625rem",
              borderStyle: "solid",
              backgroundColor: theme.palette.orange?.[50],
            }}
          >
            <Typography marginBottom={1} color={theme.palette.orange?.[900]}>
              {" "}
              Volumes faltantes :
            </Typography>
            <Typography color={theme.palette.orange?.[700]}>
              {title.missingVolumes.join(",")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
