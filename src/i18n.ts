import { getRequestConfig } from "next-intl/server";

const locales = ["en", "de"] as const;
const defaultLocale = "de";

type Locale = (typeof locales)[number];

const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale);

export default getRequestConfig(async ({ requestLocale }) => {
  // `requestLocale` is a promise in next-intl v4 and may be undefined for
  // non-localised requests, so fall back to the default locale.
  const requested = await requestLocale;
  const locale = isLocale(requested) ? requested : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
