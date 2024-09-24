import Link from "next/link";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { Icon } from "@/components/atoms/data-display/Icon";
import { Header } from "@/components/organisms/Header";

export default async function PostDetailNotFound() {
  return (
    <TemplateLayout>
      <Header
        title={
          <h1 className="text-primary text-h3 sm:text-h2 font-medium inline">
            글을 찾을 수 없어요.
          </h1>
        }
        content={
          <p className="text-body2 text-secondary sm:text-body2">
            입력하신 주소가 정확한지 한번 확인해 주세요.
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
