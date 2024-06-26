import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { darkTheme, lightTheme } from "../src/styles/themeStyles";
import { RecoilRoot } from "recoil";
import React from "react";
import { ThemeProvider } from "next-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
  }),
  (Story) => (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  ),
];

export default preview;
