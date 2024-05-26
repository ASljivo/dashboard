
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Employee } from "models/employee";
import { TableProp } from "models/table";
import { FC } from "react";
import { headCells } from "./config";

export const CustomTableHead: FC<TableProp> = (props: TableProp) => {
    const { order, orderBy, onRequestSort } = props;
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
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
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