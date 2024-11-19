"use client";

import Emoji from "@/components/atoms/emoji";
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
      {icon && <Emoji className="text-body2 sm:text-body1">{icon}</Emoji>}
      <div className="flex flex-col gap-0.5 sm:gap-1">
        <p className="text-primary font-medium text-body2 sm:text-body1">
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
