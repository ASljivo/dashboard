import { render, screen } from "@testing-library/react";

import { Other } from "../Other";
import { BrowserRouter } from "react-router-dom";

describe("Test Other component", () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  test("check component", () => {
    render(
      <BrowserRouter>
        <Other />
      </BrowserRouter>,
      container
    );

    expect(screen.getByText("Other")).toBeInTheDocument();
  });
});
