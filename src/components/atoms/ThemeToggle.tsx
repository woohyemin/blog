"use client";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ThemeFlag, currentThemeState } from "../../store/themeState";
import { Typography } from "./data-display/Typography";
import { Icon } from "./data-display/Icon";

const ToggleBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  padding: 2px;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.background.default};
  * {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  transition: all 0.5s ease-out;

  &:hover {
    transition: all 0.5s ease-out;
    // background-color: ${({ theme }) =>
      theme.palette.button.background.default};
    * {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
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
      {currentTheme === ThemeFlag.dark ? (
        <Icon icon="moon" size="medium" color="secondary" />
      ) : (
        <Icon icon="sun" size="medium" color="secondary" />
      )}
    </ToggleBox>
  );
};

export default ThemeToggle;
