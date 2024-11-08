"use client";
import React from "react";
import { Button, Icon, IconType } from "../shared";
import Link from "next/link";
import { useLocale } from "use-intl";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/fade-in/FadeIn";

const footerLinks = [
  { text: "Footer sitemap-text-1", href: "about" },
  { text: "Footer sitemap-text-2", href: "portfolio" },
  { text: "Footer sitemap-text-3", href: "services" },
  { text: "Footer sitemap-text-4", href: "contact" },
];

export const Footer = () => {
  const localActive = useLocale();
  const t = useTranslations("Footer");

  return (
    <FadeIn>
      <footer className="w-full pb-[26px] text-white lg:pb-[71px]">
        footer
      </footer>
    </FadeIn>
  );
};
