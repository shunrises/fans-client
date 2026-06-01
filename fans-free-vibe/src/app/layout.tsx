import type { Metadata, Viewport } from "next";
import { BottomNavAuto } from "@/components/bottom-nav-auto";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "2026-1 홍익대학교 컴퓨터공학과 소프트웨어공학 과제 - 프로세스 없는 바이브 코딩 진행 버전",
  description:
    "2026-1 홍익대학교 컴퓨터공학과 소프트웨어공학 과제 - 프로세스 없는 바이브 코딩 진행 버전",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-jp-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <BottomNavAuto />
      </body>
    </html>
  );
}
