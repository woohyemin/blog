import React from "react";
import { Icon } from "@/components/atoms/data-display/Icon";
import Link from "next/link";
import { Post } from "@/api/posts";

/**
 * PrevNextPosts component props
 */
interface PrevNextPostsProps {
  prevPost?: Post;
  nextPost?: Post;
}

/**
 * PrevNextPosts component
 */
export const PrevNextPosts = ({ prevPost, nextPost }: PrevNextPostsProps) => {
  return (
    <div
      className={`flex flex-col gap-2 sm:gap-4 pt-8 sm:pt-12 sm:flex-row ${!prevPost && "justify-end"}`}
    >
      {prevPost && (
        <Link
          className="flex gap-4 items-center rounded-lg py-4 px-5 bg-paper sm:w-[calc(50%-8px)]"
          href={`/posts/${prevPost.path}`}
        >
          <Icon icon="arrowLeft" size="sm" />
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="text-caption text-secondary">이전 글</span>
            <span className="text-primary text-body2 font-medium overflow-hidden whitespace-nowrap text-ellipsis">
              {prevPost.title}
            </span>
          </div>
        </Link>
      )}
      {nextPost && (
        <Link
          className="flex gap-4 items-center rounded-lg py-4 px-5 bg-paper justify-end sm:w-[calc(50%-8px)]"
          href={`/posts/${nextPost.path}`}
        >
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="text-caption text-secondary text-right">
              다음 글
            </span>
            <span className="text-primary text-body2 font-medium overflow-hidden whitespace-nowrap text-ellipsis">
              {nextPost.title}
            </span>
          </div>
          <Icon icon="arrowRight" size="sm" />
        </Link>
      )}
    </div>
  );
};
