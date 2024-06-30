import { montserrat } from "@/app/fonts";
import React from "react";

/**
 * Footer component
 */
export const Footer = () => {
  return (
    <footer className="w-full my-0 mx-auto px-4 max-w-[720px] pt-4 pb-8 h-20 sm:px-6 sm:pb-12 sm:h-24">
      <span className={`${montserrat.className} text-caption text-disabled`}>
        ⓒ hem. All rights reserved.
      </span>
    </footer>
  );
};
