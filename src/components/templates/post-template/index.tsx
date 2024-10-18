"use client";

import React, { useEffect, useState } from "react";
import { Post, PostType, PrevNextPost } from "@/api/posts";
import { notFound, usePathname } from "next/navigation";
import Loader from "@/components/atoms/loader";
import Dot from "@/components/atoms/dot";
import ByHem from "@/components/molecules/by-hem";
import Comments from "@/components/organisms/comments";
import Header from "@/components/organisms/header";
import TemplateLayout from "@/components/templates/layout/template-layout";
import Image from "next/image";
import PrevNextPosts from "@/components/organisms/prev-next-posts";
import MDXTemplate from "@/components/templates/mdx-template";
import Chip from "@/components/atoms/chip";

/**
 * PostTemplate component props
 */
export interface PostTemplateProps {
  type: PostType;
  post: Post | "not-found";
  prevNextPost: PrevNextPost | "not-found";
}

/**
 * PostTemplate component
 */
const PostTemplate = ({ type, post, prevNextPost }: PostTemplateProps) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (post === "not-found") {
    notFound();
  }

  if (post) {
    return (
      <TemplateLayout>
        <Header
          title={
            <h1 className="text-primary text-h3 font-medium inline sm:text-h2">
              {post.title}
            </h1>
          }
          content={
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center h-6">
                <span className="text-secondary text-caption sm:text-body2">
                  {post.date}
                </span>
                <Dot />
                <ByHem variant="posts" />
              </div>
              <div className="flex flex-wrap gap-1 pt-2.5 pb-1.5 sm:py-3.5 sm:pb-2.5 sm:gap-1.5">
                {post.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          }
        />

        {post.thumbnail && (
          <Image
            className="w-full rounded-xl object-cover mb-4 sm:mb-12"
            src={`/images/posts/${post.thumbnail}`}
            alt={`${post.title} 섬네일`}
            width={1080}
            height={640}
          />
        )}

        <MDXTemplate {...post.source} />

        {prevNextPost && prevNextPost !== "not-found" && (
          <PrevNextPosts
            type={type}
            prevPost={prevNextPost.prevPost}
            nextPost={prevNextPost.nextPost}
          />
        )}

        <Comments />
      </TemplateLayout>
    );
  }
};

export default PostTemplate;
