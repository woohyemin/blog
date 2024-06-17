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
      className={`self-start max-w-full max-h-8 ${
        selected ? "bg-indigo" : "bg-hoverbox"
      } group-hover:opacity-100 border border-light-gray rounded-full text-sm pr-3 items-center flex gap-1 pl-2.5 pb-1 pt-1.5 md:pb-1 md:pt-1.5`}
    >
      {category === "All" ? (
        ""
      ) : category === "side-projects" ? (
        <div style={{ width: "20px", height: "20px", background: "red" }} />
      ) : category === "library" ? (
        <div style={{ width: "20px", height: "20px", background: "blue" }} />
      ) : category === "developments" ? (
        <div style={{ width: "20px", height: "20px", background: "green" }} />
      ) : (
        <div style={{ width: "20px", height: "20px", background: "gray" }} />
      )}

      <span
        className={`text-sm ml-0.5 ${
          selected ? "text-yellow" : "text-gray group-hover:text-indigo"
        } items-center flex gap-1`}
      >
        {category}
      </span>

      {children}
    </div>
  );
}
