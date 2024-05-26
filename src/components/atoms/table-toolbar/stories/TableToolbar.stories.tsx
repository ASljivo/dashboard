import type { Meta, StoryObj } from '@storybook/react';

import { TableToolbar } from '../TableToolbar';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Atoms/TableToolbar',
  component: TableToolbar,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TableToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableToolbarComponents: Story = {
  args:{
    openModal:  fn(),
  }
};
