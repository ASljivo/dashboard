import { FC } from "react";
import { Button, Toolbar, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { TableToolbarProps } from "models/table";

export const TableToolbar: FC<TableToolbarProps> = (
  props: TableToolbarProps
) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
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
