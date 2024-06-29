"use client";

import React from "react";

interface TabProps {
  /**
   * tab label
   */
  label: string;

  /**
   * tab style type
   */
  variant?: "button";

  /**
   * tab size
   */
  size?: "small" | "medium" | "large";

  /**
   * tab color
   */
  color?: "basic";

  /**
   * tab active
   */
  isActivated?: boolean;

  /**
   * tab click handler
   */
  onClick?: () => void;
}

/**
 * tab component
 */
export const Tab = ({
  label,
  variant = "button",
  size = "medium",
  color = "basic",
  isActivated,
  onClick,
  ...props
}: TabProps) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};
