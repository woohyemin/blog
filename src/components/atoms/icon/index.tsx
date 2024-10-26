"use client";

import React, { PropsWithChildren } from "react";
import { IconType, icons } from "./icons";
import { cn } from "@/util/cn";

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

  /**
   * className
   */
  className?: string;
}

/**
 * Icon component
 */
const Icon = ({
  icon,
  size = "md",
  color = "primary",
  className,
  ...props
}: PropsWithChildren<IconProps>) => {
  return (
    <svg
      viewBox="0 0 120 120"
      width={sizes[size]}
      height={sizes[size]}
      className={cn(
        `text-${color || "primary"} min-w-fit min-h-fit`,
        className
      )}
      {...props}
    >
      {icons[icon]}
    </svg>
  );
};

export default Icon;
