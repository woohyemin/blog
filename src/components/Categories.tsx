"use client";

import { Post } from "@/api/posts";
import { Tabs } from "./molecules/navigation/Tabs";
import { TabProps } from "@/components/atoms/navigation/Tab/index";

interface Props {
  currCategory: string;
  setCurrCategory: (category: string) => void;
  allPosts: Post[];
}

export default function Categories({
  currCategory,
  setCurrCategory,
  allPosts,
}: Props) {
  const categories = Array.from(new Set(allPosts.map(post => post.categories).flat())).filter(category => category !== 'Etc');
  const sortedCategories = categories.sort((a, b) => a.localeCompare(b));

  sortedCategories.unshift('All');
  sortedCategories.push('Etc');

  const onCategoryClick = (category: string) => setCurrCategory(category);

  const numOfCategoryPosts = (currCategory: string) => {
    if (currCategory === "All") return allPosts.length;
    return allPosts.filter((post) => post.categories.includes(currCategory))
      .length;
  };

  const tabs: TabProps[] = sortedCategories.map((category) => {
    return {
      label: (
        <div className="flex gap-1">
          <span>{category}</span>
          <span
            className={`tracking-wider ${currCategory === category ? "text-tabActiveNum" : "text-tabNum"}`}
          >
            ({numOfCategoryPosts(category)})
          </span>
        </div>
      ),
      value: category,
      selected: currCategory === category,
      onClick: () => onCategoryClick(category),
    };
  });

  return <Tabs tabs={tabs} />;
}
