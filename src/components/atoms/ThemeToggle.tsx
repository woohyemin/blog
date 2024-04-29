"use client";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ThemeFlag, currentThemeState } from "../../store/themeState";
import { Typography } from "./data-display/Typography";

const ToggleBox = styled.button`
  display: flex;
  align-items: center;
  justify-contents: center;
  border-radius: 40px;
  padding: 8px 20px;
  width: fit-content;
  background-color: ${({ theme }) => theme.palette.button.background.default};
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
      <Typography variant="secondary" size="caption">
        {currentTheme === ThemeFlag.dark ? "Dark Mode" : "Light Mode"}
      </Typography>
    </ToggleBox>
  );
};

export default ThemeToggle;
