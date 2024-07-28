"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Divider } from "@/components/atoms/data-display/Divider";
import Link from "next/link";
import { Post } from "@/lib/api";
import Categories, { Category } from "@/components/Categories";
import { Chip } from "@/components/atoms/data-display/Chip";
import Image from "next/image";

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
      {filteredPosts.length > 0 ? (
        <div className="flex flex-col gap-5 sm:gap-6">
          {filteredPosts.map((el, index) => (
            <Fragment key={`${el.id}-${el.title}`}>
              <Link
                href={`posts/${el.path}`}
                className="w-full flex flex-row justify-between gap-8"
              >
                <div className="flex flex-col overflow-hidden">
                  <p className="text-caption text-disabled">{el.date}</p>
                  <h3 className="text-h5 text-primary font-medium pt-1.5 overflow-hidden whitespace-nowrap text-ellipsis sm:text-h4 sm:pt-2">
                    {el.title}
                  </h3>
                  <p className="text-caption text-secondary pt-0.5 overflow-hidden whitespace-nowrap text-ellipsis sm:text-body2">
                    {el.description}
                  </p>
                  <div className="flex gap-1.5 pt-3.5 sm:pt-4 sm:gap-2">
                    {el.categories.map((category) => (
                      <Chip key={category}>{category}</Chip>
                    ))}
                  </div>
                </div>
                {el.thumbnail && (
                  <Image
                    className="w-48 min-h-full rounded-lg object-cover hidden sm:inline"
                    src={`/images/posts/${el.thumbnail}`}
                    alt={`${el.title} 섬네일`}
                    width={270}
                    height={160}
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
