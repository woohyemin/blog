import { ByHem } from "@/components/molecules/ByHem";
import { Header } from "@/components/organisms/Header";
import { Posts } from "@/components/organisms/Posts";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog-woohyemins-projects.vercel.app"),
  title: "hem's posts",
  description: "I'm recording my development experiences.",
  openGraph: {
    images: [
      {
        url: "/posts/opengraph-image",
        width: 1200,
        height: 630,
        alt: "hem's posts",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/posts/opengraph-image",
        width: 1200,
        height: 630,
        alt: "hem's posts",
      },
    ],
  },
};

export default async function Projects() {
  const allPosts = await getAllPosts();

  if (!allPosts) {
    return <div className="bg-red-50 w-5 h-5" />;
  }

  return (
    <TemplateLayout>
      <Header
        title={
          <div className="flex gap-3 items-end">
            <h1 className="text-primary text-h3 font-medium inline sm:text-h2">
              포스트
            </h1>
            <ByHem />
          </div>
        }
        content={
          <p className="text-body2 text-secondary sm:text-body2">
            개발하고 공부한 내용들을 기록하고 있습니다.
          </p>
        }
      />

      <Posts posts={allPosts} />
    </TemplateLayout>
  );
}
