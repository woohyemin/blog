"use client";

import ThemeToggle from "@/components/atoms/ThemeToggle";
import React, { ReactNode } from "react";

/**
 * header component props
 */
interface HeaderProps {
  /**
   * header title
   */
  title: ReactNode;

  /**
   * header content
   */
  content: ReactNode;
}

/**
 * header component
 */
export const Header = ({ title, content }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-1 pb-5 sm:pb-6 sm:gap-2">
      <div className="flex gap-4 items-center justify-between">
        {title}
        <ThemeToggle />
      </div>
      {content}
    </div>
  );
};
