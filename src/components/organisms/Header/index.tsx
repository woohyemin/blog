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

  /**
   * header size
   */
  size?: "small" | "medium" | "large";
}

const StyledHeaderWrapper = styled(Column)`
  gap: 8px;
  padding-bottom: 32px;

  @media only screen and (max-width: 600px) {
    gap: 4px;
    padding-bottom: 20px;
  }
`;

const StyledTitleWrapper = styled(Row)<Omit<HeaderProps, "title" | "content">>`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
`;

/**
 * header component
 */
export const Header = ({ title, content, size, ...props }: HeaderProps) => {
  return (
    <StyledHeaderWrapper>
      <StyledTitleWrapper
        justifyContent="space-between"
        alignItems="center"
        size={size}
        {...props}
      >
        {title}
        <Row gap="8px" alignItems="center">
          <ThemeToggle />
          {/* <Box w="32px" h="32px" bgColor="#DDD" /> */}
        </Row>
      </StyledTitleWrapper>
      {content}
    </StyledHeaderWrapper>
  );
};
