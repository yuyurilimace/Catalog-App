import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";

import { DataTable } from "../../Components/DataGrid";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../axios";
import { CollectionTableHeader } from "../../utils/tableHeader";
import { EmptyState } from "../../Components/EmptyState";
import type { GridColDef } from "@mui/x-data-grid";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["collection"],
    queryFn: async () => {
      const response = await baseURL.get("/collection", {
        params: { empty: true },
      });
      return response.data;
    },
  });

  const collectionTableWithAction: GridColDef[] = [
    ...CollectionTableHeader,
    {
      field: "Actions",
      flex: 1,
      headerName: "Actions",
      renderCell: () => (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <IconButton color="primary">
            <FaEdit />
          </IconButton>
          <IconButton color="primary">
            <FaTrash />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      {data?.collection.length === 0 && <EmptyState />}
      {data?.collection.length > 0 && (
        <Paper sx={{ height: "100%" }}>
          <Box padding={"24px"}>
            <Typography variant="h3" color="primary">
              {" "}
              My Collection{" "}
            </Typography>
          </Box>
          <Box padding={"24px"}>
            {data?.collection.length > 0 && (
              <DataTable
                rows={data.collection}
                columns={collectionTableWithAction}
              />
            )}
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export { Home };
