import { Box, Button, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import EmptyLogo from "../../assets/empty-2.svg";

const EmptyState = () => {
  return (
    <Box
      width={"100%"}
      height={"auto"}
      maxWidth={"600px"}
      flexDirection={"column"}
      display={"flex"}
      justifySelf={"center"}
      gap={2}
    >
      <EmptyLogo />
      <Typography color="primary.dark" textAlign={"center"}>
        {" "}
        Não há livros contidos na sua coleção , clique no botão abaixo e insira
        seu primeiro livro{" "}
      </Typography>
      <Button startIcon={<FaPlus />} variant="contained" color="primary">
        {" "}
        Adicionar Livro{" "}
      </Button>
    </Box>
  );
};

export { EmptyState };
