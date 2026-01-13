import { Box, Typography } from "@mui/material";
import { BookOpen } from "lucide-react";

export const LoginFormHeader = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      marginBottom={6}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        padding={2}
        textAlign={"center"}
        sx={{
          background: "linear-gradient(to bottom right,#2b7fff,#00b8db)",
          borderRadius: "50%",
        }}
      >
        <BookOpen color="white" size={56} />
      </Box>
      <Typography
        fontWeight={"bold"}
        color="transparent"
        fontSize={"1.875rem"}
        variant="h2"
        marginTop={4}
        sx={{
          background: "linear-gradient(to right,#155dfc,#00b8db)",
          backgroundClip: "text",
        }}
      >
        Mangá Dashboard
      </Typography>
      <Typography marginTop={1} color="#4a5565" variant="subtitle1">
        Entre para gerenciar sua coleção
      </Typography>
    </Box>
  );
};
