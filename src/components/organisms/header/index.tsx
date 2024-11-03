"use client";

import ThemeToggle from "@/components/molecules/theme-toggle";
import React, { ReactNode, useEffect, useState } from "react";

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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      if (scrollY > 360 && scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`flex sticky top-0 z-50 flex-col transition-transform duration-700 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col bg-background pt-5 sm:pt-6 pb-2 sm:pb-3 gap-1 sm:gap-1.5">
        <div className="flex gap-4 items-center justify-between">
          {title}
          <ThemeToggle />
        </div>
        {content}
      </div>
      <div className="h-6 header-gradient" />
    </header>
  );
};

export default Header;
