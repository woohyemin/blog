import type { Metadata } from "next";
import Providers from "@/styles/Providers";
import "./globals.css";
import { noto_sans_kr } from "./fonts";
import { Footer } from "@/components/organisms/Footer";

const metadata: Metadata = {
  title: "Hem Lab Blog",
  description: "hem lab에 오신 걸 환영합니다!",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${noto_sans_kr.className}`}>
      <body className="transition duration-300 bg-background min-h-screen">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
