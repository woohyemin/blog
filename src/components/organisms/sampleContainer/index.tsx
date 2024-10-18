"use client";

import React, { PropsWithChildren } from "react";

/**
 * SampleContainer component props
 */
export interface SampleContainerProps {
  className?: string;
  caption?: string;
}

/**
 * SampleContainer component
 */
const SampleContainer = ({
  className,
  caption,
  ...props
}: PropsWithChildren<SampleContainerProps>) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`flex justify-center items-center my-0 mx-auto p-8 w-full h-[200px] sm:h-[320px] border border-divider rounded-xl ${className}`}
        {...props}
      />
      {caption && (
        <caption className="text-h5 sm:text-h4 text-disabled">
          {caption}
        </caption>
      )}
    </div>
  );
};

export default SampleContainer;
