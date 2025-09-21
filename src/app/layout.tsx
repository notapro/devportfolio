import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prakhar Sethi - Principal Software Engineer - 2",
  description: "Principal Software Engineer - 2 with 9+ years at PlaySimple. Built systems serving 3M+ users, led teams delivering $100K+ daily revenue games, expert in Unity, C#, Golang, and scalable gaming infrastructure.",
  keywords: "Principal Software Engineer, Mobile Games, Unity, C#, Golang, Scalable Systems, Team Leadership, PlaySimple, Game Development, Backend Architecture",
  authors: [{ name: "Prakhar Sethi" }],
  openGraph: {
    title: "Prakhar Sethi - Principal Software Engineer - 2",
    description: "Principal Software Engineer - 2 at PlaySimple. 9+ years building scalable mobile games serving millions of users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
