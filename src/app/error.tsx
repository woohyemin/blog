"use client";

import Link from "next/link";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { Icon } from "@/components/atoms/data-display/Icon";
import { Header } from "@/components/organisms/Header";

export default function Error() {
  return (
    <TemplateLayout>
      <Header
        title={
          <h1 className="text-primary text-h3 sm:text-h2 font-medium inline">
            문제가 발생했어요.
          </h1>
        }
        content={
          <p className="text-body2 text-secondary sm:text-body2">
            죄송합니다. 잠시 후 다시 시도해 주세요.
            <span className="flex flex-wrap gap-0.5 sm:gap-1 text-body2 sm:text-body2">
              계속 문제가 발생한다면,
              <div>
                <Link
                  className="no-underline"
                  href="mailto:woo28870826@gmail.com"
                >
                  <span className="text-body2 text-primary underline underline-offset-[3px] decoration-underline">
                    이메일
                  </span>
                </Link>
                로 문의해 주세요.
              </div>
            </span>
          </p>
        }
      />

      <Link className="no-underline flex gap-3 items-center pt-4" href="/">
        <span className="text-primary text-body2 flex flex-row items-center gap-1">
          홈으로 가기
          <Icon icon="arrowRight" size="xs" color="secondary" />
        </span>
      </Link>
    </TemplateLayout>
  );
}
