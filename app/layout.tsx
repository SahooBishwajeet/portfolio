import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bishwajeet's Portfolio",
  description: "Welcome to VoiD's portfolio",
  openGraph: {
    title: "Bishwajeet's Portfolio",
    description: "Welcome to VoiD's portfolio",
    url: "https://sahoobishwajeet.xyz",
    siteName: "Bishwajeet's Portfolio",
    images: [
      {
        url: "https://sahoobishwajeet.xyz/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Preview of Bishwajeet's Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
