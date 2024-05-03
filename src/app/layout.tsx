import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Syn-Tech",
  description: "Welcome to Syn-Tech!",
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
    <body className="bg-black">
      <Header/>
      {children}
      <Footer/>
    </body>
    </html>
  );
}
