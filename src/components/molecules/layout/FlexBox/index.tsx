"use client";

import { Box, BoxProps } from "@/components/atoms/layout/Box";
import React from "react";

/**
 * FlexBox component props
 */
export type FlexBoxProps = Omit<BoxProps, "$display">;

/**
 * FlexBox component
 */
export const FlexBox = ({ ...props }: FlexBoxProps) => {
  return <Box $display="flex" {...props} />;
};
