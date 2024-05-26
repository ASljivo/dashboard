import { EMPLOYEES } from "../../mock/employees";
import { Employee } from "../../models/employee";

const timeout = 100;
// This is mock method for getting employees data.
export const get = (): Promise<Employee[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(EMPLOYEES);
    }, timeout);
  });
};

// This is mock method for adding new employee data into list.
export const set = (body: Employee): Promise<Employee[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ ...body, id: EMPLOYEES.length + 1 }, ...EMPLOYEES]);
    }, timeout);
  });
};
