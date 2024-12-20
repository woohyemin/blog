"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
  useCallback,
} from "react";

type TabOffset = { [key: string]: { left: number; width: number } };

const Tabs = ({
  value,
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: ReactNode;
  value?: string;
}) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState(defaultValue);
  const [tabOffsets, setTabOffsets] = useState<TabOffset>({});

  const updateTabOffsets = useCallback(() => {
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

  useEffect(() => {
    updateTabOffsets();
  }, [updateTabOffsets]);

  useEffect(() => {
    if (value) setSelectedTab(value);
  }, [value]);

  useEffect(() => {
    const handleResize = () => updateTabOffsets();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateTabOffsets]);

  return (
    <RadixTabs.Root
      ref={tabRef}
      value={value}
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
                className="absolute bottom-[-1px] h-0.5 bg-btnActiveBg rounded-sm transition-all duration-300 ease-in-out"
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
  return (
    <RadixTabs.List className="relative flex gap-4 sm:gap-5 mb-6 sm:mb-8">
      {children}
    </RadixTabs.List>
  );
};

const TabsTrigger = ({
  value,
  children,
  onClick,
}: {
  value: string;
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <RadixTabs.Trigger
      value={value}
      className="text-disabled py-0.5 text-h4 data-[state=active]:text-primary data-[state=active]:font-medium"
      onClick={onClick}
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
