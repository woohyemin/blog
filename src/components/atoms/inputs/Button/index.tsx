"use client";

import React, { HTMLAttributes, PropsWithChildren } from "react";
import { IconType } from "../../data-display/Icon/icons";
import { Icon } from "../../data-display/Icon";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Button size
   */
  size?: "sm" | "md";

  /**
   * Button color
   */
  color?: "basic";

  /**
   * start icon
   */
  startIcon?: IconType;
}

/**
 * Button component
 */
export const Button = ({
  size = "md",
  color = "basic",
  startIcon,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const getClassNameBySize = () => {
    if (size === "sm") {
      return "h-7 py-[2px] px-4 rounded-3xl gap-1 text-body1";
    } else if (size === "md") {
      return "h-7 py-[2px] px-4 rounded-3xl gap-2 text-h6";
    }
    return "h-7 py-[2px] px-4 rounded-3xl gap-2 text-h6";
  };

  const getClassNameByColor = () => {
    if (color === "basic") {
      return "text-primary bg-basicBtnBg";
    }
    return "text-primary bg-basicBtnBg";
  };

  return (
    <button
      className={`flex justify-center items-center font-medium ${getClassNameBySize()} ${getClassNameByColor()}`}
      {...props}
    >
      {startIcon && <Icon icon={startIcon} size="sm" color="secondary" />}
      {children}
    </button>
  );
};
