"use client";

import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html, body { 
    // width: 100%;
    // height: 100%;
    // // min-width: 1200px;
    // font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI;
    // font-size : 16px;
    color: ${(props) => props.theme.palette.text.primary};
    background-color: ${(props) => props.theme.palette.background.default};

    transition: all 0.5s;
    a {
        color: ${(props) => props.theme.palette.text.primary};
    }
  }

  ul, ol {
    list-style: none;
  } 

  button {
    all: unset;
    cursor: pointer;
  }
  
`;

export default GlobalStyles;
