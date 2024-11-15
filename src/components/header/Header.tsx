"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Icon, IconType, Logo } from "../shared";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { MobileMenu } from "./MobileMenu";
import LocalSwitcher from "@/components/language/LocalSwitcher";
import { useLocale } from "use-intl";
import { useTranslations } from "next-intl";
import { useScrollYPosition } from "@/hooks/useScrollYPosition";

const NAV_ITEMS = ["Home", "Product", "About", "Blog"] as const;

type NavProps = {
  className?: string;
};

const Nav: FC<NavProps> = ({ className }) => {
  const pathname = usePathname();
  const localActive = useLocale();
  const isHomePage = pathname === `/${localActive}`;
  const t = useTranslations("Header");

  return (
    <nav className={classNames("lg:block relative z-10", className)}>
      <ul className="flex flex-col gap-x-10 gap-y-5 text-[32px] leading-[36px] lg:flex-row lg:items-center lg:gap-y-0">
        {NAV_ITEMS.map((item, index) => {
          const lowerCaseItem = item.toLowerCase();
          const isActive =
            (isHomePage && lowerCaseItem === "home") ||
            (!isHomePage && pathname === `/${localActive}/${lowerCaseItem}`);

          return (
            <li key={item} className=" lg:text-right">
              <Link
                href={`/${localActive}/${item === "Home" ? "" : lowerCaseItem}`}
                className={classNames(
                  "transition-all duration-150 ease-in-out cursor-pointer",
                  isActive ? "text-primary" : "text-text hover:text-primary",
                )}
              >
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-semibold leading-[10px]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-medium leading-[20px]">
                    {t(item)}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Header: FC = () => {
  const localActive = useLocale();
  const t = useTranslations("Header");

  return (
    <header
      className={classNames(
        "fixed w-screen top-0 right-0 left-0 transition-transform py-[20px] duration-500 z-20 backdrop-blur-sm bg-white/30",
      )}
    >
      <div className="container flex items-center justify-between gap-4 h-[50px]">
        <Logo />
        <Nav className="hidden lg:block" />
        <div className="flex items-center gap-2 max-lg:ml-auto">
          <LocalSwitcher />
          <div className="group hidden items-center lg:flex">
            <Button
              to={`/${localActive}/contact`}
              variant="contact"
            >
              {t("ContactButton")}
            </Button>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export { Nav, Header };
