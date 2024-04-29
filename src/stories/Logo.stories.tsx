import { Logo } from "@/components/atoms/Logo";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "typo",
    size: "medium",
    color: "basic",
  },
};
