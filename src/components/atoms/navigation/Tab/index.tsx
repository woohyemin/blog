import { HTMLAttributes, ReactNode } from "react";

export type TabSize = "sm" | "md";

const sizes: { [key in TabSize]: string } = {
  sm: "text-h6 py-1 mb-px h-6 sm:h-7 sm:text-h6 px-2.5 sm:px-3 gap-0.5 sm:gap-1",
  md: "text-h6 py-1 mb-px h-7 sm:h-8 sm:text-h5 px-3 sm:px-3.5 gap-0.5 sm:gap-1",
};

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  label: string | ReactNode;
  value: string;
  selected?: boolean;
  size?: TabSize;
}

export default function Tab({
  label,
  value,
  selected = false,
  size = "md",
  ...props
}: TabProps) {
  return (
    <button
      className={`transition-all flex min-w-fit items-center rounded-full ${sizes[size]} ${
        selected ? "bg-tabActiveBg text-tabActiveText" : "bg-tabBg text-tabText"
      }`}
      {...props}
    >
      {label}
    </button>
  );
}
