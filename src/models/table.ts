import { Employee } from "./employee";

export type Order = "asc" | "desc";

export interface TableToolbarProps {
  numSelected: number;
  openModal: Function;
}

export interface TableProp {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Employee
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Employee;
  label: string;
  numeric: boolean;
}
