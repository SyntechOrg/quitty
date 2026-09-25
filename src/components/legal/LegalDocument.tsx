import React from "react";
import type { Metadata } from "next";
import {
  legalDocuments,
  legalHref,
  toLegalLocale,
  type LegalLocale,
  type LegalSlug,
} from "@/content/legal";
import Chatbase from "@/components/chatbot/Chatbase";
import "./LegalDocument.css";

const BASE_URL = "https://www.quitty.ch";
const LEGAL_PATH =
  /quitty\.ch\/(de|en)\/(impressum|privacy-policy|cookies|terms-of-service|data)\b/;
const EMAIL = /[a-z]+@quitty\.ch/;
const AUTO_LINK = new RegExp(`${LEGAL_PATH.source}|${EMAIL.source}`, "g");

// Shown on translated pages only; the German text is the binding one.
const translationNote = (slug: LegalSlug) =>
  `<div class="legal-translation">This English version is a translation provided for convenience. Only the <a href="${legalHref(slug, "de")}" hreflang="de">German version</a> is legally binding.</div>`;

// Adds markup only (links, table wrappers, translation note); the text of the
// supplied document stays identical so it can be compared against the source.
const renderLegalHtml = (slug: LegalSlug, locale: LegalLocale) => {
  const { html, links = [] } = legalDocuments[locale][slug];

  let result = html
    .replace(/<table>/g, '<div class="legal-table"><table>')
    .replace(/<\/table>/g, "</table></div>")
    .replace(
      AUTO_LINK,
      (match, pathLocale?: LegalLocale, pathSlug?: LegalSlug) =>
        pathSlug
          ? `<a href="${legalHref(pathSlug, pathLocale)}">${match}</a>`
          : `<a href="mailto:${match}">${match}</a>`,
    );

  links.forEach(({ phrase, text, href }) => {
    const occurrences = result.split(phrase).length - 1;
    if (occurrences !== 1) {
      throw new Error(
        `Legal text "${locale}/${slug}": expected link phrase once, found ${occurrences}: "${phrase}"`,
      );
    }
    result = result.replace(
      phrase,
      phrase.replace(text, `<a href="${legalHref(href, locale)}">${text}</a>`),
    );
  });

  if (locale !== "de") {
    result = result.replace(/(<p class="lead">.*?<\/p>)/, `$1${translationNote(slug)}`);
  }

  return result;
};

export const legalMetadata = async (
  slug: LegalSlug,
  params: Promise<{ locale: string }>,
): Promise<Metadata> => {
  const locale = toLegalLocale((await params).locale);

  return {
    title: `Quitty | ${legalDocuments[locale][slug].title}`,
    alternates: {
      canonical: `${BASE_URL}${legalHref(slug, locale)}`,
      languages: {
        de: `${BASE_URL}${legalHref(slug, "de")}`,
        en: `${BASE_URL}${legalHref(slug, "en")}`,
      },
    },
  };
};

const LegalDocument = async ({
  slug,
  params,
}: {
  slug: LegalSlug;
  params: Promise<{ locale: string }>;
}) => {
  const locale = toLegalLocale((await params).locale);

  return (
    <div className="container">
      <article
        lang={locale}
        className="legal-document"
        // Static, reviewed legal text bundled with the app — not user input.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: renderLegalHtml(slug, locale) }}
      />
      <Chatbase />
    </div>
  );
};

export default LegalDocument;
