import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/ui/spinner';
import { ArrowUpRightIcon, BadgeCheckIcon, BookmarkIcon } from 'lucide-react';

const meta = {
  title: 'Base/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'default', 'ghost', 'link'],
      table: {
        type: {
          summary: 'enum',
        },
      },
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
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variant: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Badge {...args} variant="primary">
        Primary
      </Badge>
      <Badge {...args} variant="secondary">
        Secondary
      </Badge>
      <Badge {...args} variant="destructive">
        Destructive
      </Badge>
      <Badge {...args}>Outline</Badge>
      <Badge {...args} variant="ghost">
        Ghost
      </Badge>
      <Badge {...args} variant="link">
        Link
      </Badge>
    </div>
  ),
};

/**
 * `asChild` 속성을 사용하여 배지를 다른 요소로 렌더링할 수 있습니다.
 */
export const Link: Story = {
  args: {
    variant: 'link',
    asChild: true,
  },
  render: (args) => (
    <div className="flex gap-2">
      <Badge {...args} variant="primary">
        <a href="#">
          Primary
          <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      </Badge>
      <Badge {...args} variant="secondary">
        <a href="#">
          Secondary
          <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      </Badge>
      <Badge {...args} variant="destructive">
        <a href="#">
          Destructive
          <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      </Badge>
      <Badge {...args} variant="default">
        <a href="#">
          Default
          <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      </Badge>
      <Badge {...args} variant="ghost">
        <a href="#">
          Ghost
          <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      </Badge>
      <Badge {...args} variant="link">
        <a href="#">
          Link
          <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
            <Badge variant="link" asChild>
              <Link to="/">
              Link
              <ArrowUpRightIcon />
              </Link>
            </Button>
          `,
      },
    },
  },
};

/**
 * 배지 내부에 아이콘을 표시할 수 있습니다.<br />
 * 아이콘을 왼쪽에 표시하려면 `data-icon="inline-start"`를 사용하고,<br />
 * 오른쪽에 표시하려면 `data-icon="inline-end"`를 사용하세요.
 */
export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <BadgeCheckIcon data-icon="inline-start" />
        Verified
      </Badge>
      <Badge>
        Bookmark
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  ),
};

export const WithSpinner: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        Deleting
      </Badge>
      <Badge variant="secondary">
        Generating
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  ),
};
