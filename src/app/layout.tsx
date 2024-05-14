import type { Metadata } from "next";
import { Footer, Header } from "@/components";

import React, { ReactNode } from "react";
import { Montserrat } from "next/font/google";

import "./globals.css";

//TODO: implement actual fonts here / discuss with client to get the some fonts from google font.
const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syn-Tech",
  description: "Welcome to Syn-Tech!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-background text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
