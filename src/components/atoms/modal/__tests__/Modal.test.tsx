import { render, screen } from "@testing-library/react";

import { Modal } from "../Modal";
import { BrowserRouter } from "react-router-dom";

describe("Test Modal component", () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
const args= {
  isModalOpen: true,
  onClose:  jest.fn(),
  component: <button>Modal opened</button>,
}
  test("check component", () => {
    render(
      <BrowserRouter>
        <Modal {...args} />
      </BrowserRouter>,
      container
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
