import PostsTemplate from "@/components/templates/posts-template";
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

export default async function Posts() {
  return <PostsTemplate />;
}
