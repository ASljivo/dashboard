import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';

import { Dashboard } from '../Dashboard';

const meta = {
  title: 'Components/Pages/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardPage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole('h4', { name: /Dashboard/i });
    await expect(title).toBeInTheDocument();
  },
};
