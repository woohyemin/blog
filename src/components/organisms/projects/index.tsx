"use client";

import React, { useState } from "react";
import Link from "next/link";
import Chip from "@/components/atoms/chip";
import Image from "next/image";
import { Post } from "@/api/posts";

/**
 * Projects component props
 */
export interface ProjectsProps {
  projects: Post[];
}

/**
 * Projects component
 */
const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {projects.length > 0 ? (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {projects.map((el) => (
            <Link
              key={el.path}
              href={`/posts/project/${el.path}`}
              className="w-full sm:w-[calc(50%-8px)] flex flex-row justify-between gap-8 border border-divider rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col w-full overflow-hidden">
                {el.thumbnail && (
                  <Image
                    className="w-full h-[200px] object-cover inline"
                    src={`/images/posts/${el.thumbnail}`}
                    alt={`${el.title} 섬네일`}
                    width={300}
                    height={315}
                  />
                )}

                <div className="flex flex-col flex-1 px-5 sm:px-6 pb-6 sm:pb-7 pt-3 sm:pt-4 justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-h4 text-primary font-medium overflow-hidden whitespace-nowrap text-ellipsis sm:text-h3">
                      {el.title}
                    </h3>
                    <p className="text-body2 text-secondary pt-0.5 sm:pt-1 overflow-hidden whitespace-nowrap text-ellipsis sm:text-body1">
                      {el.description}
                    </p>

                    <div className="flex gap-1 mt-2 sm:mt-3 sm:gap-1.5 flex-wrap">
                      {el.tags?.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-1 justify-between mt-4 sm:mt-5">
                    {/* <p className="text-caption sm:text-body2 text-disabled">
                    {el.date}
                  </p> */}
                    {el.completed ? (
                      <Chip color="primary" round>
                        개발 완료
                      </Chip>
                    ) : (
                      <Chip variant="outlined" color="primary" round>
                        개발 중
                      </Chip>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="pt-4 text-body2 text-disabled">
          등록된 프로젝트가 없어요.
        </p>
      )}
    </div>
  );
};

export default Projects;
