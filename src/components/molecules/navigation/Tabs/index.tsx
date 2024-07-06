"use client";

import Tab, { TabProps } from "@/components/atoms/navigation/Tab";
import React, { HTMLAttributes } from "react";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: TabProps[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <div className="flex gap-2 max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
      {tabs.map((tab) => (
        <Tab key={tab.value} {...tab} />
      ))}
    </div>
  );
};
