"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export default function Providers({ children }: ThemePropsInterface) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
