"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Divider } from "@/components/atoms/data-display/Divider";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/api";
import Categories, { Category } from "@/components/Categories";

/**
 * Posts component props
 */
export interface PostsProps {
  posts: Post[];
}

/**
 * Posts component
 */
export const Posts = ({ posts }: PostsProps) => {
  const [currCategory, setCurrCategory] = useState<Category>("All");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) => {
        if (currCategory === "All") return post;
        return post.categories.includes(currCategory);
      })
    );
  }, [currCategory]);

  return (
    <div className="flex flex-col mt-2 gap-3 sm:gap-4">
      <Categories
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
        allPosts={posts}
      />
      <div className="flex flex-col gap-5 sm:gap-8">
        {filteredPosts.map((el, index) => (
          <Fragment key={el.description}>
            <Link className="no-underline" href={`posts/${el.path}`}>
              <div className="w-full">
                <Image
                  className="w-full h-auto rounded-lg object-cover"
                  src={`/images/posts/${el.thumbnail}`}
                  alt="포스트 섬네일 이미지"
                  width={640}
                  height={320}
                />

                <h3 className="text-h4 text-primary font-medium pt-3 sm:text-h3">
                  {el.title}
                </h3>
                <p className="text-h5 text-secondary pt-1 sm:text-h4">
                  {el.description}
                </p>

                <div className="flex gap-1.5">
                  {/* <span>{el.category.map}</span> */}
                </div>

                <p className="text-caption text-disabled pt-3 sm:text-body2">
                  {el.date}
                </p>
              </div>
            </Link>
            {index < filteredPosts.length - 1 && <Divider />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
