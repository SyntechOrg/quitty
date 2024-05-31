import React, { ReactNode } from "react";
import "./globals.css";

const Layout = ({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) => {
  return (
    <html lang={locale}>
      <body className="relative overflow-x-hidden bg-background text-white">
        {children}
      </body>
    </html>
  );
};

export default Layout;
