import { Montserrat, Noto_Color_Emoji } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const notoColorEmoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  variable: "--font-noto-color-emoji",
  weight: "400",
});
