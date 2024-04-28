import { darkTheme, lightTheme } from "@/styles/themeStyles";
import { atom } from "recoil";

export enum ThemeFlag {
  light,
  dark,
}

export const currentThemeState = atom<ThemeFlag>({
  key: "currentThemeState",
  default: ThemeFlag.light,
});

export const getCurrentTheme = (theme: ThemeFlag) =>
  theme === ThemeFlag.light ? lightTheme : darkTheme;
