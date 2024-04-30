"use client";

import { Logo } from "@/components/atoms/Logo";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";

export default function Home() {
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
