import { useEffect, useState } from "react";

// Website consent for non-essential services (QTY-COO-2026-01, Ziff. 4, 5, 7).
// The choice is stored in a first-party cookie for 12 months together with the
// time and the banner version. Bump CONSENT_VERSION whenever the banner text or
// the services behind a category change: stored choices with another version
// are ignored, so visitors are asked again (Ziff. 11).
export const CONSENT_COOKIE = "quitty_consent";
export const CONSENT_VERSION = 1;
const MAX_AGE = 60 * 60 * 24 * 365;

const CHANGE_EVENT = "quitty:consent-change";
const OPEN_EVENT = "quitty:consent-open";

export type Consent = {
  v: number;
  ts: string;
  functional: boolean; // Vimeo player, Chatbase chat
  statistics: boolean; // Vimeo playback statistics (vuid)
};

export type ConsentChoice = Pick<Consent, "functional" | "statistics">;

// Which category each embedded service needs.
const SERVICE_CATEGORY = {
  vimeo: "functional",
  chatbase: "functional",
} as const;

export type ConsentService = keyof typeof SERVICE_CATEGORY;

// Cookies the services set on our own domain; removed when consent is revoked.
// Cookies on the providers' own domains (e.g. vimeo.com) cannot be deleted from
// here, but are no longer sent because the services are no longer loaded.
const SERVICE_COOKIES = ["chatbase_anon_id", "message_bubbles_have_been_shown"];

// Services started on this page, either through consent or a one-off click.
const loadedServices = new Set<ConsentService>();

export const readConsent = (): Consent | null => {
  const raw = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!raw) return null;
  try {
    const consent = JSON.parse(
      decodeURIComponent(raw.slice(CONSENT_COOKIE.length + 1)),
    ) as Consent;
    return consent.v === CONSENT_VERSION ? consent : null;
  } catch {
    return null;
  }
};

export const hasConsent = (service: ConsentService) =>
  Boolean(readConsent()?.[SERVICE_CATEGORY[service]]);

export const markServiceLoaded = (service: ConsentService) => {
  loadedServices.add(service);
};

const removeServiceCookies = () => {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  SERVICE_COOKIES.forEach((name) =>
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }),
  );
};

export const saveConsent = (choice: ConsentChoice) => {
  const consent: Consent = {
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
    ...choice,
  };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    JSON.stringify(consent),
  )}; Max-Age=${MAX_AGE}; path=/; SameSite=Lax${secure}`;

  // A running third-party script cannot be switched off in place. If a service
  // is active that the new choice no longer allows, clear what it left on our
  // domain and reload, so the page continues without it.
  const revoked = [...loadedServices].some(
    (service) => !choice[SERVICE_CATEGORY[service]],
  );
  if (revoked) {
    removeServiceCookies();
    window.location.reload();
    return;
  }

  window.dispatchEvent(new Event(CHANGE_EVENT));
};

export const openConsentSettings = () =>
  window.dispatchEvent(new Event(OPEN_EVENT));

export const onOpenConsentSettings = (handler: () => void) => {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
};

// `undefined` until read on the client, `null` when no valid choice is stored.
export const useConsent = () => {
  const [consent, setConsent] = useState<Consent | null | undefined>();

  useEffect(() => {
    const update = () => setConsent(readConsent());
    update();
    window.addEventListener(CHANGE_EVENT, update);
    return () => window.removeEventListener(CHANGE_EVENT, update);
  }, []);

  return consent;
};
