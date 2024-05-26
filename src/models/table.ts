import { Employee } from "./employee";

export type Order = "asc" | "desc";

export interface TableToolbarProps {
  openModal: Function;
}

export interface TableProp {
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
