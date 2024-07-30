"use client";

import { Post } from "@/lib/api";
import { Tabs } from "./molecules/navigation/Tabs";
import { TabProps } from "@/components/atoms/navigation/Tab/index";

export type Category =
  | "All"
  | "Blog"
  | "Next.js"
  | "React"
  | "Tailwind CSS"
  | "Plugin"
  | "eDM"
  | "SonarQube"
  | "SonarLint"
  | "Package Manager"
  | "npx"
  | "npm"
  | "yarn"
  | "pnpm"
  | "Etc";

const categoryList: Category[] = [
  "All",
  "Blog",
  "Next.js",
  // "React",
  "Tailwind CSS",
  "Plugin",
  "eDM",
  "SonarQube",
  "SonarLint",
  "Package Manager",
  "npx",
  "npm",
  "yarn",
  "pnpm",
  "Etc",
];

interface Props {
  currCategory: Category;
  setCurrCategory: (category: Category) => void;
  allPosts: Post[];
}

export default function Categories({
  currCategory,
  setCurrCategory,
  allPosts,
}: Props) {
  const onCategoryClick = (category: Category) => setCurrCategory(category);

  const numOfCategoryPosts = (currCategory: Category) => {
    if (currCategory === "All") return allPosts.length;
    return allPosts.filter((post) => post.categories.includes(currCategory))
      .length;
  };

  const tabs: TabProps[] = categoryList.map((category) => {
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
