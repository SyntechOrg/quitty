"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { legalHref, toLegalLocale } from "@/content/legal";
import { markServiceLoaded, useConsent } from "@/lib/consent";

const VIMEO_SRC =
  "https://player.vimeo.com/video/1170629815?badge=0&autopause=0&player_id=0&app_id=58479";

// The Vimeo iframe is only created once the visitor has allowed "Funktional"
// or clicked "Video laden"; until then nothing is requested from Vimeo.
// Without "Statistik", dnt=1 stops Vimeo from setting its statistics cookie.
const VideoSection = () => {
  const t = useTranslations("Consent");
  const locale = toLegalLocale(useLocale());
  const consent = useConsent();
  const [clicked, setClicked] = useState(false);

  const allowed = Boolean(consent?.functional) || clicked;

  useEffect(() => {
    if (allowed) markServiceLoaded("vimeo");
  }, [allowed]);

  const src = `${VIMEO_SRC}${consent?.statistics ? "" : "&dnt=1"}${
    clicked ? "&autoplay=1" : ""
  }`;

  return (
    <FadeIn className="mt-32 lg:mt-52">
      {allowed ? (
        <iframe
          className="z-10 mx-auto aspect-video w-full rounded-[40px] lg:w-full"
          src={src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title="quitty draft 7(1)"
        ></iframe>
      ) : (
        <div
          data-consent-embed="vimeo"
          className="mx-auto flex aspect-video w-full flex-col items-center justify-center gap-5 rounded-[40px] bg-text px-6 text-center text-white"
        >
          <p className="max-w-[520px] text-[14px] leading-[1.6] text-[#e1e3e7] lg:text-[16px]">
            {t("videoText")}
          </p>
          <button
            type="button"
            onClick={() => setClicked(true)}
            className="h-[48px] rounded-full bg-primary px-8 text-[16px] font-medium text-white duration-150 hover:bg-primary/80"
          >
            {t("videoButton")}
          </button>
          <Link
            href={legalHref("cookies", locale)}
            className="text-[14px] text-[#b7babf] underline underline-offset-2 hover:text-white"
          >
            {t("policyLink")}
          </Link>
        </div>
      )}
    </FadeIn>
  );
};

export default VideoSection;
