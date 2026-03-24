import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '@/components/ui/input';
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldError } from '@/components/ui/field';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Form/Input',
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    disabled: false,
    'aria-invalid': false,
  },
};

/**
 * 제목/내용과 함께 사용하기 위해 Field, FieldLabel, FieldDescription을 사용합니다.
 */
export const InputField: Story = {
  name: 'Field',
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="input-field">Username</FieldLabel>
      <Input id="input-field" type="text" placeholder="Enter your username" {...args} />
      <FieldDescription>Choose a unique username for your account.</FieldDescription>
    </Field>
  ),
};

/**
 * 여러 개의 `Field`를 `FieldGroup`으로 묶습니다.
 */
export const Group: Story = {
  name: 'Field Group',
  render: (args) => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
        <Input id="fieldgroup-name" placeholder="Bora Lim" {...args} />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
        <Input id="fieldgroup-email" type="email" placeholder="name@example.com" {...args} />
        <FieldDescription>We&apos;ll send updates to this address.</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset">Reset</Button>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Field>
    </FieldGroup>
  ),
};

/**
 * 인풋 비활성화를 위해 `disabled` 를 사용합니다.<br>
 * 비활성 스타일을 위해 `Field` 컴포넌트에 `data-disabled` 속성을 추가합니다.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Field data-disabled>
      <FieldLabel htmlFor="input-disabled">Email</FieldLabel>
      <Input id="input-disabled" type="email" placeholder="Email" {...args} />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>
  ),
};

/**
 * 값이 유효하지 않을 때 `aria-invalid`를 사용합니다.<br>
 * 유효하지 않은 스타일을 위해 `Field` 컴포넌트에 `data-invalid` 속성을 추가합니다.
 */
export const Invalid: Story = {
  args: {
    'aria-invalid': true,
  },
  render: (args) => (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input id="input-invalid" placeholder="Error" {...args} />
      <FieldError>This field contains validation errors.</FieldError>
    </Field>
  ),
};

export const File: Story = {
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" {...args} />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  ),
};

/**
 * 버튼과 나란히 배치하기 위해 `Field` 컴포넌트에 `orientation="horizontal"` 속성을 추가합니다.
 */
export const Inline: Story = {
  render: (args) => (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." {...args} />
      <Button variant="secondary">Search</Button>
    </Field>
  ),
};

/**
 * 여러 개의 `Field`를 나란히 배치하기 위해 `FieldGroup`에 그리드 레이아웃을 적용합니다.
 */
export const Grid: Story = {
  render: (args) => (
    <FieldGroup className="grid grid-cols-2">
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="Bora" {...args} />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Lim" {...args} />
      </Field>
    </FieldGroup>
  ),
};
