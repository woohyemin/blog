"use client";

import React, { useEffect } from "react";
import { PostType } from "@/api/posts";
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
import { useGetPost } from "../../../../hooks/api/useGetPost";
import PostSkeleton from "@/components/templates/post-template/skeleton";

/**
 * PostTemplate component props
 */
export interface PostTemplateProps {
  id: string;
  type: PostType;
}

/**
 * PostTemplate component
 */
const PostTemplate = ({ id, type }: PostTemplateProps) => {
  const pathname = usePathname();

  const { data: post, isLoading, error } = useGetPost({ id, type });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (error) {
    notFound();
  }

  if (isLoading) {
    return <PostSkeleton />;
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
            className="w-full rounded-2xl object-cover mb-8 sm:mb-12"
            src={`/images/posts/${post.thumbnail}`}
            alt={`${post.title} 섬네일`}
            width={1080}
            height={640}
          />
        )}

        <MDXTemplate {...post.source} />

        {post.prevNextPost && (
          <PrevNextPosts
            type={type}
            prevPost={post.prevNextPost.prevPost}
            nextPost={post.prevNextPost.nextPost}
          />
        )}

        <Comments />
      </TemplateLayout>
    );
  }
};

export default PostTemplate;
