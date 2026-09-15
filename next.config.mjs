import createNextIntlPlugin from "next-intl/plugin";

// next-intl v4 defaults this path to ./i18n/request.ts; point it at the
// existing config file instead.
const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.klook.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
