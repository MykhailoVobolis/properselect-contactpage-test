import React from "react";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const font = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Regular, Medium, SemiBold, Bold, ExtraBold
});

export const metadata: Metadata = {
  title: "PROPERSELECT",
  description: "Super description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
