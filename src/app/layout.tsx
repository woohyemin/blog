import type { Metadata } from "next";
import Providers from "@/styles/Providers";
import "./globals.css";
import Footer from "@/components/organisms/footer";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import { montserrat, notoColorEmoji } from "./fonts";
import ReactQueryProvider from "@/providers/react-query-provider";

export const metadata: Metadata = {
  title: "hem's blog",
  description: "I'm a front-end developer.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "프론트엔드 개발",
    "웹 개발 블로그",
    "우혜민",
    "woohyemin",
    "hyemin woo",
    "hyemin",
    "Tailwind CSS",
    "React Query",
    "Front End",
    "frontend",
    "developer",
    "engineer",
  ],
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
    <html
      lang="ko"
      className={`font-pretendard ${montserrat.variable} ${notoColorEmoji.variable} font-light selection:bg-highlight`}
    >
      <body className="bg-background min-h-screen">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Providers>
          <ReactQueryProvider>
            {children}
            <Footer />
          </ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}
