import type { Meta, StoryObj } from "@storybook/react";

import { CustomTableHead } from "../TableHead";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Atoms/CustomTableHead",
  component: CustomTableHead,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CustomTableHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomTableHeadComponent: Story = {
  args: {
    onRequestSort: fn(),
    order: "asc",
    orderBy: "id",
    rowCount: 2,
  },
};