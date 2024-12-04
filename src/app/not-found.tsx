import React from "react";
import { Button } from "@/components/shared";

const NotFound = () => {
  return (
    <html>
      <body className="relative overflow-x-hidden bg-background text-white">
        <div className="flex h-screen flex-col items-center justify-center gap-4 lg:gap-8">
          <h1 className="text-center text-text sm:text-lg lg:text-2xl">
            404 - Page Not Found
          </h1>
          <Button to="/" className="text-primary" variant="contact">
            Return to home
          </Button>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
