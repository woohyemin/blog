"use client";

import React, { Fragment } from "react";
import { Divider } from "@/components/atoms/data-display/Divider";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/api";

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
  return (
    <div className="flex flex-col gap-5 sm:gap-8">
      {posts.map((el, index) => (
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

              {/* <Row gap="4px" pt="16px">
            <Row p="2px 8px" borderRadius="4px" bgColor="lightGray">
            <Typography size="body2">React</Typography>
            </Row>
            <Row p="2px 8px" borderRadius="4px" bgColor="lightGray">
            <Typography size="body2">Next.js</Typography>
            </Row>
            <Row p="2px 8px" borderRadius="4px" bgColor="lightGray">
            <Typography size="body2">Typescript</Typography>
            </Row>
          </Row> */}

              <p className="text-caption text-disabled pt-3 sm:text-body2">
                {el.date}
              </p>
            </div>
          </Link>
          {index < posts.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};
