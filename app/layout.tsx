import type { Metadata } from "next";
import { Russo_One, Space_Mono } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "kyle bb.",
  description:
    "engineering and education student from Sweden. full-stack by passion, student by trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${russoOne.variable} ${spaceMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
