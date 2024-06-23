"use client";

import { Column } from "@/components/molecules/layout/FlexBox/Column";
import React, { Fragment } from "react";
import styled from "styled-components";
import { Divider } from "@/components/atoms/data-display/Divider";
import { Typography } from "@/components/atoms/data-display/Typography";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/api";

/**
 * Posts component props
 */
export interface PostsProps {
  posts: Post[];
}

const PostsWrapper = styled(Column)`
  gap: 32px;

  @media only screen and (max-width: 600px) {
    gap: 20px;
  }
`;

// const Title = styled(Typography)`
//   padding-top: 16px;

//   @media only screen and (max-width: 600px) {
//     padding-top: 12px;
//   }
// `;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

/**
 * Posts component
 */
export const Posts = ({ posts }: PostsProps) => {
  return (
    <PostsWrapper>
      {posts.map((el, index) => (
        <Fragment key={el.description}>
          <Link href={`posts/${el.path}`} style={{ textDecoration: "none" }}>
            <Column $w="100%">
              <StyledImage
                src={`/images/thumbnails/${el.thumbnail}`}
                alt="포스트 섬네일 이미지"
                width={640}
                height={320}
              />

              <Typography
                $size="h4"
                $component="h3"
                $weight="medium"
                $pt="12px"
              >
                {el.title}
              </Typography>
              <Typography
                $size="h5"
                $component="p"
                $color="secondary"
                $pt="4px"
              >
                {el.description}
              </Typography>

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

              <Typography $size="caption" $color="disabled" $pt="12px">
                {el.date}
              </Typography>
            </Column>
          </Link>
          {index < posts.length - 1 && <Divider />}
        </Fragment>
      ))}
    </PostsWrapper>
  );
};