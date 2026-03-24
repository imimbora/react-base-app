import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectLabel,
} from '@/components/ui/select';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from '@/components/ui/field';
import { Switch } from '@/components/ui/switch';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const meta = {
  title: 'Form/Select',
  component: Select,
  decorators: [
    (Story, { parameters }) => (
      <div className={cn('min-w-xs', parameters.extraClass)}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * 정렬을 조정하기 위해 `SelectContent` 컴포넌트의 `position` 속성을 사용합니다.
 */
export const Position: Story = {
  render: (args) => {
    const [alignItemWithTrigger, setAlignItemWithTrigger] = useState(true);
    const position = alignItemWithTrigger ? 'item-aligned' : 'popper';
    return (
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="align-item">Align Item</FieldLabel>
            <FieldDescription>Toggle to align the item with the trigger.</FieldDescription>
          </FieldContent>
          <Switch
            id="align-item"
            checked={alignItemWithTrigger}
            onCheckedChange={setAlignItemWithTrigger}
          />
        </Field>
        <Field>
          <Select defaultValue="banana" {...args}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent position={position}>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldDescription>
            <code>position: {position}</code>
          </FieldDescription>
        </Field>
      </FieldGroup>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Select defaultValue="banana">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent position={position}>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        `,
      },
    },
  },
};

/**
 * 구분을 위해 `SelectGroup`, `SelectLabel`, `SelectSeparator` 를 사용합니다.
 */
export const Groups: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * 필요에 따라 `Select` 또는 `SelectItem` 컴포넌트에 `disabled` 속성을 추가하여 비활성화할 수 있습니다.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    extraClass: 'grid gap-2',
  },
  render: (args) => (
    <>
      <Select {...args}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes" disabled>
              Grapes
            </SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  ),
};

/**
 * 값이 유효하지 않을 때 `SelectTrigger` 컴포넌트에 `aria-invalid` 속성을 추가합니다.<br>
 * 유효하지 않은 스타일을 위해 `Field` 컴포넌트에 `data-invalid` 속성을 추가합니다.
 */
export const Invalid: Story = {
  render: (args) => (
    <Field data-invalid>
      <FieldLabel>Fruit</FieldLabel>
      <Select {...args}>
        <SelectTrigger aria-invalid>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>Please select a fruit.</FieldError>
    </Field>
  ),
};
