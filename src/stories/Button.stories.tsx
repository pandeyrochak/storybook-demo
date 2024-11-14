import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Mail } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "The visual style of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    icon: {
      control: { type: "boolean" },
      description: "Whether to show an icon",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Email Login",
    icon: <Mail className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// Example of different variants in a single story
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
      </div>
      <div className="flex gap-4">
        <Button icon={<Mail className="h-4 w-4" />}>With Icon</Button>
        <Button size="icon" aria-label="Mail">
          <Mail className="h-4 w-4" />
        </Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  ),
};
