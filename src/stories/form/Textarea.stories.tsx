import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from '@/components/ui/textarea';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Form/Textarea',
  component: Textarea,
  decorators: [
    (Story) => (
      <div className="min-w-xs">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
    disabled: false,
    'aria-invalid': false,
  },
};

/**
 * 제목/내용과 함께 사용하기 위해 Field, FieldLabel, FieldDescription을 사용합니다.
 */
export const TextareaField: Story = {
  name: 'Field',
  args: {
    placeholder: 'Type your message here.',
  },
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" {...args} />
    </Field>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea id="textarea-disabled" {...args} />
    </Field>
  ),
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Type your message here.',
  },
  render: (args) => (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea id="textarea-invalid" {...args} />
      <FieldError>Please enter a valid message.</FieldError>
    </Field>
  ),
};

export const WithButton: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
  render: (args) => (
    <div className="grid gap-2">
      <Textarea {...args} />
      <Button variant="primary">Send message</Button>
    </div>
  ),
};
