import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: ["400", "400"],
});

export const metadata: Metadata = {
  title: "kyle b.",
  description:
    "engineering and teaching student from Sweden. full-stack by passion, educator by trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${russoOne.variable} antialiased`}>{children}</body>
    </html>
  );
}
