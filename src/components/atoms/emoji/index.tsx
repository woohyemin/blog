import { cn } from "@/util/cn";
import { PropsWithChildren } from "react";

interface EmojiProps {
  className?: string;
}

/**
 * Emoji component
 */
const Emoji = ({ className, children }: PropsWithChildren<EmojiProps>) => {
  return <span className={cn("emoji", className)}>{children}</span>;
};

export default Emoji;
