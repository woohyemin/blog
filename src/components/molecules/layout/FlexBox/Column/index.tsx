"use client";

import React from "react";
import { FlexBox, FlexBoxProps } from "..";

/**
 * Column component props
 */
export interface ColumnProps extends Omit<FlexBoxProps, "$direction"> {
  $reverse?: boolean;
}

/**
 * Column component
 */
export const Column = ({ $reverse, ...props }: ColumnProps) => {
  return (
    <FlexBox
      $flexDirection={$reverse ? "column-reverse" : "column"}
      {...props}
    />
  );
};
