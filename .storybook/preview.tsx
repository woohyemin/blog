import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import GlobalStyles from "../src/styles/GlobalStyles";
import { darkTheme, lightTheme } from "../src/styles/themeStyles";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import React from "react";

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
    GlobalStyles,
  }),
  (Story) => (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  ),
];

export default preview;
