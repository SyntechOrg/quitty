import React from "react";
import SynBackground from "@/components/background/syn-background";
import Blob from "@/components/blob/blob";
import classNames from "classnames";
import Link from "next/link";

const NotFound = () => {
  return (
    <html>
      <body className="relative overflow-x-hidden bg-background text-white">
        <SynBackground />
        <Blob />
        <div className="flex h-screen flex-col items-center justify-center gap-4 lg:h-[calc(100vh-114px)] lg:gap-8">
          <h1 className="text-center sm:text-lg lg:text-2xl">
            404 - Page Not Found
          </h1>
          <Link
            href="/"
            className={classNames(
              "transition-all duration-150 ease-in-out cursor-pointer hover:bg-primary rounded-lg border border-primary px-4 py-2 text-center",
            )}
          >
            Return to home
          </Link>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
