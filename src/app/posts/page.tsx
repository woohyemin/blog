import { getPosts } from "@/api/posts";
import PostsTemplate from "@/components/templates/posts-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.woohyemin.com"),
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

export default async function Posts() {
  const writingPosts = await getPosts("writing");
  const studyPosts = await getPosts("study");
  const projectPosts = await getPosts("project");

  return (
    <PostsTemplate
      writingPosts={writingPosts}
      studyPosts={studyPosts}
      projectPosts={projectPosts}
    />
  );
}
