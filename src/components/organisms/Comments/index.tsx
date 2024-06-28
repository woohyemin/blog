"use client";

import { useTheme } from "next-themes";
import React from "react";

export const Comments = () => {
  const { theme } = useTheme();

  return (
    <section
      ref={(elem) => {
        if (!elem) return;
        const scriptElement = document.createElement("script");
        scriptElement.src = "https://utteranc.es/client.js";
        scriptElement.async = true;
        scriptElement.setAttribute("repo", "woohyemin/blog");
        scriptElement.setAttribute("issue-term", "title");

        if (theme === "dark") {
          scriptElement.setAttribute("theme", "github-dark");
        } else {
          scriptElement.setAttribute("theme", "github-light");
        }

        scriptElement.setAttribute("label", "blog-comment");
        scriptElement.setAttribute("crossorigin", "anonymous");
        elem.appendChild(scriptElement);
      }}
    />
  );
};

export default Comments;
