import React from "react";

/**
 * Caption component props
 */
interface CaptionProps {
  content: string;
}

/**
 * Caption component
 */
const Caption = ({ content }: CaptionProps) => (
  <p className="text-caption sm:text-body2 text-disabled text-center -mt-1 mb-4 sm:mb-6">
    {content}
  </p>
);

export default Caption;
