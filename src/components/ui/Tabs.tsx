"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import React, { useEffect, useRef, useState, ReactNode } from "react";

type TabOffset = { [key: string]: { left: number; width: number } };

const Tabs = ({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: ReactNode;
}) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  const [tabOffsets, setTabOffsets] = useState<TabOffset>({});

  useEffect(() => {
    if (tabRef.current) {
      const childrenArray = Array.from(
        tabRef.current.querySelectorAll("[role='tablist'] > button")
      ) as HTMLElement[];

      const offsets = childrenArray.reduce<TabOffset>((acc, child) => {
        const id = child.getAttribute("id");
        if (id) {
          const idArr = id.split("-");
          const value = idArr[idArr.length - 1];
          if (value) {
            acc[value] = {
              left: child.offsetLeft,
              width: child.offsetWidth,
            };
          }
        }
        return acc;
      }, {});

      setTabOffsets(offsets);
    }
  }, []);

  return (
    <RadixTabs.Root
      ref={tabRef}
      defaultValue={defaultValue}
      onValueChange={setSelectedTab}
    >
      {React.Children.map(children, (child, index) => {
        if (index === 0 && React.isValidElement(child)) {
          return (
            <TabsList>
              {child.props.children}
              <div
                style={{
                  left: tabOffsets[selectedTab]?.left,
                  width: tabOffsets[selectedTab]?.width,
                }}
                className="absolute bottom-0 h-0.5 bg-tabActiveBg rounded-sm transition-all duration-300 ease-in-out"
              />
            </TabsList>
          );
        }
        return child;
      })}
    </RadixTabs.Root>
  );
};

const TabsList = ({ children }: { children: ReactNode }) => {
  return <RadixTabs.List className="relative">{children}</RadixTabs.List>;
};

const TabsTrigger = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  return (
    <RadixTabs.Trigger
      value={value}
      className="text-disabled px-3 py-1 text-h4 data-[state=active]:text-primary"
    >
      {children}
    </RadixTabs.Trigger>
  );
};

const TabsContent = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  return <RadixTabs.Content value={value}>{children}</RadixTabs.Content>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
