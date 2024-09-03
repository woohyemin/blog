import { Header } from "@/components/organisms/Header";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import Link from "next/link";
import { Icon } from "@/components/atoms/data-display/Icon";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog-woohyemins-projects.vercel.app"),
  title: "Hyemin's blog",
  description: "I'm a front-end developer.",
  openGraph: {
    images: [
      {
        url: "/images/og/hyemin_blog_og_img.jpg",
        alt: "hyemin's blog",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/images/og/hyemin_blog_og_img.jpg",
        alt: "hyemin's blog",
      },
    ],
  },
};

const Tag = ({ children }: PropsWithChildren) => (
  <span className="font-Montserrat text-disabled text-caption">
    # {children}
  </span>
);

export default function Home() {
  return (
    <TemplateLayout>
      <Header
        title={
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-primary text-h3 font-medium inline">우혜민</h1>
          </div>
        }
        content={
          <div className="mt-4 sm:mt-6">
            <p className="text-secondary text-body1">
              더 나은 사용자 경험을 고민하는 웹 프론트엔드 개발자 우혜민입니다.
              <br />
              떠오른 아이디어를 구현해 보는 것을 좋아하고, 경험한 것들을
              기록하고 있습니다.
            </p>

            <div className="flex flex-row gap-x-3 gap-y-1 flex-wrap mt-4">
              <Tag>Frontend Developer</Tag>
              <Tag>React</Tag>
              <Tag>Next.js</Tag>
              <Tag>Typescript</Tag>
              <Tag>Styled Components</Tag>
              <Tag>Tailwind CSS</Tag>
            </div>
          </div>
        }
      />

      <div className="flex flex-col gap-2.5 mt-6 sm:mt-10 sm:gap-3.5">
        <Link className="no-underline flex gap-3 items-center" href="/posts">
          <Icon icon="filledDocument" size="md" color="secondary" />
          <span className="text-body2 text-secondary underline underline-offset-[3px] decoration-underline">
            <span className="text-primary font-medium">경험</span>들을 기록하고
            있어요
          </span>
        </Link>
        <Link
          className="no-underline flex gap-3 items-center"
          href="https://github.com/woohyemin"
          target="_blank"
        >
          <Icon icon="GitHub" size="md" color="secondary" />
          <span className="flex gap-0.5 items-center">
            <span className="text-body2 text-secondary underline underline-offset-[3px] decoration-underline">
              <span className="text-primary font-medium">코드</span>는 Github로
              관리하고 있어요
            </span>
            <Icon icon="externalLink" size="xs" color="secondary" />
          </span>
        </Link>
        <Link
          className="no-underline flex gap-3 items-center"
          href="mailto:woo28870826@gmail.com"
        >
          <Icon icon="filledMail" size="md" color="secondary" />
          <span className="text-body2 text-secondary underline underline-offset-[3px] decoration-underline">
            <span className="text-primary font-medium">연락</span>은 이메일로
            부탁드려요 <span className="text-caption tracking-wider">:)</span>
          </span>
        </Link>
      </div>
    </TemplateLayout>
  );
}
