"use client";

import { PropsWithChildren, HTMLAttributes } from "react";

const variants = {
  contained: {
    primary: "bg-btnActiveBg text-btnActiveText",
    secondary: "bg-chip text-secondary",
    white: "bg-[#f9f9f9] text-[#363636]",
    black: "bg-[#363636] text-[#f9f9f9]",
  },
  outlined: {
    primary: "border border-btnActiveBg text-btnActiveBg",
    secondary: "border border-secondary text-secondary",
  },
};

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary" | "white" | "black";
  round?: boolean;
  className?: string;
}

/**
 * Chip component
 */
const Chip = ({
  variant = "contained",
  color = "secondary",
  round,
  className,
  children,
  ...props
}: PropsWithChildren<ChipProps>) => {
  return (
    <span
      className={`flex justify-center items-center text-caption py-0.5 px-2.5 ${
        variants[variant][color]
      } min-w-fit h-6 ${round ? "rounded-full" : "rounded-md"} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip;
