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
import Loader from "@/components/atoms/loader";
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
const PostsTemplate = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState<string>(DEFAULT_TAB);
  const [writingPosts, setWritingPosts] = useState<Post[]>([]);
  const [studyPosts, setStudyPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleTabChange = (selectedTab: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", selectedTab);
    router.push(`?${newParams.toString()}`);
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setCurrentTab(tab);
  }, [searchParams]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await fetch(`/api/posts?tab=writing`);
      const writingData = await res.json();
      setWritingPosts(writingData);

      const studyRes = await fetch(`/api/posts?tab=study`);
      const studyData = await studyRes.json();
      setStudyPosts(studyData);

      setLoading(false);
    };

    fetchPosts();
  }, [currentTab]);

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
        {loading ? (
          <Loader />
        ) : (
          <>
            <TabsContent value="writing">
              <Posts posts={writingPosts} />
            </TabsContent>
            <TabsContent value="study">
              <Posts posts={studyPosts} />
            </TabsContent>
          </>
        )}
      </Tabs>
    </TemplateLayout>
  );
};

export default PostsTemplate;
