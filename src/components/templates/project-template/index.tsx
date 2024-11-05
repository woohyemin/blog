"use client";

import React, { useEffect } from "react";
import { notFound, usePathname } from "next/navigation";
import Dot from "@/components/atoms/dot";
import ByHem from "@/components/molecules/by-hem";
import Comments from "@/components/organisms/comments";
import Header from "@/components/organisms/header";
import TemplateLayout from "@/components/templates/layout/template-layout";
import Image from "next/image";
import MDXTemplate from "@/components/templates/mdx-template";
import Chip from "@/components/atoms/chip";
import Link from "next/link";
import { Post } from "@/api/posts";

/**
 * ProjectTemplate component props
 */
export interface ProjectTemplateProps {
  project: Post | "not-found";
}

/**
 * ProjectTemplate component
 */
const ProjectTemplate = ({ project }: ProjectTemplateProps) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (project === "not-found") {
    notFound();
  }

  if (project) {
    return (
      <TemplateLayout>
        <Header
          title={
            <h1 className="text-primary text-h3 font-medium inline sm:text-h2">
              {project.title}
            </h1>
          }
          content={
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center h-6">
                <span className="text-secondary text-caption sm:text-body2">
                  {project.date}
                </span>
                <Dot />
                <ByHem variant="posts" />
              </div>
              <div className="flex flex-wrap gap-1 pt-2.5 pb-1.5 sm:py-3.5 sm:pb-2.5 sm:gap-1.5">
                {project.tags?.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          }
        />

        {project.thumbnail && (
          <Image
            className="w-full rounded-xl object-cover mb-4 sm:mb-12"
            src={`/images/posts/${project.thumbnail}`}
            alt={`${project.title} 섬네일`}
            width={1080}
            height={640}
          />
        )}

        {project.url && (
          <div className="flex items-center gap-3 mb-6 sm:mb-8 text-h5 sm:text-h4">
            <span>🔗</span>
            <Link
              className="text-secondary text-h5 sm:text-h4 underline"
              href={project.url}
              target="_blank"
            >
              {project.url}
            </Link>
          </div>
        )}

        <MDXTemplate {...project.source} />

        <Comments />
      </TemplateLayout>
    );
  }
};

export default ProjectTemplate;
