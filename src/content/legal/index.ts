import impressumDe from "./de/impressum";
import privacyPolicyDe from "./de/privacy-policy";
import cookiesDe from "./de/cookies";
import termsOfServiceDe from "./de/terms-of-service";
import dataDe from "./de/data";
import impressumEn from "./en/impressum";
import privacyPolicyEn from "./en/privacy-policy";
import cookiesEn from "./en/cookies";
import termsOfServiceEn from "./en/terms-of-service";
import dataEn from "./en/data";

export type LegalSlug =
  | "impressum"
  | "privacy-policy"
  | "cookies"
  | "terms-of-service"
  | "data";

export type LegalLocale = "de" | "en";

type LegalDocument = {
  title: string;
  html: string;
  // Exact phrases in the text that get turned into links. The text itself is
  // not changed; each phrase must occur exactly once.
  links?: { phrase: string; text: string; href: LegalSlug }[];
};

export const toLegalLocale = (locale: string): LegalLocale =>
  locale === "en" ? "en" : "de";

export const legalHref = (slug: LegalSlug, locale: LegalLocale = "de") =>
  `/${locale}/${slug}`;

export const legalDocuments: Record<
  LegalLocale,
  Record<LegalSlug, LegalDocument>
> = {
  de: {
    impressum: { title: "Impressum", html: impressumDe },
    "privacy-policy": {
      title: "Datenschutzerklärung",
      html: privacyPolicyDe,
      links: [
        {
          phrase: "Einzelheiten enthält die Cookie- und Tracking-Richtlinie",
          text: "Cookie- und Tracking-Richtlinie",
          href: "cookies",
        },
      ],
    },
    cookies: {
      title: "Cookie-Richtlinie",
      html: cookiesDe,
      links: [
        {
          phrase: "Sie ergänzt die Datenschutzerklärung",
          text: "Datenschutzerklärung",
          href: "privacy-policy",
        },
      ],
    },
    "terms-of-service": {
      title: "Nutzungsbedingungen",
      html: termsOfServiceDe,
      links: [
        {
          phrase:
            "Einzelheiten zur Datenbearbeitung enthält die Datenschutzerklärung",
          text: "Datenschutzerklärung",
          href: "privacy-policy",
        },
      ],
    },
    data: { title: "Daten löschen", html: dataDe },
  },
  en: {
    impressum: { title: "Legal Notice", html: impressumEn },
    "privacy-policy": {
      title: "Privacy Policy",
      html: privacyPolicyEn,
      links: [
        {
          phrase: "Details are set out in the Cookie and Tracking Policy",
          text: "Cookie and Tracking Policy",
          href: "cookies",
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      html: cookiesEn,
      links: [
        {
          phrase: "It supplements the privacy policy",
          text: "privacy policy",
          href: "privacy-policy",
        },
      ],
    },
    "terms-of-service": {
      title: "Terms of Use",
      html: termsOfServiceEn,
      links: [
        {
          phrase: "Details on data processing are set out in the privacy policy",
          text: "privacy policy",
          href: "privacy-policy",
        },
      ],
    },
    data: { title: "Delete data", html: dataEn },
  },
};

// Order as defined in the launch protocol.
export const legalNavigation: LegalSlug[] = [
  "impressum",
  "privacy-policy",
  "cookies",
  "terms-of-service",
  "data",
];
