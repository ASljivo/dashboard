import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter } from "react-router-dom";
import { DataTable } from "../../components/pages/table/Table";
import { Other } from "../../components/pages/other/Other";

describe("Routes", () => {
  test("rendering a Table component", () => {
    const route = "/table";

    render(
      <MemoryRouter initialEntries={[route]}>
        <DataTable />
      </MemoryRouter>
    );

    expect(screen.getByText("Table")).toBeInTheDocument();
  });

  test("rendering a Other component", () => {
    const route = "/other";

    render(
      <MemoryRouter initialEntries={[route]}>
        <Other />
      </MemoryRouter>
    );
    expect(screen.getByText("Other")).toBeInTheDocument();
  });
});
