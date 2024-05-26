import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../Header';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Components/Atoms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderContent: Story = {
  
};
