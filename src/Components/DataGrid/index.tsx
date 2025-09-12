import { DataGrid, type GridColDef } from "@mui/x-data-grid";
interface DataTableProps<T> {
  columns: GridColDef[];
  rows: T[];
}

const DataTable = <T,>({ columns, rows }: DataTableProps<T>) => {
  return (
    <DataGrid rows={rows} columns={columns} getRowId={(row) => row.Name} />
  );
};

export { DataTable };
