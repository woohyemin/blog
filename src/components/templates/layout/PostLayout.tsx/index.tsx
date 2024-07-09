"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "@/components/atoms/data-display/Icon";

/**
 * PostLayout component props
 */
export interface PostLayoutProps {}

const PostBody = ({ children, ...props }: any) => {
  const CustomComponents: any = {
    h1({ ...props }) {
      return (
        <h2
          className="text-primary text-h4 font-medium mt-[44px] mb-2 sm:text-h3 sm:mt-20 sm:mb-6"
          {...props}
        />
      );
    },
    h2({ ...props }) {
      return (
        <h3
          className="text-primary text-h5 font-medium mt-[20px] mb-1.5 sm:text-h4 sm:mt-7 sm:mb-2"
          {...props}
        />
      );
    },
    h3({ ...props }) {
      return (
        <h4
          className="text-primary text-h6 font-medium mt-4 mb-1.5 sm:text-h5 sm:mt-5 sm:mb-1.5"
          {...props}
        />
      );
    },
    h4({ ...props }) {
      return (
        <h5
          className="text-primary text-body1 font-medium mt-5 mb-1.5 sm:text-h6"
          {...props}
        />
      );
    },
    h5({ ...props }) {
      return (
        <h6
          className="text-primary text-body1 font-medium mt-2.5 mb-1 sm:text-h6"
          {...props}
        />
      );
    },
    h6({ ...props }) {
      return (
        <p
          className="text-primary text-body1 font-medium mt-2 mb-1 sm:text-h6"
          {...props}
        />
      );
    },
    p({ ...props }) {
      return (
        <p
          className="text-secondary text-body2 mb-0.5 sm:text-body1"
          {...props}
        />
      );
    },
    ul({ ...props }) {
      return <ul className="ml-5 list-disc marker:text-bullet" {...props} />;
    },
    ol({ ...props }) {
      return <ol className="list-decimal ml-5" {...props} />;
    },
    li({ ...props }) {
      return (
        <li
          className="text-secondary text-body2 mb-1 sm:mb-1.5 sm:text-body1"
          {...props}
        />
      );
    },
    strong({ ...props }) {
      return <strong className="font-medium" {...props} />;
    },
    a({ ...props }) {
      return (
        <a
          className="inline-flex flex-row items-center underline underline-offset-2 decoration-[#b3b3b3]"
          {...props}
        >
          {props.children}
          <Icon icon="externalLink" size="sm" color="secondary" />
        </a>
      );
    },
    img({ ...props }) {
      return (
        <img
          className="w-full h-auto my-3 rounded-lg sm:my-4"
          src={props.src}
          alt={props.alt}
        />
      );
    },
    code({ ...props }) {
      const match = /language-(\w+)/.exec(props.className!);

      if (!match) {
        return (
          <code className="bg-code py-[2px] px-[4px] my-[6px] text-inherit rounded-[3px] text-caption font-medium sm: sm:px-[6px] sm:rounded-[4px] sm:text-body2">
            {props.children}
          </code>
        );
      }

      const [, language] = match;

      return (
        <SyntaxHighlighter
          style={{
            ...vscDarkPlus,
            'code[class*="language-"]': { fontSize: "13px" },
          }}
          language={language}
          customStyle={{
            borderRadius: "8px",
            margin: "16px 0",
          }}
        >
          {String(props.children)}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <div className="w-full my-0 mx-auto">
      <ReactMarkdown components={CustomComponents} remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </div>
  );
};

/**
 * PostLayout component
 */
export const PostLayout = ({ children }: any) => {
  return <PostBody>{children}</PostBody>;
};
