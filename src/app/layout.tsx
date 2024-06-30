import type { Metadata } from "next";
import Providers from "@/styles/Providers";
import "./globals.css";
import { noto_sans_kr } from "./fonts";
import { Footer } from "@/components/organisms/Footer";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

const metadata: Metadata = {
  title: "Hyemin's blog",
  description: "우혜민의 블로그에 오신 걸 환영합니다!",
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
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
