import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";
import Footer from "@/components/footer/footer";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Syn-Tech",
  description: "Welcome to Syn-Tech!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-background text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
