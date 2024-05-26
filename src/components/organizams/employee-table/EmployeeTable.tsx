import { FC, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Snackbar } from "@mui/material";
import { Modal } from "../../../components/atoms/modal/Modal";
import { EmployeeForm } from "../../../components/molecules/employee-from/EmployeeForm";
import { CustomTableHead } from "../../../components/atoms/table-head/TableHead";
import { getComparator, stableSort } from "./helper";
import { TableToolbar } from "../../../components/atoms/table-toolbar/TableToolbar";
import { Order } from "../../../models/table";
import { Employee } from "../../../models/employee";
import { get, set } from "../../../services/employee/Exmployee";

export const EmployeeTable: FC = () => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Employee>("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState<Employee[]>([]);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openErrorMessage, setOpenErrorMessage] = useState(false);

  const fetchData = () => {
    get()
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setOpenErrorMessage(true);
        setError("Error fetching employees");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNewEmployee = (employee: Employee) => {
    set(employee)
      .then((data: Employee[]) => {
        setData(data);
        setIsModalOpen(false);
      })
      .catch(() => {
        setOpenErrorMessage(true);
        setError("Error setting employees");
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Employee
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, data]
  );

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenErrorMessage(false);
  };

  return (
    <Box>
      <Paper sx={{ width: "100%", mb: 3 }}>
        <TableToolbar openModal={openModal} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <CustomTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell component="th" id={labelId} scope="row">
                      {row.fullName}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.role}</TableCell>
                    <TableCell align="right">{row.salary}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Modal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        component={<EmployeeForm callback={addNewEmployee} />}
      />
      <Snackbar
        open={openErrorMessage}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
      />
    </Box>
  );
};
