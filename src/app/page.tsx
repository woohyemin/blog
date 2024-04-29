"use client";

import { Logo } from "@/components/atoms/Logo";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Box } from "@/components/atoms/layout/Box";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import styled from "styled-components";

export default function Home() {
  const Container = styled.div`
    background-color: ${({ theme }) =>
      theme.palette?.button?.background?.default};
    color: blue;
    padding: 8px;
  `;

  return (
    <TemplateLayout size="medium">
      <Column gap="40px" pt="15vh">
        <Typography size="body1" color="secondary">
          그냥 내가 개발하고 싶은거 개발하고 공부하는 기술 블로그
        </Typography>
        <Logo size="large" />
      </Column>
    </TemplateLayout>
  );
}
