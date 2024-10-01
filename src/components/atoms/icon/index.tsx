"use client";

import React, { PropsWithChildren } from "react";
import { IconType, icons } from "./icons";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
type IconColor = "primary" | "secondary" | "disabled";

const sizes: { [key in IconSize]: string } = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
};

interface IconProps {
  /**
   * Icon
   */
  icon: IconType;

  /**
   * Icon size
   */
  size?: IconSize;

  /**
   * Icon color
   */
  color?: IconColor;
}

/**
 * Icon component
 */
const Icon = ({
  icon,
  size = "md",
  color = "primary",
  ...props
}: PropsWithChildren<IconProps>) => {
  return (
    <svg
      viewBox="0 0 120 120"
      width={sizes[size]}
      height={sizes[size]}
      className={`text-${color || "primary"} min-w-fit min-h-fit`}
      {...props}
    >
      {icons[icon]}
    </svg>
  );
};

export default Icon;
