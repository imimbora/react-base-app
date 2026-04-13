import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

import { FaceIcon } from '@radix-ui/react-icons';

const meta = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered', // 중앙 정렬
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'destructive', 'default', 'secondary', 'ghost', 'link'],
      table: {
        type: {
          summary: 'enum',
        },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'icon-xs', 'icon-sm', 'icon', 'icon-lg'],
      table: {
        type: {
          summary: 'enum',
        },
      },
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      control: 'text',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
  },
  args: {
    disabled: false,
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variant: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args}>Outline</Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

/**
 * `asChild` 속성을 사용하여 버튼을 다른 요소로 렌더링할 수 있습니다.
 */
export const Link: Story = {
  args: {
    variant: 'link',
    asChild: true,
  },
  render: (args) => (
    <Button {...args}>
      <a href="#">Link</a>
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
          <Button variant="link" asChild>
            <Link to="/">Link</Link>
          </Button>
        `,
      },
    },
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
  },
  render: (args) => (
    <Button {...args}>
      <FaceIcon />
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
          <Button size="icon">
            <FaceIcon />
          </Button>
        `,
      },
    },
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <FaceIcon />
      Button
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
          <Button>
            <FaceIcon />
            Button
          </Button>
        `,
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    size: 'icon',
  },
  render: (args) => (
    <Button {...args} className="rounded-full">
      <FaceIcon />
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
          <Button size="icon" className="rounded-full">
            <FaceIcon />
          </Button>
        `,
      },
    },
  },
};

/**
 * 버튼 안에 스피너 컴포넌트를 렌더링하여 로딩 상태를 표시합니다.<br>
 * 텍스트와 스피너를 함께 사용할 경우, 적절한 간격 조정을 위해 `data-icon` 속성을 사용합니다.
 * - 스피너를 텍스트 좌측에 배치 `data-icon="inline-start"`
 * - 스피너를 텍스트 우측에 배치 `data-icon="inline-end"`
 */
export const WithSpinner: Story = {
  name: 'Spinner',
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} size="icon">
        <Spinner />
      </Button>
      <Button {...args}>
        <Spinner data-icon="inline-start" />
        Button
      </Button>
      <Button {...args}>
        Button
        <Spinner data-icon="inline-end" />
      </Button>
    </div>
  ),
};
