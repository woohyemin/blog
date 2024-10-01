"use client";

import { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import Icon from "@/components/atoms/icon";
import CodeBlock from "@/components/molecules/code-block";
import DescriptionBox from "@/components/molecules/description-box";

const components: MDXComponents = {
  h1: (props) => (
    <div className="mt-12 mb-5 sm:mt-20 sm:mb-6 first:mt-0">
      <h2
        className="inline text-primary text-h4 font-medium pb-0.5 pr-3 shadow-highlight sm:text-h3"
        {...props}
      />
    </div>
  ),
  h2: (props) => (
    <h3
      className="text-primary text-h5 font-medium mt-[20px] mb-1.5 sm:text-h4 sm:mt-7 sm:mb-2 first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h4
      className="text-primary text-h6 font-medium mt-4 mb-1.5 sm:text-h5 sm:mt-5 sm:mb-1.5"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-secondary text-body2 mb-0.5 sm:text-body1" {...props} />
  ),
  ul: (props) => (
    <ul className="ml-5 list-disc marker:text-bullet" {...props} />
  ),
  ol: (props) => <ol className="list-decimal ml-5" {...props} />,
  li: (props) => (
    <li
      className="text-secondary text-body2 mb-1 sm:mb-1.5 sm:text-body1"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-medium text-primary" {...props} />,
  del: (props) => <del className="text-del decoration-[0.8px]" {...props} />,
  a: (props) => (
    <a
      className="text-primary font-regular inline-flex flex-row items-center underline underline-offset-[3px] decoration-[0.8px] decoration-underline"
      target="_blank"
      {...props}
    >
      {props.children}
      <Icon icon="externalLink" size="sm" color="secondary" />
    </a>
  ),
  img: (props) => (
    <div className="flex w-full h-auto my-3 sm:my-4 justify-center items-center">
      <img className="rounded-lg" src={props.src} alt={props.alt} />
    </div>
  ),
  code: (props) => <CodeBlock {...props} />,
  DescriptionBox,
};

/**
 * MDXTemplate component
 */
const MDXTemplate = ({ ...props }: MDXRemoteSerializeResult) => {
  return (
    <div>
      <MDXRemote {...props} components={components} />
    </div>
  );
};

export default MDXTemplate;
