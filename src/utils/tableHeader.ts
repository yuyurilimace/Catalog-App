import type { GridColDef } from "@mui/x-data-grid";
import { PriorityChip } from "../Components/PriorityChip";

const CollectionTableHeader: GridColDef[] = [
  { field: "Name", flex: 1, headerName: "Name" },
  { field: "Author", flex: 1, headerName: "Author" },
  { field: "Publisher", flex: 1, headerName: "Shueisha" },
  {
    field: "Priority",
    flex: 1,
    headerName: "Priority",
    renderCell: (params) => PriorityChip({ priorityLevel: params.value }),
  },
  { field: "Released Volumes", flex: 1, headerName: "Released Volumes" },
  { field: "Collection Volumes", flex: 1, headerName: "Collection Volumes" },
  { field: "Missing Volumes", flex: 1, headerName: "Missing Volumes" },
];

export { CollectionTableHeader };
