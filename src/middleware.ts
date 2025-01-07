import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "de",
});

const customMiddleware = async (request: NextRequest) => {
  const url = new URL(request.url);

  // Check if the URL contains '/blogs/something'
  if (url.pathname.startsWith("/blogs")) {
    return NextResponse.next();
  }

  // Fallback to the next-intl middleware
  return intlMiddleware(request);
};

export default customMiddleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
};
