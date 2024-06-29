"use client";

import React, { ReactNode, useState } from "react";

type TabProps = {
  label: string | ReactNode;
  children: React.ReactNode;
};

type TabsProps = {
  children: React.ReactElement<TabProps>[];
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="flex gap-3">
        {children.map((child, index) => (
          <button
            key={index}
            className={`py-1.5 px-4 -mb-px rounded-full text-h5 ${
              index === activeIndex
                ? "bg-tabActiveBg text-tabActiveText"
                : "bg-tabBg text-tabText"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {children.map((child, index) => (
          <div
            key={index}
            className={index === activeIndex ? "block" : "hidden"}
          >
            {child.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export { Tabs, Tab };
