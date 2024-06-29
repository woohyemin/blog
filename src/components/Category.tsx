import { ReactNode } from "react";

interface Props {
  selected?: boolean;
  category: string;
  children?: ReactNode;
}

export default function Category({
  category,
  children,
  selected = false,
}: Props) {
  return (
    <div
      className={`flex items-center gap-1 py-1 px-3 -mb-px rounded-full text-h6 ${
        selected ? "bg-tabActiveBg text-tabActiveText" : "bg-tabBg text-tabText"
      }`}
    >
      <span>{category}</span>
      <span
        className={`tracking-wider ${selected ? "text-tabActiveNum" : "text-tabNum"}`}
      >
        ({children})
      </span>
    </div>
  );
}
