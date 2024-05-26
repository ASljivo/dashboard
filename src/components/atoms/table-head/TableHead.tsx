
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { FC } from "react";
import { headCells } from "./config";
import { TableProp } from "../../../models/table";
import { Employee } from "../../../models/employee";

export const CustomTableHead: FC<TableProp> = (props: TableProp) => {
    const { order, orderBy, onRequestSort } = props;

    // Handling sorting base on property on specific column
    const createSortHandler =
      (property: keyof Employee) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"} /* If field is nummeric sould be centered on right side */
              padding={headCell.disablePadding ? "none" : "normal"} /* Handle padding base on configuration object */
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"} /* Handle ordering */
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }