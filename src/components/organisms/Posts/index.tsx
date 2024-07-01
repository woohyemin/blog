"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Divider } from "@/components/atoms/data-display/Divider";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/api";
import Categories, { Category } from "@/components/Categories";
import { Chip } from "@/components/atoms/data-display/Chip";

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
    <div className="flex flex-col gap-6 sm:gap-9">
      <Categories
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
        allPosts={posts}
      />
      <div className="flex flex-col gap-4 sm:gap-6">
        {filteredPosts.map((el, index) => (
          <Fragment key={`${el.id}-${el.title}`}>
            <Link href={`posts/${el.path}`} className="w-full">
              <p className="text-caption text-disabled">{el.date}</p>
              <h3 className="text-h5 text-primary font-medium pt-1.5 overflow-hidden whitespace-nowrap text-ellipsis sm:text-h4 sm:pt-2">
                {el.title}
              </h3>
              <p className="text-caption text-secondary pt-0.5 overflow-hidden whitespace-nowrap text-ellipsis sm:text-body2">
                {el.description}
              </p>
              <div className="flex gap-1.5 pt-2 sm:pt-3.5 sm:gap-2">
                {el.categories.map((category) => (
                  <Chip key={category}>{category}</Chip>
                ))}
              </div>
            </Link>
            {index < filteredPosts.length - 1 && <Divider />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
