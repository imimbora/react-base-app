import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { Plus } from 'lucide-react';

const meta = {
  title: 'Base/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      table: {
        type: {
          summary: 'enum',
        },
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * `Button` 뿐만 아니라 `Input`, `InputGroup`, `DropdownMenu`, `Select`, `Popover`, `Label` 등의 컴포넌트도 버튼 그룹 내에 사용할 수 있습니다.
 */
export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};

export const Orientation: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};

/**
 * 각 버튼의 `size` 속성을 사용하여 버튼 크기를 조절할 수 있습니다.
 */
export const Size: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ButtonGroup {...args}>
        <Button size="sm">Small</Button>
        <Button size="sm">Button</Button>
        <Button size="sm">Group</Button>
        <Button size="icon-sm">
          <Plus />
        </Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <Button>Medium</Button>
        <Button>Button</Button>
        <Button>Group</Button>
        <Button size="icon">
          <Plus />
        </Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <Button size="lg">Large</Button>
        <Button size="lg">Button</Button>
        <Button size="lg">Group</Button>
        <Button size="icon-lg">
          <Plus />
        </Button>
      </ButtonGroup>
    </div>
  ),
};

/**
 * 버튼 그룹 사이에 간격을 두려면 ButtonGroup 컴포넌트를 중첩하세요.
 */
export const Nested: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroup>
        <Button size="icon">
          <Plus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
};

/**
 * 버튼 그룹 내 variant `default` 이외의 버튼들을 시각적으로 구분하기 위해 ButtonGroupSeparator 컴포넌트를 사용합니다.
 */
export const Separator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Paste</Button>
    </ButtonGroup>
  ),
};

/**
 * 버튼 그룹 내 텍스트를 표시하기 위해 ButtonGroupText 컴포넌트를 사용합니다.
 */
export const Text: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>Text</ButtonGroupText>
      <ButtonGroupText asChild>
        <Label>Label</Label>
      </ButtonGroupText>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  ),
};
