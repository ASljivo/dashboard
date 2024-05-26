import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../Modal';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Atoms/Modal',
  component: Modal,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalOpened: Story = {
  args:{
    isModalOpen: true,
    onClose:  fn(),
    component: <div>Modal opened</div>,
  }
};

export const ModalClosed: Story = {
  args:{
    isModalOpen: false,
    onClose:  fn(),
    component: <div>Modal closed</div>,
  }
};
