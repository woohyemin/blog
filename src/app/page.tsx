"use client";

import { Tab } from "@/components/atoms/Tab";
import styled, { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  console.log(theme);

  const Container = styled.div`
    background-color: ${({ theme }) =>
      theme.palette?.button?.background?.default};
    color: blue;
    padding: 8px;
  `;

  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <p>Get started by editing&nbsp;</p>
        <Container>테스트</Container>
        <Tab label="탭 버튼" size="large" />
      </div>
    </main>
  );
}
