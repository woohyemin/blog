"use client";

import ThemeToggle from "@/components/atoms/ThemeToggle";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import React, { ReactNode } from "react";
import styled from "styled-components";

/**
 * header component props
 */
interface HeaderProps {
  /**
   * header title
   */
  title: ReactNode;

  /**
   * header content
   */
  content: ReactNode;
}

const StyledHeaderWrapper = styled(Column)`
  gap: 8px;
  padding-bottom: 32px;

  @media only screen and (max-width: 600px) {
    gap: 4px;
    padding-bottom: 20px;
  }
`;

/**
 * header component
 */
export const Header = ({ title, content }: HeaderProps) => {
  return (
    <StyledHeaderWrapper>
      <Row $justifyContent="space-between" $alignItems="center">
        {title}
        <ThemeToggle />
      </Row>
      {content}
    </StyledHeaderWrapper>
  );
};
