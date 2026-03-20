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
    asChild: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    asChild: true,
  },
  render: (args) => (
    <Button {...args}>
      <a href="#">Button</a>
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
          <Button variant="link" asChild>
            <Link to="/">Button</Link>
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
