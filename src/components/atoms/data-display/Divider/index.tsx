"use client";

import React from "react";

/**
 * Divider component props
 */
export interface DividerProps {
  color?: "basic";
}

/**
 * Divider component
 */
export const Divider = ({ color = "basic", ...props }: DividerProps) => {
  return <div className="w-full h-[1px] bg-divider" color="basic" {...props} />;
};
