import type { Metadata } from "next";

import React, { ReactNode } from "react";
import { Montserrat } from "next/font/google";

import "./globals.css";
import SynBackground from "@/components/background/syn-background";
import { Footer, Header } from "@/components";
import Blob from "@/components/blob/blob";

//TODO: implement actual fonts here / discuss with client to get the some fonts from google font.
const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syn-Tech",
  description: "Welcome to Syn-Tech!",
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-background text-white">
        <SynBackground />
        <Blob />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
