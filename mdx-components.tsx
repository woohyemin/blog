import type { MDXComponents } from "mdx/types";
import { Icon } from "@/components/atoms/data-display/Icon";
import { CodeBlock } from "@/components/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
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
          className="text-primary text-h5 font-medium mt-[20px] mb-1.5 sm:text-h4 sm:mt-7 sm:mb-2 first:mt-0"
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
      const content = String(props.children).split("///");
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
      return <strong className="font-medium text-primary" {...props} />;
    },
    del({ ...props }) {
      return <del className="text-del decoration-[0.8px]" {...props} />;
    },
    a({ ...props }) {
      return (
        <a
          className="text-primary font-regular inline-flex flex-row items-center underline underline-offset-[3px] decoration-[0.8px] decoration-underline"
          target="_blank"
          {...props}
        >
          {props.children}
          <Icon icon="externalLink" size="sm" color="secondary" />
        </a>
      );
    },
    img({ ...props }) {
      return (
        <div className="flex w-full h-auto my-3 sm:my-4 justify-center items-center">
          <img className="rounded-lg" src={props.src} alt={props.alt} />
        </div>
      );
    },
    code({ ...props }) {
      return <CodeBlock {...props} />;
    },
    ...components,
  };
}