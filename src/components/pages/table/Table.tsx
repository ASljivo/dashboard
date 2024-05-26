import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { EmployeeTable } from "components/organizams/employee-table/EmployeeTable";

export const DataTable: FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Table
      </Typography>
      <EmployeeTable />
    </Box>
  );
};
