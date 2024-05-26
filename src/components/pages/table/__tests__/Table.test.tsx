import { render, screen } from "@testing-library/react";

import { DataTable } from "../Table";
import { BrowserRouter } from "react-router-dom";

describe("Test Table component", () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  test("check component", () => {
    render(
      <BrowserRouter>
        <DataTable />
      </BrowserRouter>,
      container
    );

    expect(screen.getByText("Table")).toBeInTheDocument();
  });
});
