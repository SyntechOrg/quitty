import type { Metadata } from "next";

import React, { ReactNode } from "react";

import SynBackground from "@/components/background/syn-background";
import { ToastContainer } from "react-toastify";

import { Footer, Header } from "@/components";
import Blob from "@/components/blob/blob";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Syntech Solutions AG | Home",
  description: "Welcome to Syn-Tech!",
  openGraph: {
    images: ["https://www.syn-tech.ch/thumbnail.png"],
  },
};

// eslint-disable-next-line react/function-component-definition
export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{ children: ReactNode; params: { locale: string } }>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="relative overflow-x-hidden scroll-smooth bg-background text-white">
        <SynBackground />
        <Blob />
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
