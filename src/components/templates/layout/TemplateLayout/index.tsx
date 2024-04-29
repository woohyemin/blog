"use client";

import {
  Column,
  ColumnProps,
} from "@/components/molecules/layout/FlexBox/Column";
import React from "react";
import styled from "styled-components";

/**
 * TemplateLayout component props
 */
export interface TemplateLayoutProps extends ColumnProps {
  size?: "small" | "medium" | "large";
}

const Layout = styled(Column)<TemplateLayoutProps>`
  margin: 0 auto;
  padding: 40px;
  min-height: calc(100vh - 144px);

  max-width: ${({ size }) => {
    if (size === "small") {
      return "640px";
    } else if (size === "medium") {
      return "1300px";
    } else {
      return "1600px";
    }
  }};
`;

/**
 * TemplateLayout component
 */
export const TemplateLayout = ({ ...props }: TemplateLayoutProps) => {
  return <Layout {...props} />;
};
