"use client";

import ThemeToggle from "@/components/molecules/theme-toggle";
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
   * Header content
   */
  content: ReactNode;
}

/**
 * Header component
 */
const Header = ({ title, content }: HeaderProps) => {
  return (
    <header className="flex sticky top-0 z-50 flex-col">
      <div className="flex flex-col bg-background pt-5 sm:pt-6 pb-2 sm:pb-3 gap-1 sm:gap-1.5">
        <div className="flex gap-4 items-center justify-between">
          {title}
          <ThemeToggle />
        </div>
        {content}
      </div>
      <div className="h-8 header-gradient" />
    </header>
  );
};

export default Header;
