"use client";
import React from "react";
import { Button, Icon, IconType } from "../shared";
import Link from "next/link";
import { useLocale } from "use-intl";
import { useTranslations } from "next-intl";

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
    <footer className="w-full pb-[26px] text-white lg:pb-[71px]">
      <div className="border-b border-b-[#35353C]">
        <div className="container flex flex-col justify-center lg:flex-row">
          <div className="py-[46px] lg:border-r lg:border-r-[#35353C] lg:px-0 lg:py-[90px]">
            <p className="max-w-[410px] text-[30px] leading-[45px] lg:text-[36px] lg:leading-[56px]">
              {t("Footer heading-1")}
            </p>
            <div className="mt-8 flex">
              <div className="group flex items-center">
                <Button to="/contact">{t("Footer button-1")}</Button>
                <Button to="/contact">
                  <Icon icon={IconType.ARROW} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-between gap-x-5 border-y border-y-[#35353C] py-[50px] lg:border-r lg:border-r-[#35353C] lg:px-[50px] lg:py-[90px] xl:px-[100px]">
            <ul className="flex flex-col gap-y-5">
              <li className="flex items-center gap-x-[10px] text-sm lg:-mr-5">
                <Icon icon={IconType.DIAMOND} />
                <span>{t("Footer sitemap")}</span>
              </li>
              {footerLinks.map((item) => (
                <li
                  key={item.text}
                  className="mt-2 text-sm font-light text-text"
                >
                  <Link href={`/${localActive}/${item.href.toLowerCase()}`}>
                    {t(item.text)}
                  </Link>
                </li>
              ))}
            </ul>
            {localActive === "de" && (
              <ul className="flex flex-col gap-y-5">
                <li className="flex items-center gap-x-[10px] text-sm lg:-mr-5">
                  <Icon icon={IconType.DIAMOND} />
                  <span>{t("Footer legal")}</span>
                </li>
                <li className="mt-2 text-sm font-light text-text">
                  <Link
                    href=""
                    onClick={() => window.open("/PDFs/privacyDe.pdf", "_blank")}
                  >
                    {t("Footer privacy-p")}
                  </Link>
                </li>

                <li className="mt-2 text-sm font-light text-text">
                  <Link
                    href=""
                    onClick={() => window.open("/PDFs/cookiesDe.pdf", "_blank")}
                  >
                    {t("Footer cookies")}
                  </Link>
                </li>

                <li className="mt-2 text-sm font-light text-text">
                  <Link
                    href=""
                    onClick={() => window.open("/PDFs/termsDe.pdf", "_blank")}
                  >
                    {t("Footer terms")}
                  </Link>
                </li>

                <li className="mt-2 text-sm font-light text-text">
                  <Link href="" onClick={() => window.open("", "_blank")}>
                    {t("Footer impressum")}
                  </Link>
                </li>
              </ul>
            )}

            {localActive === "en" && (
              <ul className="flex flex-col gap-y-5">
                <li className="flex items-center gap-x-[10px] text-sm lg:-mr-5">
                  <Icon icon={IconType.DIAMOND} />
                  <span>{t("Footer legal")}</span>
                </li>
                <li className="mt-2 text-sm font-light text-text">
                  <Link
                    href=""
                    onClick={() => window.open("/PDFs/privacyEn.pdf", "_blank")}
                  >
                    {t("Footer privacy-p")}
                  </Link>
                </li>

                <li className="mt-2 text-sm font-light text-text">
                  <Link
                    href=""
                    onClick={() => window.open("/PDFs/cookiesEn.pdf", "_blank")}
                  >
                    {t("Footer cookies")}
                  </Link>
                </li>

                <li className="mt-2 text-sm font-light text-text">
                  <Link
                    href=""
                    onClick={() => window.open("/PDFs/termsEn.pdf", "_blank")}
                  >
                    {t("Footer terms")}
                  </Link>
                </li>

                <li className="mt-2 text-sm font-light text-text">
                  <Link href="" onClick={() => window.open("", "_blank")}>
                    {t("Footer impressum")}
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="py-[90px] lg:pl-[34px]">
            <p className="flex items-center gap-x-[10px] text-sm lg:-mr-5">
              <Icon icon={IconType.DIAMOND} />
              <span>{t("Footer info").toUpperCase()}</span>
            </p>
            <p className="text-sm font-light leading-[70px] text-text">
              {t("Footer number")}
            </p>
            <a
              href="tel:+383 49 799 829"
              className="text-md font-bold leading-[20px] text-text"
            >
              +383 49 799 829
            </a>
            <p className="text-sm font-light leading-[70px] text-text">
              {t("Footer address")}
            </p>
            <a
              href="mailto:info@syn-tech.ch"
              className="text-mds font-bold leading-[20px] text-text"
            >
              info@syn-tech.ch
            </a>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center pb-[30px] pt-5 lg:flex-row lg:px-[30px] lg:pt-[50px]">
        <Icon
          icon={IconType.LOGO_BACKGROUND}
          className="h-[41px] w-full lg:h-auto"
        />
      </div>
      <div className="container flex flex-col items-center gap-x-[30px] lg:flex-row">
        <div className="flex items-center justify-center gap-x-7">
          <Icon icon={IconType.LOGO} />
          <span className="hidden text-sm leading-[59px] lg:inline-block">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="hidden h-[1px] flex-1 bg-[#0000FF] lg:block"></div>
        <ul className="hidden gap-x-[40px] text-sm leading-[30px] lg:flex">
          <li>{t("Footer rights")}</li>
        </ul>
      </div>
    </footer>
  );
};
