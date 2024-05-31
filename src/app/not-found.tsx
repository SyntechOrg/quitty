import React from "react";
import SynBackground from "@/components/background/syn-background";
import Blob from "@/components/blob/blob";
import { Header } from "@/components";

const NotFound = () => {
  return (
    <html>
      <body className="relative overflow-x-hidden bg-background text-white">
        <Header />
        <SynBackground />
        <Blob />
        <div className="flex h-[calc(100vh-106px)] items-center justify-center lg:h-[calc(100vh-114px)]">
          <h1 className="text-center sm:text-lg lg:text-2xl">
            404 - Page Not Found
          </h1>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
