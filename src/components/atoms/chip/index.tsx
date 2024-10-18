"use client";

import { PropsWithChildren, HTMLAttributes } from "react";

const variants = {
  contained: {
    primary: "bg-btnActiveBg text-btnActiveText",
    secondary: "bg-chip text-secondary",
  },
  outlined: {
    primary: "border border-btnActiveBg text-btnActiveBg",
    secondary: "border border-secondary text-secondary",
  },
};

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  round?: boolean;
}

/**
 * Chip component
 */
const Chip = ({
  variant = "contained",
  color = "secondary",
  round,
  children,
  ...props
}: PropsWithChildren<ChipProps>) => {
  return (
    <span
      className={`flex justify-center items-center text-caption py-0.5 px-2.5 ${
        variants[variant][color]
      } min-w-fit h-[26px] ${round ? "rounded-full" : "rounded-md"}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip;
