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
  size?: "xs" | "sm" | "md" | "lg" | string;

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
    if (size === "xs") {
      return "12px";
    } else if (size === "sm") {
      return "14px";
    } else if (size === "md") {
      return "16px";
    } else if (size === "lg") {
      return "20px";
    } else if (size === "xl") {
      return "24px";
    }
    return size;
  };

  const getColor = () => {
    if (color === "primary") {
      return "text-primary";
    } else if (color === "secondary") {
      return "text-secondary";
    }
    return "text-primary";
  };

  return (
    <svg
      viewBox="0 0 120 120"
      width={getSize()}
      height={getSize()}
      className={`${getColor()} min-w-fit min-h-fit`}
      {...props}
    >
      {icons[icon]}
    </svg>
  );
};
