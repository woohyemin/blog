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
    <header className="flex flex-col gap-1 pb-5 sm:pb-6 sm:gap-1.5">
      <div className="flex gap-4 items-center justify-between">
        {title}
        <ThemeToggle />
      </div>
      {content}
    </header>
  );
};

export default Header;
