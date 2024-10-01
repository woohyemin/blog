import { HTMLAttributes, ReactNode } from "react";

export type ButtonSize = "sm" | "md";

const sizes: { [key in ButtonSize]: string } = {
  sm: "text-h6 py-1 mb-px h-6 sm:h-7 sm:text-h6 px-2.5 sm:px-3 gap-0.5 sm:gap-1",
  md: "text-h6 py-1 mb-px h-7 sm:h-8 sm:text-h5 px-3 sm:px-3.5 gap-0.5 sm:gap-1",
};

/**
 * Button component props
 */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string | ReactNode;
  value: string;
  isActive?: boolean;
  size?: ButtonSize;
}

/**
 * Button component
 */
const Button = ({
  label,
  value,
  isActive = false,
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`transition-[background-color] flex min-w-fit items-center rounded-full ${
        sizes[size]
      } ${
        isActive ? "bg-btnActiveBg text-btnActiveText" : "bg-btnBg text-btnText"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
