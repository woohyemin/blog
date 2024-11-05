"use client";

import Skeleton from "@/components/atoms/skeleton";
import TemplateLayout from "@/components/templates/layout/template-layout";
import Header from "@/components/organisms/header";

/**
 * PostSkeleton component
 */
const PostSkeleton = () => {
  return (
    <TemplateLayout>
      <Header
        title={<Skeleton className="w-[480px] h-8" />}
        content={
          <div className="flex flex-col gap-1">
            <Skeleton className="w-60 h-6" />
            <div className="flex flex-wrap gap-1 pt-2.5 pb-1.5 sm:py-3.5 sm:pb-2.5 sm:gap-1.5">
              <Skeleton className="w-16 h-6" />
              <Skeleton className="w-16 h-6" />
              <Skeleton className="w-16 h-6" />
            </div>
          </div>
        }
      />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-80 mb-12" />
        <Skeleton className="h-5" />
        <Skeleton className="w-[500px] h-5" />
      </div>
    </TemplateLayout>
  );
};

export default PostSkeleton;
