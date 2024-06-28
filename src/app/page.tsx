"use client";

import { Dot } from "@/components/atoms/data-display/Dot";
import { Header } from "@/components/organisms/Header";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { montserrat } from "./fonts";
import { Icon } from "@/components/atoms/data-display/Icon";

// const MenuLink = (props: PropsWithChildren<LinkProps>) => (
//   <Link className="no-underline flex gap-2 items-center" {...props} />
// );

export default function Home() {
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
          <div className="mt-2 sm:mt-4">
            <p className="text-secondary text-body1">
              더 나은 UI/UX를 고민하며 개발하는 웹 프론트엔드 개발자
              우혜민입니다.
              <br />
              떠오른 아이디어를 가지고 스스로 구상하고 개발하는 것을 좋아하고
              경험한 것들을 기록하고 있습니다.
            </p>
          </div>
        }
      />

      <div className="flex flex-col gap-2.5 mt-5 sm:mt-8">
        <Link className="no-underline flex gap-3 items-center" href="/posts">
          <Icon icon="filledDocument" size="md" color="primary" />
          <span className="text-body2 text-secondary underline underline-offset-2 decoration-[#b3b3b3]">
            <span className="text-primary font-medium">경험</span>들을 기록하고
            있어요
          </span>
        </Link>
        <Link
          className="no-underline flex gap-3 items-center"
          href="https://github.com/woohyemin"
          target="_blank"
        >
          <Icon icon="GitHub" size="md" color="primary" />
          <span className="text-body2 text-secondary underline underline-offset-2 decoration-[#b3b3b3]">
            <span className="text-primary font-medium">코드</span>는 Github로
            관리하고 있어요
          </span>
        </Link>
        <Link
          className="no-underline flex gap-3 items-center"
          href="mailto:woo28870826@gmail.com"
        >
          <Icon icon="filledMail" size="md" color="primary" />
          <span className="text-body2 text-secondary underline underline-offset-2 decoration-[#b3b3b3]">
            <span className="text-primary font-medium">연락</span>은 이메일로
            부탁드려요 <span className="text-caption tracking-wider">:)</span>
          </span>
        </Link>
      </div>
    </TemplateLayout>
  );
}
