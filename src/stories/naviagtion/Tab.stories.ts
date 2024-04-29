import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "@/components/atoms/Tab";
import { fn } from "@storybook/test";

const meta = {
  title: "Navigation/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "button",
    size: "medium",
    label: "Tab",
  },
};
