"use client";

import { Typography } from "@/components/atoms/data-display/Typography";
import {
  Column,
  ColumnProps,
} from "@/components/molecules/layout/FlexBox/Column";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled, { useTheme } from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

/**
 * PostLayout component props
 */
export interface PostLayoutProps extends ColumnProps {
  size?: "small" | "medium" | "large";
}

const Layout = styled(Column)<PostLayoutProps>`
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 144px);
`;

const StyledUl = styled.ul`
  list-style: initial;
  margin-left: 16px;

  ::marker {
    color: ${({ theme }) => theme.palette.dot.basic};
  }

 
  }
`;

const StyledStrong = styled.strong`
  font-weight: 600;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  margin: 6px 0;
  border-radius: 8px;
`;

const PostBody = ({ children, ...props }: any) => {
  const theme = useTheme();

  const CustomComponents: any = {
    h1({ ...props }) {
      return (
        <Typography
          $size="h3"
          $component="h2"
          $weight="medium"
          $mt="20px"
          $mb="2px"
          {...props}
        />
      );
    },
    h2({ ...props }) {
      return (
        <Typography
          $size="h4"
          $component="h3"
          $weight="medium"
          $mt="10px"
          $mb="2px"
          {...props}
        />
      );
    },
    h3({ ...props }) {
      return (
        <Typography
          $size="h5"
          $component="h4"
          $weight="medium"
          $mt="8px"
          $mb="2px"
          {...props}
        />
      );
    },
    h4({ ...props }) {
      return (
        <Typography
          $size="h6"
          $component="h5"
          $weight="medium"
          $mt="4px"
          $mb="2px"
          {...props}
        />
      );
    },
    h5({ ...props }) {
      return (
        <Typography
          $size="body1"
          $component="h6"
          $weight="medium"
          $mt="3px"
          $mb="2px"
          {...props}
        />
      );
    },
    h6({ ...props }) {
      return (
        <Typography
          $size="body1"
          $component="p"
          $mt="3px"
          $mb="2px"
          {...props}
        />
      );
    },
    p({ ...props }) {
      return (
        <Typography
          $size="body1"
          $component="p"
          $color="secondary"
          {...props}
        />
      );
    },
    ul({ ...props }) {
      return <StyledUl {...props} />;
    },
    ol({ ...props }) {
      return (
        <ul style={{ listStyle: "decimal", marginLeft: "16px" }} {...props} />
      );
    },
    li({ ...props }) {
      return (
        <Typography
          $size="body1"
          $component="li"
          $color="secondary"
          {...props}
        />
      );
    },
    strong({ ...props }) {
      return <StyledStrong {...props} />;
    },
    img({ ...props }) {
      return <StyledImage src={props.src} alt={props.alt} />;
    },
    code({ ...props }) {
      const match = /language-(\w+)/.exec(props.className!);

      if (!match) {
        return (
          <code
            style={{
              padding: "1px 6px",
              margin: "6px 0",
              color: "inherit",
              backgroundColor: theme.palette.background.paper,
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {props.children}
          </code>
        );
      }

      const [, language] = match;

      console.log("vscDarkPlus");
      console.log(vscDarkPlus);

      return (
        <SyntaxHighlighter
          style={{
            ...vscDarkPlus,
            'code[class*="language-"]': { fontSize: "12px" },
          }}
          language={language}
          customStyle={{
            borderRadius: "8px",
            margin: "6px 0",
          }}
        >
          {String(props.children)}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <Layout>
      <ReactMarkdown components={CustomComponents} remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </Layout>
  );
};

/**
 * PostLayout component
 */
export const PostLayout = ({ children }: any) => {
  return <PostBody>{children}</PostBody>;
};
