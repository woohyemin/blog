"use client";

import { Post } from "@/api/posts";
import { Buttons } from "../../molecules/buttons";
import { ButtonProps } from "../../atoms/button";

interface Props {
  currCategory: string;
  setCurrCategory: (category: string) => void;
  allPosts: Post[];
}

const Categories = ({ currCategory, setCurrCategory, allPosts }: Props) => {
  const categories = Array.from(
    new Set(allPosts.map((post) => post.categories).flat())
  ).filter((category) => category !== "Etc");
  const sortedCategories = categories.sort((a, b) => a.localeCompare(b));

  sortedCategories.unshift("All");
  sortedCategories.push("Etc");

  const onCategoryClick = (category: string) => setCurrCategory(category);

  const numOfCategoryPosts = (currCategory: string) => {
    if (currCategory === "All") return allPosts.length;
    return allPosts.filter((post) => post.categories.includes(currCategory))
      .length;
  };

  const buttons: ButtonProps[] = sortedCategories.map((category) => {
    return {
      label: (
        <div className="flex gap-1">
          <span>{category}</span>
          <span
            className={`tracking-wider ${
              currCategory === category ? "text-tabActiveNum" : "text-tabNum"
            }`}
          >
            ({numOfCategoryPosts(category)})
          </span>
        </div>
      ),
      value: category,
      isActive: currCategory === category,
      onClick: () => onCategoryClick(category),
    };
  });

  return <Buttons buttons={buttons} />;
};

export default Categories;
