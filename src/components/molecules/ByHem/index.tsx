"use client";

import React from "react";
import Link from "next/link";

interface ByHemProps {
  variant?: "default" | "posts";
}

/**
 * ByHem component
 */
export const ByHem = ({ variant = "default" }: ByHemProps) => {
  return (
    <div className="flex gap-1 text-caption items-baseline sm:text-body2">
      <span className="text-disabled pb-[1px] h-[20px]">by</span>
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
