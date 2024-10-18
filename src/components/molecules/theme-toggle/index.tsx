"use client";

import Icon from "../../atoms/icon";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        aria-label="theme button"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="hover:*:text-primary"
      >
        {theme === "dark" ? (
          <Icon icon="moon" size="md" color="secondary" />
        ) : (
          <Icon icon="sun" size="md" color="secondary" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
