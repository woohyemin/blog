import { HTMLAttributes, ReactNode } from "react";

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  label: string | ReactNode;
  value: string;
  selected?: boolean;
}

export default function Tab({
  label,
  value,
  selected = false,
  ...props
}: TabProps) {
  return (
    <button
      className={`transition-all flex items-center gap-0.5 py-1 px-3 mb-px rounded-full text-h6 h-7 sm:h-8 sm:text-h5 sm:px-3.5 sm:gap-1 ${
        selected ? "bg-tabActiveBg text-tabActiveText" : "bg-tabBg text-tabText"
      }`}
      {...props}
    >
      {label}
    </button>
  );
}
