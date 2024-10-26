"use client";

import React, { Fragment, useEffect, useState } from "react";
import Divider from "@/components/atoms/divider";
import Link from "next/link";
import { Post, PostType } from "@/api/posts";
import Categories from "@/components/organisms/categories";
import Chip from "@/components/atoms/chip";
import Image from "next/image";

/**
 * Posts component props
 */
export interface PostsProps {
  type: PostType;
  posts: Post[];
}

/**
 * Posts component
 */
const Posts = ({ type, posts }: PostsProps) => {
  const [currCategory, setCurrCategory] = useState<string>("All");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) => {
        if (currCategory === "All") return post;
        return post.categories.includes(currCategory);
      })
    );
  }, [currCategory, posts]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <Categories
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
        allPosts={posts}
      />
      {filteredPosts.length > 0 ? (
        <div className="flex flex-col gap-5 sm:gap-6">
          {filteredPosts.map((el, index) => (
            <Fragment key={el.path}>
              <Link
                href={`posts/${type}/${el.path}`}
                className="w-full flex flex-row justify-between gap-8"
              >
                <div className="flex flex-col overflow-hidden">
                  <h3 className="text-h4 text-primary font-medium overflow-hidden whitespace-nowrap text-ellipsis sm:text-h3">
                    {el.title}
                  </h3>
                  <p className="text-body2 text-secondary pt-0.5 sm:pt-1 overflow-hidden whitespace-nowrap text-ellipsis sm:text-body1">
                    {el.description}
                  </p>
                  <div className="flex gap-1 pt-2 sm:pt-2.5 sm:gap-1.5 flex-wrap">
                    {el.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                  <p className="text-caption sm:text-body2 text-disabled pt-3 sm:pt-5">
                    {el.date}
                  </p>
                </div>
                {el.thumbnail && (
                  <Image
                    className="w-[210px] min-h-full rounded-xl object-cover hidden sm:inline border border-paper"
                    src={`/images/posts/${el.thumbnail}`}
                    alt={`${el.title} 섬네일`}
                    width={300}
                    height={320}
                  />
                )}
              </Link>
              {index < filteredPosts.length - 1 && <Divider />}
            </Fragment>
          ))}
        </div>
      ) : (
        <p className="pt-4 text-body2 text-disabled">등록된 글이 없어요.</p>
      )}
    </div>
  );
};

export default Posts;
