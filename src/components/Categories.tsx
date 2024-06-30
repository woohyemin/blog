"use client";

import { Post } from "@/lib/api";
import Category from "./Category";

export type Category =
  | "All"
  | "Blog"
  | "Next.js"
  | "React"
  | "Typescript"
  | "tailwindcss"
  | "Github";

const categoryList: Category[] = [
  "All",
  "Blog",
  "Next.js",
  "React",
  "Typescript",
  "tailwindcss",
  "Github",
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

  return (
    <ul className="flex gap-2 h-9 max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
      {categoryList.map((category) => (
        <li key={category}>
          <button onClick={() => onCategoryClick(category)}>
            <Category selected={currCategory === category} category={category}>
              <span>{numOfCategoryPosts(category)}</span>
            </Category>
          </button>
        </li>
      ))}
    </ul>
  );
}
