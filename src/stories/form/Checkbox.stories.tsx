import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '@/components/ui/checkbox';
import type { CheckedState } from '@radix-ui/react-checkbox';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldContent,
  FieldTitle,
  FieldSet,
  FieldLegend,
} from '@/components/ui/field';
import { Label } from '@/components/ui/label';

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

export const State: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Checkbox defaultChecked />
      <Checkbox checked disabled />
      <Checkbox disabled />
      <Checkbox aria-invalid />
    </div>
  ),
};

export const Text: Story = {
  render: (args) => (
    <FieldGroup>
      <Field orientation="horizontal">
        <Checkbox id="terms" name="terms" />
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="terms-disabled" name="terms-disabled" disabled />
        <FieldLabel htmlFor="terms-disabled">Enable notifications</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-invalid>
        <Checkbox id="terms-invalid" name="terms-invalid" aria-invalid />
        <FieldLabel htmlFor="terms-invalid">Accept terms and conditions</FieldLabel>
      </Field>
    </FieldGroup>
  ),
};

/**
 * `FieldContent` 와 `FieldDescription` 을 함께 사용하여 체크박스에 대한 설명을 제공할 수 있습니다.
 */
export const Description: Story = {
  render: (args) => (
    <FieldGroup>
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-desc" name="terms-checkbox-desc" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-desc">Accept terms and conditions</FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const Group: Story = {
  render: (args) => (
    <FieldSet>
      <FieldLegend variant="label">Show these items on the desktop:</FieldLegend>
      <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox id="finder-hard-disks" name="finder-hard-disks" defaultChecked />
          <FieldLabel htmlFor="finder-hard-disks">Hard disks</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-external-disks" name="finder-external-disks" defaultChecked />
          <FieldLabel htmlFor="finder-external-disks">External disks</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-cds-dvds" name="finder-cds-dvds" />
          <FieldLabel htmlFor="finder-cds-dvds">CDs, DVDs, and iPods</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-connected-servers" name="finder-connected-servers" />
          <FieldLabel htmlFor="finder-connected-servers">Connected servers</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

export const Etc: Story = {
  render: (args) => (
    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-1" name="checkbox-1" />
        <Label htmlFor="checkbox-1">Accept terms and conditions</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="checkbox-2" name="checkbox-2" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="checkbox-2">Accept terms and conditions</FieldLabel>
          <FieldDescription>By clicking this checkbox, you agree to the terms.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="checkbox-3" name="checkbox-3" disabled />
        <FieldLabel htmlFor="checkbox-3">Enable notifications</FieldLabel>
      </Field>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="checkbox-4" name="checkbox-4" />
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  ),
};
