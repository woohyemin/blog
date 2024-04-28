"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themeStyles";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import { RecoilRoot, useRecoilState } from "recoil";
import { ThemeFlag, currentThemeState } from "@/store/themeState";

export function Registry({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useRecoilState(currentThemeState);

  useEffect(() => {
    if (localStorage.getItem("dark_mode") !== undefined) {
      const localTheme = Number(localStorage.getItem("dark_mode"));
      setCurrentTheme(localTheme);
    }
  }, [setCurrentTheme]);

  useEffect(() => {
    console.log("currentTheme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider
        theme={currentTheme === ThemeFlag.dark ? darkTheme : lightTheme}
      >
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <Registry>{children}</Registry>
    </RecoilRoot>
  );
}
