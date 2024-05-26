import type { Meta, StoryObj } from "@storybook/react";

import { ChartDetails } from "../ChartDetails";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Components/Atoms/ChartDetails",
  component: ChartDetails,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof ChartDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChartDetailsContent: Story = {
  args: {
    label: "Test",
    value: 100,
    description: "Test desciption",
  },
};
