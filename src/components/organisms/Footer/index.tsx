import { montserrat } from "@/app/fonts";
import React from "react";

/**
 * Footer component
 */
export const Footer = () => {
  return (
    <div className="w-full my-0 mx-auto px-4 max-w-[720px] pt-4 pb-14 sm:pt-20 sm:pb-20 sm:px-6">
      <span
        className={`${montserrat.className} text-caption text-disabled sm:text-body2`}
      >
        ⓒ Hyemin Woo. All rights reserved.
      </span>
    </div>
  );
};
