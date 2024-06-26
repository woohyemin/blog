"use client";

import React from "react";

interface ChipProps {
  /**
   * chip label
   */
  label: string;

  /**
   * chip size
   */
  size?: "small" | "medium" | "large";

  /**
   * chip color
   */
  color?: "basic" | "primary";
}

/**
 * Chip component
 */
export const Chip = ({
  label,
  size = "medium",
  color = "basic",
  ...props
}: ChipProps) => {
  return <div {...props}>{label}</div>;
};
