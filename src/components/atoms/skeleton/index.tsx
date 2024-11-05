import React from "react";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  className = "",
}) => {
  return (
    <div
      className={`animate-pulse bg-divider rounded-md min-h-4 ${className}`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
