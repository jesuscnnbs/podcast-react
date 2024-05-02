import React from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

const title = "Podcast react";
export const siteTitle = "Podcast react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Header />
      {children}
    </div>
  );
}
