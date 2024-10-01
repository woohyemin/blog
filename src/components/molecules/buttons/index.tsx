"use client";

import Button, { ButtonProps, ButtonSize } from "@/components/atoms/button";
import React, { HTMLAttributes } from "react";

export interface ButtonsProps extends HTMLAttributes<HTMLDivElement> {
  buttons: ButtonProps[];
  size?: ButtonSize;
}

export const Buttons: React.FC<ButtonsProps> = ({ buttons, size }) => {
  return (
    <div className="flex gap-2 max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
      {buttons.map((button) => (
        <Button key={button.value} {...button} size={size} />
      ))}
    </div>
  );
};
