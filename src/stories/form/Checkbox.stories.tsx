import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '@/components/ui/checkbox';
import type { CheckedState } from '@radix-ui/react-checkbox';

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    'aria-invalid': {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: {
    checked: false,
    disabled: false,
    'aria-invalid': false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [checked, setChecked] = useState<CheckedState>(!!args.checked);

    useEffect(() => {
      setChecked(!!args.checked);
    }, [args.checked]);

    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />;
  },
  parameters: {
    docs: {
      source: {
        code: `
          export function Example() {
            const [checked, setChecked] = useState<CheckedState>(false)
            return <Checkbox checked={checked} onCheckedChange={setChecked} />
          }
        `,
      },
    },
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
