import { Box, TextField } from "@mui/material";
import { CircleAlert } from "lucide-react";
import { theme } from "../../../../../theme";
import { Icon } from "../../../../../Components/Icon";

export const IncompletTitleHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      sx={{
        background: `linear-gradient(to right,${theme.palette.orange?.[500]},${theme.palette.red?.[500]})`,
        padding: 4,
      }}
    >
      <Box display={"flex"} gap={"calc(0.25rem * 3)"} marginBottom={1}>
        <Icon
          icon={<CircleAlert color="white" size={32} />}
          title=" Coleções Incompletas"
          subtitle="  X coleções precisam de volumes"
          subtitleColor={theme.palette.orange?.[100]}
        />
      </Box>
      <TextField
        hiddenLabel
        placeholder="Buscar coleções..."
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.625rem",
            color: `${theme.palette.orange?.[100]}`,
            "& fieldset": {
              borderColor: "color-mix(in oklab,#fff 20%,transparent)",
            },

            "&:hover fieldset": {
              borderColor: "color-mix(in oklab,#fff 30%,transparent)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "color-mix(in oklab, #fff 50%, transparent)",
              borderWidth: "3px",
            },
          },

          "& .MuiInputBase-input::placeholder": {
            color: `${theme.palette.orange?.[100]}`,
            opacity: 1,
            paddingLeft: 0,
          },

          "& .MuiInputBase-input": {
            paddingLeft: 6,
            caret: "red",
          },

          background: "color-mix(in oklab,#fff 20%,transparent)",
          borderRadius: "0.625rem",
          color: `${theme.palette.orange?.[200]}`,
        }}
      />
    </Box>
  );
};
