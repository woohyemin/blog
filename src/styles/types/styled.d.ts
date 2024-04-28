import "styled-components";
import { ThemeStyleType } from "./ThemeStyleType";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeStyleType {}
}
