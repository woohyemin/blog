"use client";

import React, { PropsWithChildren } from "react";
import { IconType, icons } from "./icons";

interface IconProps {
  /**
   * Icon
   */
  icon: IconType;

  /**
   * Icon size
   */
  size?: "sm" | "md";

  /**
   * Icon color
   */
  color?: "primary" | "secondary";
}

/**
 * Icon component
 */
export const Icon = ({
  icon,
  size = "md",
  color = "primary",
  ...props
}: PropsWithChildren<IconProps>) => {
  const getSize = () => {
    if (size === "sm") {
      return "14px";
    } else if (size === "md") {
      return "18px";
    }
    return "18px";
  };

  return (
    <svg
      viewBox="0 0 120 120"
      width={getSize()}
      height={getSize()}
      color={color}
      {...props}
    >
      {icons[icon]}
    </svg>
  );
};
