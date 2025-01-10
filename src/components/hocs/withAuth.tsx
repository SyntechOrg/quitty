"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const WithAuth = (props: any) => {
    const localActive = useLocale();
    const router = useRouter();

    useEffect(() => {
      // Check if the user is logged in
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

      if (!isLoggedIn) {
        router.push(`/${localActive}/login`); // Redirect to login if not logged in
      }
    }, [router]);

    // Return the wrapped component only if the user is logged in
    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
