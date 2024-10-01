"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

const Comments = () => {
  const ref = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const dataTheme = theme === "dark" ? "noborder_gray" : "noborder_light";

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://giscus.app/client.js";
    scriptElement.async = true;
    scriptElement.crossOrigin = "anonymous";

    scriptElement.setAttribute("data-repo", "woohyemin/blog");
    scriptElement.setAttribute("data-repo-id", "R_kgDOLyuNag");
    scriptElement.setAttribute("data-category", "Comments");
    scriptElement.setAttribute("data-category-id", "DIC_kwDOLyuNas4CiHOi");
    scriptElement.setAttribute("data-mapping", "pathname");
    scriptElement.setAttribute("data-strict", "0");
    scriptElement.setAttribute("data-reactions-enabled", "1");
    scriptElement.setAttribute("data-emit-metadata", "0");
    scriptElement.setAttribute("data-input-position", "bottom");
    scriptElement.setAttribute("data-theme", dataTheme);
    scriptElement.setAttribute("data-lang", "ko");

    ref.current.appendChild(scriptElement);
  }, [dataTheme]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: dataTheme } } },
      "https://giscus.app"
    );
  }, [dataTheme]);

  return <section className="pt-8 sm:pt-16" ref={ref} />;
};

export default Comments;
