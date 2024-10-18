import React from "react";
import Icon from "@/components/atoms/icon";
import Link from "next/link";
import { Post, PostType } from "@/api/posts";
import Divider from "@/components/atoms/divider";

/**
 * PrevNextPosts component props
 */
interface PrevNextPostsProps {
  type: PostType;
  prevPost?: Post;
  nextPost?: Post;
}

/**
 * PrevNextPosts component
 */
const PrevNextPosts = ({ type, prevPost, nextPost }: PrevNextPostsProps) => {
  return (
    <div className="flex flex-col gap-6 mt-10 sm:mt-16">
      <Divider />
      <div className={`flex gap-3 ${!prevPost && "justify-end"}`}>
        {prevPost && (
          <Link
            className="flex flex-col gap-1 sm:gap-1.5 w-[calc(50%-6px)] bg-paper rounded-lg p-3 sm:p-4"
            href={`/posts/${type}/${prevPost.path}`}
          >
            <div className="flex gap-1.5 items-center ">
              <Icon icon="arrowLeft" size="xs" color="disabled" />
              <span className="text-caption text-disabled">이전 글</span>
            </div>
            <span className="text-primary text-body2">{prevPost.title}</span>
          </Link>
        )}
        {nextPost && (
          <Link
            className="flex flex-col gap-1 sm:gap-1.5 w-[calc(50%-6px)] bg-paper rounded-lg p-3 sm:p-4 items-end"
            href={`/posts/${type}/${nextPost.path}`}
          >
            <div className="flex gap-1.5 items-center ">
              <span className="text-caption text-disabled text-right">
                다음 글
              </span>
              <Icon icon="arrowRight" size="xs" color="disabled" />
            </div>
            <span className="text-primary text-body2 text-end">
              {nextPost.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrevNextPosts;
