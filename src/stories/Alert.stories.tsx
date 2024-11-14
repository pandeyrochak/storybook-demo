import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    variant: "success",
    message: "Well done! You successfully completed the task at hand.",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    message: "Oh snap! Change a few things up and try submitting again.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "Warning! Best check yo' self, before you wreck yo' self.",
  },
};

export const WithoutCloseButton: Story = {
  args: {
    variant: "success",
    message: "This alert cannot be closed",
    onClose: undefined,
  },
}; 