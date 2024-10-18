"use client";

import { PropsWithChildren, HTMLAttributes } from "react";

const colors = {
  primary: "bg-btnActiveBg text-btnActiveText",
  secondary: "bg-chip text-secondary",
};

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  color?: "primary" | "secondary";
  round?: boolean;
}

/**
 * Chip component
 */
const Chip = ({
  color = "secondary",
  round,
  children,
  ...props
}: PropsWithChildren<ChipProps>) => {
  return (
    <span
      className={`text-caption py-1 px-2.5 ${colors[color]} min-w-fit ${
        round ? "rounded-full" : "rounded-md"
      }`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip;
