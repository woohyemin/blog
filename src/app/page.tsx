"use client";

import { Dot } from "@/components/atoms/data-display/Dot";
import { Button } from "@/components/atoms/inputs/Button";
import { Header } from "@/components/organisms/Header";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { montserrat } from "./fonts";
import { useTheme } from "next-themes";

const MenuLink = (props: PropsWithChildren<LinkProps>) => (
  <Link className="no-underline" {...props} />
);

export default function Home() {
  const theme = useTheme();

  return (
    <TemplateLayout>
      <Header
        title={
          <div className="flex flex-row gap-2 items-center">
            <h1 className="font-sans text-primary text-h3 font-medium inline sm:text-h2">
              우혜민
            </h1>
            <Dot />
            <h1
              className={`${montserrat.className} text-primary text-h4 font-medium inline sm:text-h3`}
            >
              hyemin woo
            </h1>
          </div>
        }
        content={
          <div className="mt-1 sm:mt-2">
            <p className="text-body1 text-secondary sm:text-h6">
              더 나은 UI/UX를 고민하며 개발하는 웹 프론트엔드 개발자
              우혜민입니다.
              <br />
              떠오른 아이디어를 가지고 스스로 구상하고 개발하는 것을 좋아하고
              경험한 것들을 기록하고 있습니다.
            </p>
          </div>
        }
      />

      <div className="flex gap-2 mt-3 sm:mt-5">
        <MenuLink href={`/posts`}>
          <Button startIcon="filledDocument">Posts</Button>
        </MenuLink>
        <Button startIcon="GitHub">GitHub</Button>
        <Button startIcon="filledMail">Email</Button>
      </div>
    </TemplateLayout>
  );
}
