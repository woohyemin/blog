"use client";

import React from "react";

/**
 * Divider component props
 */
export interface DividerProps {
  color?: "basic";
  direction?: "horizontal" | "vertical";
}

/**
 * Divider component
 */
const Divider = ({
  color = "basic",
  direction = "horizontal",
  ...props
}: DividerProps) => {
  return (
    <div
      className={`${
        direction === "horizontal" ? "h-[1px] min-w-full" : "w-[1px] min-h-full"
      } bg-divider`}
      color="basic"
      {...props}
    />
  );
};

export default Divider;
