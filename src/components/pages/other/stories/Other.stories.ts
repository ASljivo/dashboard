import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';

import { Other } from '../Other';

const meta = {
  title: 'Components/Pages/Other',
  component: Other,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Other>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OtherPage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole('h4', { name: /Other/i });
    await expect(title).toBeInTheDocument();
  },
};
