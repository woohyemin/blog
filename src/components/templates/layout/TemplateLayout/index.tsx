"use client";

import React, { PropsWithChildren } from "react";

/**
 * TemplateLayout component props
 */
export interface TemplateLayoutProps {
  className?: string;
}

/**
 * TemplateLayout component
 */
export const TemplateLayout = ({
  ...props
}: PropsWithChildren<TemplateLayoutProps>) => {
  return (
    <div
      className="my-0 mx-auto px-6 pb-20 min-h-[100vh] max-w-[640px] py-5 sm:py-10"
      {...props}
    />
  );
};
