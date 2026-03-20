import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupButton,
  InputGroupText,
} from '@/components/ui/input-group';
import { Field, FieldLabel, FieldDescription, FieldGroup } from '@/components/ui/field';

import { SearchIcon, EyeOffIcon, FileCodeIcon, CopyIcon } from 'lucide-react';

const meta = {
  title: 'Form/InputGroup',
  component: InputGroupAddon,
  decorators: [
    (Story, { parameters }) => (
      <div className={parameters.wrapperClass ?? 'min-w-xs'}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '인풋 내에 표시할 `InputGroupAddon` 컴포넌트는 `align` 속성을 사용하여 상대적인 위치를 지정할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'radio',
      options: ['inline-start', 'inline-end', 'block-start', 'block-end'],
    },
  },
} satisfies Meta<typeof InputGroupAddon>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * `InputGroupAddon` 컴포넌트는  `InputGroupInput` 또는 `InputGroupTextarea` 컴포넌트의 뒤에 사용해야 합니다.<br>
 * 시각적인 위치를 지정하려면 `align` 속성을 사용합니다.
 */
export const Default: Story = {
  render: (args) => (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon {...args}>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const InlineStart: Story = {
  args: {
    align: 'inline-start',
  },
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="inline-start">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-start" placeholder="Search..." />
        <InputGroupAddon {...args}>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the start.</FieldDescription>
    </Field>
  ),
};

export const InlineEnd: Story = {
  args: {
    align: 'inline-end',
  },
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="inline-end">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-end" type="password" placeholder="Enter password" />
        <InputGroupAddon {...args}>
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  ),
};

export const InlineBoth: Story = {
  render: (args) => (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon {...args}>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end" {...args}>
        12 results
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const BlockStart: Story = {
  args: {
    align: 'block-start',
  },
  parameters: {
    wrapperClass: 'min-w-sm',
  },
  render: (args) => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="block-start-input">Input</FieldLabel>
        <InputGroup>
          <InputGroupInput id="block-start-input" placeholder="Enter your name" />
          <InputGroupAddon {...args}>
            <InputGroupText>Full Name</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Header positioned above the input.</FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="block-start-textarea">Textarea</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono"
          />
          <InputGroupAddon {...args}>
            <FileCodeIcon />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
              <CopyIcon />
              <span className="sr-only">Copy</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Header positioned above the textarea.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
};

export const BlockEnd: Story = {
  args: {
    align: 'block-end',
  },
  parameters: {
    wrapperClass: 'min-w-sm',
  },
  render: (args) => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="block-end-input">Input</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="Enter amount" />
          <InputGroupAddon {...args}>
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Footer positioned below the input.</FieldDescription>
      </Field>

      <Field>
        <FieldLabel htmlFor="block-end-textarea">Textarea</FieldLabel>
        <InputGroup>
          <InputGroupTextarea id="block-end-textarea" placeholder="Write a comment..." />
          <InputGroupAddon {...args}>
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="primary" size="sm" className="ml-auto">
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Footer positioned below the textarea.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
};
