"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "@/components/atoms/data-display/Icon";
import { useTheme } from "next-themes";

/**
 * PostLayout component props
 */
export interface PostLayoutProps {}

const PostBody = ({ children, ...props }: any) => {
  const { theme } = useTheme();

  const CustomComponents: any = {
    h1({ ...props }) {
      return (
        <div className="mt-12 mb-5 sm:mt-20 sm:mb-6 first:mt-0">
          <h2
            className="inline text-primary text-h4 font-medium pb-0.5 pr-3 shadow-highlight sm:text-h3"
            {...props}
          />
        </div>
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
      const content = props.children.split("///");
      const body = content.pop();
      const title = content.pop();
      const icon = content.pop();

      return (
        <div className="flex bg-paper rounded-lg p-3 mt-2 mb-3 gap-2 sm:mt-3 sm:mb-5 sm:p-4">
          {icon && <span className="text-body1 sm:text-h3">{icon}</span>}
          <div className="flex flex-col pt-1">
            <p className="text-primary font-medium text-caption mb-0.5 sm:text-body2">
              {title}
            </p>
            <p className="text-secondary text-caption mb-0.5 sm:text-body2">
              {body}
            </p>
          </div>
        </div>
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
      return <strong className="font-regular text-primary" {...props} />;
    },
    del({ ...props }) {
      return <del className="text-del decoration-[0.8px]" {...props} />;
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
          className="max-w-full h-auto my-3 rounded-lg sm:my-4"
          src={props.src}
          alt={props.alt}
        />
      );
    },
    code({ ...props }) {
      const match = /language-(\w+)/.exec(props.className!);

      if (!match) {
        return (
          <code className="bg-code py-[2px] px-[4px] my-[6px] rounded-[3px] text-caption text-red sm: sm:px-[6px] sm:rounded-[4px] sm:text-body2">
            {props.children}
          </code>
        );
      }

      const [, language] = match;

      return (
        <SyntaxHighlighter
          style={{
            ...(theme === "dark" ? oneDark : oneLight),
            'code[class*="language-"]': { fontSize: "13px" },
          }}
          language={language}
          customStyle={{
            borderRadius: "8px",
            margin: "16px 0",
            backgroundColor: "var(--paper-background)",
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
