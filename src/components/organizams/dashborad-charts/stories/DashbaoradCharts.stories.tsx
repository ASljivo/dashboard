import type { Meta, StoryObj } from '@storybook/react';

import { DashboardCharts } from '../DashboardCharts';
const meta = {
  title: 'Components/Organizams/DashboardCharts',
  component: DashboardCharts,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DashboardCharts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardChartsComponent: Story = {
};
