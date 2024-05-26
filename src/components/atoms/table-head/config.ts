import { HeadCell } from "../../../models/table";

export const headCells: readonly HeadCell[] = [
    {
      id: "fullName",
      numeric: false,
      disablePadding: false,
      label: "Full name",
    },
    {
      id: "email",
      numeric: false,
      disablePadding: false,
      label: "Email",
    },
    {
      id: "phone",
      numeric: false,
      disablePadding: false,
      label: "Phone",
    },
    {
      id: "role",
      numeric: false,
      disablePadding: false,
      label: "Role",
    },
    {
      id: "salary",
      numeric: true,
      disablePadding: false,
      label: "Salary",
    },
  ];
  