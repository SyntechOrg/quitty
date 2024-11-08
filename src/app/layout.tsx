import React, { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quitty | Home",
  description: "Welcome to Quitty!",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
