"use client";

import { Box, BoxProps } from "@/components/atoms/layout/Box";
import React from "react";
import styled from "styled-components";

/**
 * CommonLayout component props
 */
export interface CommonLayoutProps extends BoxProps {
  size?: "small" | "medium" | "large";
}

const Layout = styled(Box)<CommonLayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  min-height: 100vh;
`;

/**
 * CommonLayout component
 */
export const CommonLayout = ({ ...props }: CommonLayoutProps) => {
  return <Layout {...props} />;
};
