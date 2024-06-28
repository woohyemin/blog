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
      className="my-0 mx-auto px-4 pb-20 max-w-[720px] py-16 sm:py-24 sm:px-6"
      {...props}
    />
  );
};
