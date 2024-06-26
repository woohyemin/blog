"use client";

import { Icon } from "./data-display/Icon";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? (
          <Icon icon="sun" size="md" color="secondary" />
        ) : (
          <Icon icon="moon" size="md" color="secondary" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
