import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";

import { DataTable } from "../Table";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../../theme";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Components/Pages/Table",
  component: DataTable,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TablePage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole("h4", { name: /Table/i });
    await expect(title).toBeInTheDocument();
  },
};
