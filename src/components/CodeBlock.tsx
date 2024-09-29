"use client";

import { useTheme } from "next-themes";
import React, { PropsWithChildren } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

/**
 * CodeBlock component props
 */
export interface CodeBlockProps {
  className?: string;
}

/**
 * CodeBlock component
 */
export const CodeBlock = ({
  className,
  ...props
}: PropsWithChildren<CodeBlockProps>) => {
  const { theme } = useTheme();
  const match = /language-(\w+)/.exec(className ?? "");

  if (!match) {
    return (
      <code className="text-primary text-caption sm:text-body2">
        `{props.children}`
      </code>
    );
  }

  const language = match[1];

  return (
    <div className="text-caption sm:text-body2">
      {language === "markdown" ? (
        <div className="pt-4 px-3 pb-3 my-4 rounded-lg bg-paper">
          <ReactMarkdown>{String(props.children)}</ReactMarkdown>
        </div>
      ) : (
        <SyntaxHighlighter
          style={{
            ...(theme === "dark" ? oneDark : oneLight),
            'code[class*="language-"]': { background: "transparent" },
          }}
          language={language}
          customStyle={{
            borderRadius: "8px",
            margin: "16px 0",
            background: "var(--paper-background)",
          }}
        >
          {String(props.children)}
        </SyntaxHighlighter>
      )}
    </div>
  );
};