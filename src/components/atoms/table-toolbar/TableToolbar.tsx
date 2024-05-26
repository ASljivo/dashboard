import { FC } from "react";
import { Button, Toolbar, Typography } from "@mui/material";
import { TableToolbarProps } from "../../../models/table";

export const TableToolbar: FC<TableToolbarProps> = (
  props: TableToolbarProps
) => {

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Employees
      </Typography>

      <Button
        variant="contained"
        onClick={() => props.openModal("buy")}
        sx={{ width: "120px" }}
      >
        Add New
      </Button>
    </Toolbar>
  );
};
