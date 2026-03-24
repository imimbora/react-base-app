import type { Meta, StoryObj } from '@storybook/react-vite';

import { Toggle } from '@/components/ui/toggle';

import { BoldIcon, ItalicIcon, BookmarkIcon } from 'lucide-react';

const meta = {
  title: 'Base/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    children: 'Toggle',
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icon: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bookmark">
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  ),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle {...args} aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle {...args} aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle disabled" disabled>
        Disabled
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
        Disabled
      </Toggle>
    </div>
  ),
};
