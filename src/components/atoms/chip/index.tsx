"use client";

import { PropsWithChildren, HTMLAttributes } from "react";

const colors = {
  primary: "bg-btnActiveBg text-btnActiveText",
  secondary: "bg-chip text-secondary",
};

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  color?: "primary" | "secondary";
}

/**
 * Chip component
 */
const Chip = ({
  color = "secondary",
  children,
  ...props
}: PropsWithChildren<ChipProps>) => {
  return (
    <span
      className={`text-caption py-1 px-2.5 rounded-md ${colors[color]} min-w-fit`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip;
