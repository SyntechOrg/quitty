import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import React, {ReactNode} from "react";
import SynTransparent from "../../public/syn-transparent.png";
export const metadata: Metadata = {
  title: "Syn-Tech",
  description: "Welcome to Syn-Tech!",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
    <body className="bg-black overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{backgroundImage: `url(${SynTransparent.src})`}}
      />
      <div id="blob" />
      <Header/>
        {children}
      <Footer/>
      <script src="blob-script.js"></script>
    </body>
    </html>
  );
}
