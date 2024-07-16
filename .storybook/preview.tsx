import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "next-themes";
import "../src/app/globals.css";

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
  // withThemeByClassName({
  //   themes: {
  //     light: "light",
  //     dark: "dark",
  //   },
  //   defaultTheme: "light",
  // }),
  (Story) => (
    <ThemeProvider attribute="class">
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
