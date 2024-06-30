"use client";

import React from "react";
import Link from "next/link";

interface ByHyeminProps {
  variant?: "default" | "posts";
}

/**
 * ByHyemin component
 */
export const ByHyemin = ({ variant = "default" }: ByHyeminProps) => {
  return (
    <div className="flex gap-1 pb-1 items-end text-caption sm:text-body2">
      <span className="text-disabled pb-[1px]">by</span>
      {variant === "default" && (
        <Link
          className="underline decoration-underlineSecondary decoration-1 underline-offset-2"
          href="/"
        >
          <span className="text-secondary">hem</span>
        </Link>
      )}
      {variant === "posts" && (
        <Link
          className="underline decoration-underlineSecondary decoration-1 underline-offset-2"
          href="/posts"
        >
          <span className="text-secondary">hem's posts</span>
        </Link>
      )}
    </div>
  );
};
