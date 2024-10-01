"use client";

import React, { PropsWithChildren } from "react";
import { Posts } from "@/components/organisms/Posts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Post } from "@/api/posts";

/**
 * PostsTemplate component props
 */
export interface PostsTemplateProps {
  writingPosts: Post[];
  studyPosts: Post[];
}

/**
 * PostsTemplate component
 */
const PostsTemplate = ({
  writingPosts,
  studyPosts,
}: PropsWithChildren<PostsTemplateProps>) => {
  return (
    <Tabs defaultValue="writing">
      <TabsList>
        <TabsTrigger value="writing">글</TabsTrigger>
        <TabsTrigger value="study">공부</TabsTrigger>
      </TabsList>

      <TabsContent value="writing">
        <Posts posts={writingPosts} />
      </TabsContent>
      <TabsContent value="study">
        <Posts posts={studyPosts} />
      </TabsContent>
    </Tabs>
  );
};

export default PostsTemplate;
