import { Box, Typography } from "@mui/material";
import { BookOpen } from "lucide-react";
import { Icon } from "../Icon";

export const Logo = () => {
  return (
    <Box display={"flex"} gap={"calc(0.25rem * 3)"}>
      <Icon
        padding={1.5}
        background={"linear-gradient(to bottom right,#2b7fff,#00b8db)"}
        borderRadius="calc(0.625rem + 4px)"
        icon={<BookOpen color="white" size={32} />}
        title="Dashboard de Mangás"
        titleColor="#fff"
        subtitle="Gerencie sua coleção completa"
        subtitleColor="#cffafe"
      />
    </Box>
  );
};
