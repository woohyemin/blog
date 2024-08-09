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
      className="my-0 mx-auto px-4 py-16 max-w-[760px] min-h-[calc(100vh-96px)] sm:py-24 sm:px-6 animate-fade-up"
      {...props}
    />
  );
};
