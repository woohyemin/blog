"use client";

import Icon from "../../atoms/icon";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(
      theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex gap-2 items-center p-2 rounded-lg *:transition-all *:duration-500 *:hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-divider">
            <Icon
              className={`${
                isDark ? "rotate-180 scale-0" : "rotate-0 scale-100"
              }`}
              icon="sun"
              color="secondary"
            />

            <Icon
              className={`absolute ${
                isDark ? "-rotate-0 scale-100" : "-rotate-180 scale-0"
              }`}
              icon="moon"
              color="secondary"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuRadioGroup
            value={theme}
            onValueChange={(theme) => setTheme(theme)}
          >
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ThemeToggle;
