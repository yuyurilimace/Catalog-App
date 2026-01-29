import { Box } from "@mui/material";

export const IncompleteTitleCardStack = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Box
        height={"60vh"}
        sx={{
          backgroundColor: "#fff",
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </>
  );
};
