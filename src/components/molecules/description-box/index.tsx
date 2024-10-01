"use client";

import React, { PropsWithChildren, ReactNode } from "react";

/**
 * DescriptionBox component props
 */
export interface DescriptionBoxProps {
  icon: string;
  title: string;
  content: ReactNode;
}

/**
 * DescriptionBox component
 */
const DescriptionBox = ({
  icon,
  title,
  content,
}: PropsWithChildren<DescriptionBoxProps>) => {
  return (
    <div className="flex bg-paper rounded-lg p-3 mt-2 mb-3 gap-2 sm:mt-3 sm:mb-5 sm:p-4 overflow-auto">
      {icon && <span className="text-body1 sm:text-h3">{icon}</span>}
      <div className="flex flex-col pt-1">
        <p className="text-primary font-medium text-caption mb-0.5 sm:text-body2">
          {title}
        </p>
        <div className="text-secondary text-caption mb-0.5 sm:text-body2">
          {content}
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
