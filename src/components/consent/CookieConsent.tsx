"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { legalHref, toLegalLocale } from "@/content/legal";
import {
  onOpenConsentSettings,
  saveConsent,
  useConsent,
  type ConsentChoice,
} from "@/lib/consent";

const CATEGORIES = ["functional", "statistics"] as const;

// Accept and reject share one style so neither is visually preferred
// (QTY-LAUNCH-2026-01 B-1, Cookie-Richtlinie Ziff. 7).
const choiceButton =
  "h-[46px] w-full shrink-0 rounded-full bg-text sm:w-auto sm:flex-1 px-5 text-[15px] font-medium text-white duration-150 hover:bg-text/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const linkButton =
  "text-[14px] font-medium text-[#161519] underline underline-offset-2 hover:text-text/70";

const CookieConsent = () => {
  const t = useTranslations("Consent");
  const locale = toLegalLocale(useLocale());
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>({
    functional: false,
    statistics: false,
  });
  const headingRef = useRef<HTMLHeadingElement>(null);
  const titleId = useId();
  const textId = useId();

  useEffect(
    () =>
      onOpenConsentSettings(() => {
        setReopened(true);
        setShowSettings(true);
      }),
    [],
  );

  // Settings start from the stored choice; nothing is preselected on a first visit.
  useEffect(() => {
    if (consent) {
      setChoice({
        functional: consent.functional,
        statistics: consent.statistics,
      });
    }
  }, [consent, reopened]);

  useEffect(() => {
    if (reopened) headingRef.current?.focus();
  }, [reopened]);

  if (consent === undefined || (consent && !reopened)) return null;

  const decide = (next: ConsentChoice) => {
    setReopened(false);
    setShowSettings(false);
    saveConsent(next);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      aria-describedby={textId}
      data-testid="consent-banner"
      className="fixed inset-x-3 bottom-3 z-[1000000] max-h-[calc(100dvh-24px)] overflow-y-auto rounded-[24px] bg-white p-5
        shadow-[0_8px_40px_rgba(0,0,0,0.18)] md:bottom-6 md:left-6 md:right-auto md:max-w-[520px] md:p-7"
    >
      <h2
        ref={headingRef}
        id={titleId}
        tabIndex={-1}
        className="text-[20px] font-semibold leading-[1.3] text-[#111013] outline-none"
      >
        {t("title")}
      </h2>
      <p id={textId} className="mt-3 text-[14px] leading-[1.6] text-[#161519]">
        {t.rich("text", {
          link: (chunks) => (
            <Link
              href={legalHref("cookies", locale)}
              className="underline underline-offset-2 hover:text-text/70"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>

      {showSettings && (
        <fieldset className="mt-5 flex flex-col gap-4">
          <legend className="sr-only">{t("categories")}</legend>
          <label className="flex gap-3">
            <input
              type="checkbox"
              checked
              disabled
              className="mt-[3px] size-[18px] shrink-0 accent-primary"
            />
            <span className="text-[14px] leading-[1.5] text-[#161519]">
              <span className="block font-semibold">{t("necessaryTitle")}</span>
              {t("necessaryText")}
            </span>
          </label>
          {CATEGORIES.map((category) => (
            <label key={category} className="flex cursor-pointer gap-3">
              <input
                type="checkbox"
                checked={choice[category]}
                onChange={(e) =>
                  setChoice({ ...choice, [category]: e.target.checked })
                }
                className="mt-[3px] size-[18px] shrink-0 cursor-pointer accent-primary"
              />
              <span className="text-[14px] leading-[1.5] text-[#161519]">
                <span className="block font-semibold">
                  {t(`${category}Title`)}
                </span>
                {t(`${category}Text`)}
              </span>
            </label>
          ))}
        </fieldset>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className={choiceButton}
          onClick={() => decide({ functional: false, statistics: false })}
        >
          {t("reject")}
        </button>
        <button
          type="button"
          className={choiceButton}
          onClick={() => decide({ functional: true, statistics: true })}
        >
          {t("accept")}
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-6">
        {showSettings ? (
          <button
            type="button"
            className={linkButton}
            onClick={() => decide(choice)}
          >
            {t("save")}
          </button>
        ) : (
          <button
            type="button"
            className={linkButton}
            onClick={() => setShowSettings(true)}
          >
            {t("settings")}
          </button>
        )}
        {consent && (
          <button
            type="button"
            className={linkButton}
            onClick={() => {
              setReopened(false);
              setShowSettings(false);
            }}
          >
            {t("close")}
          </button>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
