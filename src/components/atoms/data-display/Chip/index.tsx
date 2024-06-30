"use client";

import { PropsWithChildren, HTMLAttributes } from "react";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {}

/**
 * Chip component
 */
export const Chip = ({ children, ...props }: PropsWithChildren<ChipProps>) => {
  return (
    <span
      className="text-caption py-0.5 px-2.5 rounded-md bg-chip text-secondary"
      {...props}
    >
      {children}
    </span>
  );
};
