import React, { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syntech Solutions AG | Home",
  description: "Welcome to Syn-Tech!",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
