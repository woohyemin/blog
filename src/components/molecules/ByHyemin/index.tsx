"use client";

import React from "react";
import { Row } from "../layout/FlexBox/Row";
import { Typography } from "@/components/atoms/data-display/Typography";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration-color: ${({ theme }) => theme.palette.text.secondary};
  text-decoration-thickness: 1px;
`;

interface ByHyeminProps {
  variant?: "default" | "blog";
}

/**
 * ByHyemin component
 */
export const ByHyemin = ({ variant = "default" }: ByHyeminProps) => {
  return (
    <Row $gap="4px" $pb="4px" $alignItems="end">
      <Typography $size="h6" $color="disabled">
        by
      </Typography>
      {variant === "default" && (
        <StyledLink href="/">
          <Typography $size="h6" $color="secondary">
            hyemin
          </Typography>
        </StyledLink>
      )}
      {variant === "blog" && (
        <StyledLink href="/posts">
          <Typography $size="h6" $color="secondary">
            hyemin's blog
          </Typography>
        </StyledLink>
      )}
    </Row>
  );
};
