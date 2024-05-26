import { EMPLOYEES } from "mock/employees";
import { Employee } from "models/employee";

const timeout = 100;

export const get = (): Promise<Employee[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(EMPLOYEES);
    }, timeout);
  });
};

export const set = (body: Employee): Promise<Employee[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ ...body, id: EMPLOYEES.length + 1 }, ...EMPLOYEES]);
    }, timeout);
  });
};
