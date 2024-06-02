import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
});

const customMiddleware = async (request: NextRequest) => {
  const url = new URL(request.url);

  // Check if the URL contains '/projects/something'
  if (url.pathname.startsWith("/projects")) {
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
