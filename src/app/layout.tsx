import type { Metadata } from 'next';

import React, { ReactNode } from 'react';

import './globals.css';
import SynBackground from '@/components/background/syn-background';
import { Footer, Header } from '@/components';
import Blob from '@/components/blob/blob';

export const metadata: Metadata = {
  title: 'Syn-Tech',
  description: 'Welcome to Syn-Tech!',
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-background text-white">
        <SynBackground />
        <Blob />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
