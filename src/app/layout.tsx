import type { Metadata } from "next";
import Providers from "@/styles/Providers";
import "./globals.css";
import { Footer } from "@/components/organisms/Footer";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

export const metadata: Metadata = {
  title: "hem's blog",
  description: "I'm a front-end developer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="font-Pretendard">
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
