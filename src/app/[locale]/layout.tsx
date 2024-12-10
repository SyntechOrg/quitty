import type { Metadata } from "next";

import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import { Footer, Header } from "@/components";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "react-toastify/dist/ReactToastify.css";
import GradientBackground from "@/components/shared/background/GradientBackground";
import Transform from "@/components/shared/transform/Transform";
import LenisWrapper from "@/components/shared/lenis-wrapper/LenisWrapper";

export const metadata: Metadata = {
  title: "Quitty | Home",
  description: "Welcome to Quitty!",
  openGraph: {
    images: ["https://www.quitty.ch/thumbnail.png"],
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
      <body className="relative scroll-smooth bg-background">
        <NextIntlClientProvider messages={messages}>
          <div className="mb-[90px]">
            <Header />
          </div>
          <GradientBackground />
          <LenisWrapper>
            {children}
            <Transform />
            <Footer />
          </LenisWrapper>
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
