"use client";

import styled from "styled-components";
import ThemeButton from "../atoms/ThemeButton";
import { useRecoilState } from "recoil";
import { ThemeFlag, currentThemeState } from "../../store/themeState";
import { useEffect } from "react";

const ToggleBox = styled.button`
  display: flex;
  align-items: center;
  justify-contents: center;
  border-radius: 40px;
  padding: 8px 20px;
  width: fit-content;
`;

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(currentThemeState);

  function changeThemeHandler() {
    if (currentTheme === ThemeFlag.dark) {
      setCurrentTheme(ThemeFlag.light);
      localStorage.setItem("dark_mode", String(ThemeFlag.light));
    } else {
      setCurrentTheme(ThemeFlag.dark);
      localStorage.setItem("dark_mode", String(ThemeFlag.dark));
    }
  }

  return (
    <ToggleBox onClick={changeThemeHandler}>
      {currentTheme === ThemeFlag.dark ? "Dark Mode" : "Light Mode"}
      {/* <ThemeButton currentTheme={currentTheme} /> */}
    </ToggleBox>
  );
};

export default ThemeToggle;
