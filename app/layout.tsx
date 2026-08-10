import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRMSC — Green Room Music Summer Camp 2027",
  description: "A residential music summer camp at Stamford School, 19–23 July 2027. Intensive Piano, Music Theory and Singing Performance for ages 10–17.",
  keywords: "music summer camp, GRMSC, piano course, music theory, singing performance, Stamford School, residential music 2027",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{children}</body>
    </html>
  );
}
