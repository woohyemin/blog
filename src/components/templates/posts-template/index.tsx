"use client";

import React, { useEffect, useState } from "react";
import Posts from "@/components/organisms/posts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/molecules/tabs";
import { Post } from "@/api/posts";
import { useRouter, useSearchParams } from "next/navigation";
import TemplateLayout from "../layout/template-layout";
import ByHem from "@/components/molecules/by-hem";
import Header from "@/components/organisms/header";

const DEFAULT_TAB = "writing";
const TABS = [
  { label: "글", value: "writing" },
  { label: "공부", value: "study" },
];

/**
 * PostsTemplate component
 */
export interface PostsTemplateProps {
  writingPosts: Post[];
  studyPosts: Post[];
}

/**
 * PostsTemplate component
 */
const PostsTemplate = ({ writingPosts, studyPosts }: PostsTemplateProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState<string>(DEFAULT_TAB);

  const handleTabChange = (selectedTab: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", selectedTab);
    router.push(`?${newParams.toString()}`);
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setCurrentTab(tab);
  }, [searchParams]);

  return (
    <TemplateLayout>
      <Header
        title={
          <div className="flex gap-2 sm:gap-3 items-end">
            <h1 className="text-primary text-h3 font-medium inline sm:text-h2">
              포스트
            </h1>
            <div className="pb-0.5 sm:pb-1">
              <ByHem />
            </div>
          </div>
        }
        content={
          <p className="text-body2 text-secondary sm:text-body2">
            개발하고 공부한 내용들을 기록하고 있어요.
          </p>
        }
      />

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
    </TemplateLayout>
  );
};

export default PostsTemplate;
