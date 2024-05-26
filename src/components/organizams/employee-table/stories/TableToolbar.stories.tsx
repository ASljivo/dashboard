import type { Meta, StoryObj } from "@storybook/react";

import { EmployeeTable } from "../EmployeeTable";
import { within, fn, userEvent, expect } from "@storybook/test";

const meta = {
  title: "Components/Organizams/EmployeeTable",
  component: EmployeeTable,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EmployeeTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmployeeTableComponent: Story = {
  args: {
    openModal: fn(),
  },
};

export const EmployeeTableOpenModal: Story = {
  args: {
    openModal: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const addNewButton = canvas.getByRole("button", { name: /ADD NEW/i });
    await expect(addNewButton).toBeInTheDocument();
    await userEvent.click(addNewButton);
    await expect(addNewButton).not.toBeInTheDocument();

    const submitButton = canvas.getByRole("button", { name: /SUBMIT/i });
    await expect(submitButton).toBeInTheDocument();
  },
};
