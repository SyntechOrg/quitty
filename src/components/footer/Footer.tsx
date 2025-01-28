"use client";
import React from "react";
import { useLocale } from "use-intl";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/fade-in/FadeIn";
import Image from "next/image";
import QuittyBanner from "../../../public/assets/images/quitty-banner.png";
import TikTokLogo from "../../../public/assets/images/tik-tok-logo.png";
import YoutubeLogo from "../../../public/assets/images/youtube-logo.png";
import InstagramLogo from "../../../public/assets/images/instagram-logo.png";
import AppleLogo from "../../../public/assets/images/apple-icon.png";
import GooglePlayLogo from "../../../public/assets/images/google-play-icon.png";
import Link from "next/link";
import { Icon, IconType } from "@/components/shared";

const footerNavLinks = [
  { text: "Product", href: "product" },
  { text: "About us", href: "about" },
  { text: "Blog", href: "blog" },
  { text: "Contact", href: "contact" },
  { text: "DataDeletionlink", href: "data" },
];

const footerLegalLinks = [
  { text: "Terms", href: "terms-of-service" },
  { text: "Privacy", href: "privacy-policy" },
  { text: "Impressum", href: "impressum" },
  { text: "Cookies", href: "cookies" },
];

export const Footer = () => {
  const localActive = useLocale();
  const t = useTranslations("Footer");

  return (
    <FadeIn>
      <footer className="mt-[60px] w-full bg-text pt-[60px] text-white lg:mt-[100px] lg:pt-[120px]">
        <div className="container flex gap-14 max-lg:flex-col-reverse lg:justify-between lg:gap-20">
          <div className="relative w-full lg:w-1/2">
            <div
              className="relative z-10 flex max-w-[320px] items-center justify-between gap-4 rounded-[30px] p-8
              before:absolute before:bottom-[-2px] before:left-[-2px] before:right-[75%] before:top-[-2px] before:z-[-1] before:rounded-l-[31px]
              before:bg-gradient-to-br before:from-[#00C9A5] before:to-transparent before:to-50% before:content-[''] after:absolute
              after:inset-0 after:z-[-1] after:rounded-[30px] after:bg-[#0B1624] after:content-[''] max-lg:mx-auto
              max-lg:flex-col before:max-lg:right-[35%] before:max-lg:to-40% lg:w-full lg:max-w-[600px] lg:gap-5 lg:p-[30px]"
            >
              <div className="flex items-center gap-4 max-lg:flex-col  lg:gap-5">
                <Icon icon={IconType.LOGO_ONLY} className="w-[50px]" />
                <p className="flex-1 text-[16px] leading-[25px] text-[#e1e3e7] max-lg:text-center lg:text-[20px] lg:leading-[30px]">
                  {t("CardText")}
                </p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <a
                  href={"https://www.google.com"}
                  target="_blank"
                  className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#b7babf] duration-150 hover:bg-[#3E3E3E50] lg:h-[48px] lg:w-[48px]"
                  rel="noreferrer"
                >
                  <Image
                    src={AppleLogo}
                    alt="Apple logo"
                    className="h-full max-h-[16px] w-full max-w-[16px] object-contain lg:max-h-[20px] lg:max-w-[20px]"
                  />
                </a>
                <a
                  href={"https://www.google.com"}
                  target="_blank"
                  className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-[#b7babf] duration-150 hover:bg-[#3E3E3E50] lg:h-[48px] lg:w-[48px]"
                  rel="noreferrer"
                >
                  <Image
                    src={GooglePlayLogo}
                    alt="Google Play Logo"
                    className="h-full max-h-[16px] w-full max-w-[16px] object-contain lg:max-h-[20px] lg:max-w-[20px]"
                  />
                </a>
              </div>
            </div>
            <p className="mt-8 text-[16px] leading-[24px] text-[#b7babf] max-lg:text-center lg:ml-6 lg:text-[18px] lg:leading-[30px]">
              ©{new Date().getFullYear()} {t("Copyright")}{" "}
              <span className="text-primary">
                <a href="https://syn-tech.ch/">Syntech Solutions AG</a>
              </span>
            </p>
          </div>
          <div className="flex w-full justify-between gap-5 lg:w-1/2">
            <div className="flex w-1/2 flex-col max-lg:items-center">
              <ul className="flex flex-col gap-y-5">
                <p className="pb-2 text-[16px] font-medium leading-[1.4] text-white">
                  {t("QuickLinks")}
                </p>
                {footerNavLinks.map((item) => (
                  <li
                    key={item.text}
                    className="text-[16px] leading-[1.4] text-[#b7babf] duration-150 hover:text-white"
                  >
                    <Link href={`/${localActive}/${item.href.toLowerCase()}`}>
                      {t(item.text)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-1/2 flex-col max-lg:items-center">
              <ul className="flex flex-col gap-y-5">
                <p className="pb-2 text-[16px] font-medium leading-[1.4] text-white">
                  {t("Legal")}
                </p>
                {footerLegalLinks.map((item) => (
                  <li
                    key={item.text}
                    className="text-[16px] leading-[1.4] text-[#b7babf] duration-150 hover:text-white"
                  >
                    <Link href={`/${localActive}/${item.href.toLowerCase()}`}>
                      {t(item.text)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2.5">
                <a
                  href={"https://www.google.com"}
                  target="_blank"
                  className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border border-[#3E3E3E] duration-150 hover:bg-[#3E3E3E50] lg:h-[48px] lg:w-[48px]"
                  rel="noreferrer"
                >
                  <Image
                    src={TikTokLogo}
                    alt="TikTok Logo"
                    className="h-full max-h-[16px] w-full max-w-[16px] object-contain lg:max-h-[20px] lg:max-w-[20px]"
                  />
                </a>
                <a
                  href={"https://www.google.com"}
                  target="_blank"
                  className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border border-[#3E3E3E] duration-150 hover:bg-[#3E3E3E50] lg:h-[48px] lg:w-[48px]"
                  rel="noreferrer"
                >
                  <Image
                    src={YoutubeLogo}
                    alt="Youtube Logo"
                    className="h-full max-h-[16px] w-full max-w-[16px] object-contain lg:max-h-[20px] lg:max-w-[20px]"
                  />
                </a>
                <a
                  href={"https://www.google.com"}
                  target="_blank"
                  className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border border-[#3E3E3E] duration-150 hover:bg-[#3E3E3E50] lg:h-[48px] lg:w-[48px]"
                  rel="noreferrer"
                >
                  <Image
                    src={InstagramLogo}
                    alt="Instagram Logo"
                    className="h-full max-h-[16px] w-full max-w-[16px] object-contain lg:max-h-[20px] lg:max-w-[20px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 w-full max-w-[1440px]">
          <Image
            src={QuittyBanner}
            alt="Quitty Logo"
            className="h-full max-h-[375px] w-full object-contain"
          />
        </div>
      </footer>
    </FadeIn>
  );
};
