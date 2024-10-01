"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import Posts from "@/components/organisms/posts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/molecules/tabs";
import { Post } from "@/api/posts";
import { useRouter, useSearchParams } from "next/navigation";

const DEFAULT_TAB = "writing";
const TABS = [
  { label: "글", value: "writing" },
  { label: "공부", value: "study" },
];

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState<string>(DEFAULT_TAB);

  const handleTabChange = (selectedTab: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", selectedTab);
    router.push(`?${newParams.toString()}`);
  };

  useEffect(() => {
    setCurrentTab(searchParams.get("tab") || DEFAULT_TAB);
  }, [searchParams]);

  return (
    <Tabs defaultValue={DEFAULT_TAB} value={currentTab}>
      <TabsList>
        {TABS.map(({ label, value }) => (
          <TabsTrigger
            key={value}
            value={value}
            onClick={() => handleTabChange(value)}
          >
            {label}
          </TabsTrigger>
        ))}
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
