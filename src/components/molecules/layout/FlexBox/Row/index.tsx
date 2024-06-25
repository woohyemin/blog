"use client";

import React from "react";
import { FlexBox, FlexBoxProps } from "..";

/**
 * Row component props
 */
export interface RowProps extends Omit<FlexBoxProps, "$direction"> {
  $reverse?: boolean;
}

/**
 * Row component
 */
export const Row = ({ $reverse, ...props }: RowProps) => {
  return (
    <FlexBox $flexDirection={$reverse ? "row-reverse" : "row"} {...props} />
  );
};
