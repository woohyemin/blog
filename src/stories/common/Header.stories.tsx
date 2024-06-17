import { Header } from "@/components/organisms/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title",
    size: "medium",
  },
};
