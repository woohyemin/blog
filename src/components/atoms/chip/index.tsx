"use client";

import { PropsWithChildren, HTMLAttributes } from "react";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {}

/**
 * Chip component
 */
const Chip = ({ children, ...props }: PropsWithChildren<ChipProps>) => {
  return (
    <span
      className="text-caption py-0.5 px-2.5 rounded-md bg-chip text-secondary min-w-fit"
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip;
