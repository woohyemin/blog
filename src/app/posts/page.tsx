import { ByHem } from "@/components/molecules/ByHem";
import { Header } from "@/components/organisms/Header";
import { Posts } from "@/components/organisms/Posts";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { getAllPosts } from "@/api/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog-woohyemins-projects.vercel.app"),
  title: "Hyemin's posts",
  description: "I'm recording my development experiences.",
  openGraph: {
    images: [
      {
        url: "/images/og/hyemin_posts_og_img.jpg",
        width: 1200,
        height: 630,
        alt: "hyemin's posts",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/images/og/hyemin_posts_og_img.jpg",
        width: 1200,
        height: 630,
        alt: "hyemin's posts",
      },
    ],
  },
};

export default async function Projects() {
  const allPosts = await getAllPosts();
  const sortedPosts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

  if (!allPosts) {
    return <div className="bg-red-50 w-5 h-5" />;
  }

  return (
    <TemplateLayout>
      <Header
        title={
          <div className="flex gap-2 sm:gap-3 items-end">
            <h1 className="text-primary text-h3 font-medium inline sm:text-h2">
              포스트
            </h1>
            <div className="pb-0.5 sm:pb-1">
              <ByHem />
            </div>
          </div>
        }
        content={
          <p className="text-body2 text-secondary sm:text-body2">
            개발하고 공부한 내용들을 기록하고 있어요.
          </p>
        }
      />

      <Posts posts={sortedPosts} />
    </TemplateLayout>
  );
}
