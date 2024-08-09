"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

export const Comments = () => {
  const ref = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const makeComments = () => {
    if (ref.current) {
      const script = document.createElement("script");

      script.src = "https://utteranc.es/client.js";
      script.async = false;
      script.setAttribute("repo", "woohyemin/blog");
      script.setAttribute("issue-term", "pathname");

      if (theme === "dark") {
        script.setAttribute("theme", "photon-dark");
      } else {
        script.setAttribute("theme", "github-light");
      }
      script.setAttribute("label", "blog-comment");
      ref.current.appendChild(script);
    }
  };

  const removeComments = () => {
    if (ref.current) {
      const existingScript = ref.current.querySelector(".utterances");
      if (existingScript) {
        existingScript.remove();
      }
    }
  };

  useEffect(() => {
    makeComments();
    removeComments();
  }, [theme]);

  return <section className="pt-8 sm:pt-16" ref={ref} />;
};

export default Comments;
