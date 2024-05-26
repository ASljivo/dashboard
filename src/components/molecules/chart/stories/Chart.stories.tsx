import type { Meta, StoryObj } from '@storybook/react';

import { Chart } from '../Chart';
import { EMPLOYEES_CHART, PROJECTS_CHART } from '../../../../mock/chart';

const meta = {
  title: 'Components/Molecules/Chart',
  component: Chart,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChartNoData: Story = {
  args:{
    data: []
  }
};

export const ChartWithDataEmploess: Story = {
  args:{
    data: EMPLOYEES_CHART
  }
};


export const ChartWithDataProjects: Story = {
  args:{
    data: PROJECTS_CHART
  }
};