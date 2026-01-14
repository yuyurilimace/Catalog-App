import { Box, Typography } from "@mui/material";
import { BookOpen } from "lucide-react";

export const Logo = () => {
  return (
    <Box display={"flex"} gap={"calc(0.25rem * 3)"}>
      <Box
        padding={1.5}
        textAlign={"center"}
        display={"flex"}
        alignItems={"center"}
        sx={{
          background: "linear-gradient(to bottom right,#2b7fff,#00b8db)",
          borderRadius: "calc(0.625rem + 4px)",
        }}
      >
        <BookOpen color="white" size={32} />
      </Box>
      <Box
        display={{ xs: "none", sm: "flex", md: "flex" }}
        flexDirection={"column"}
      >
        <Typography color="#fff" variant="h6">
          Dashboard de Mangás
        </Typography>
        <Typography color="#cffafe" variant="subtitle1">
          Gerencie sua coleção completa
        </Typography>
      </Box>
    </Box>
  );
};
