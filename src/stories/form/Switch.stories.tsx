import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from '@/components/ui/switch';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldContent,
  FieldTitle,
} from '@/components/ui/field';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'aria-invalid': {
      control: 'boolean',
    },
    size: {
      control: 'radio',
      options: ['sm', 'default'],
      table: {
        type: {
          summary: 'enum',
        },
      },
    },
  },
  args: {
    checked: false,
    disabled: false,
    'aria-invalid': false,
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [checked, setChecked] = useState<boolean>(!!args.checked);

    useEffect(() => {
      setChecked(!!args.checked);
    }, [args.checked]);

    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  },
  parameters: {
    docs: {
      source: {
        code: `
        const [checked, setChecked] = useState<boolean>(false);
        <Switch checked={checked} onCheckedChange={setChecked} />
        `,
      },
    },
  },
};

export const Checked: Story = {
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    );
  },
};

/**
 * 스위치 비활성화를 위해 `disabled` 를 사용합니다.<br>
 * 비활성 스타일을 위해 `Field` 컴포넌트에 `data-disabled` 속성을 추가합니다.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Field orientation="horizontal" data-disabled>
      <Switch id="switch-disabled" {...args} />
      <FieldLabel htmlFor="switch-disabled">Disabled</FieldLabel>
    </Field>
  ),
};

/**
 * 값이 유효하지 않을 때 `aria-invalid`를 사용합니다.<br>
 * 유효하지 않은 스타일을 위해 `Field` 컴포넌트에 `data-invalid` 속성을 추가합니다.
 */
export const Invalid: Story = {
  render: (args) => {
    return (
      <Field orientation="horizontal" className="max-w-sm" data-invalid>
        <FieldContent>
          <FieldLabel htmlFor="switch-terms">Accept terms and conditions</FieldLabel>
          <FieldDescription>You must accept the terms and conditions to continue.</FieldDescription>
        </FieldContent>
        <Switch id="switch-terms" aria-invalid />
      </Field>
    );
  },
};

export const Size: Story = {
  render: (args) => (
    <FieldGroup>
      <Field orientation="horizontal">
        <Switch id="switch-size-sm" size="sm" />
        <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="switch-size-default" />
        <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
      </Field>
    </FieldGroup>
  ),
};

/**
 * 카드 레이아웃을 위해 `Field` 컴포넌트를 `FieldLabel` 컴포넌트로 감싸서 사용합니다.
 */
export const Card: Story = {
  render: (args) => (
    <FieldGroup className="max-w-sm">
      <FieldLabel htmlFor="switch-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-share" />
        </Field>
      </FieldLabel>

      <FieldLabel htmlFor="switch-notifications">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-notifications" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  ),
};
