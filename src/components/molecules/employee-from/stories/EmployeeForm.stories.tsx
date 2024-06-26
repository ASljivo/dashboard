import type { Meta, StoryObj } from "@storybook/react";

import { EmployeeForm } from "../EmployeeForm";
import { within, fn, userEvent, expect } from "@storybook/test";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../../theme";

const meta = {
  title: "Components/Molecules/EmployeeForm",
  component: EmployeeForm,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EmployeeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmployeeFormInitial: Story = {
  args: {
    callback: fn(),
  },
};

// This is case when error handling is demonstrated. If user click on submit before submit full name.
export const EmployeeFormError: Story = {
  args: {
    callback: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole("button", { name: /SUBMIT/i });
    await expect(submitButton).toBeInTheDocument();
    await userEvent.click(submitButton);

    const errorMessage = canvas.getAllByText("Full Name is required.");
    await expect(errorMessage).toBeInTheDocument();
  },
};

// This is case to demonstare successfully filled form data and user will get success message.
export const EmployeeFormSuccess: Story = {
  args: {
    callback: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("fullName"), "Test");
    await userEvent.type(canvas.getByTestId("email"), "email@test.com");
    await userEvent.type(canvas.getByTestId("phone"), "1234567890");
    await userEvent.type(canvas.getByTestId("salary"), "3000");

    const submitButton = canvas.getByRole("button", { name: /SUBMIT/i });

    await expect(submitButton).toBeInTheDocument();
    await userEvent.click(submitButton);

    const successMessage = canvas.getAllByText(
      "User registration is successful."
    );
    await expect(successMessage).toBeInTheDocument();
  },
};
