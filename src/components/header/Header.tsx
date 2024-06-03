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

const NAV_ITEMS = ["Home", "About", "Portfolio", "Services"] as const;

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
      <ul className="flex flex-col gap-x-[40px] gap-y-5 text-[32px] leading-[36px] lg:flex-row lg:items-center lg:gap-y-0 lg:text-base">
        {NAV_ITEMS.map((item) => {
          const lowerCaseItem = item.toLowerCase();
          const isActive =
            (isHomePage && lowerCaseItem === "home") ||
            (!isHomePage && pathname === `/${localActive}/${lowerCaseItem}`);

          return (
            <li key={item} className="lg:text-center">
              <Link
                href={`/${localActive}/${item === "Home" ? "" : lowerCaseItem}`}
                className={classNames(
                  "transition-all duration-150 ease-in-out cursor-pointer hover:text-primary",
                  isActive
                    ? "text-primary font-bold lg:font-normal"
                    : "hover:text-primary",
                )}
              >
                {t(item)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Header: FC = () => {
  const pathname = usePathname();
  const isProjectsPage = pathname.includes("projects");
  const localActive = useLocale();
  const t = useTranslations("Header");
  const scrollPosition = useScrollPosition();

  const isAtTop = scrollPosition > 150;

  return (
    <header
      // box-shadow: 0 0 20px rgba(60, 60, 60, .6);
      className={classNames(
        "fixed w-screen top-0 right-0 left-0 transition-transform py-[33px] duration-500 z-20 bg-background/20 backdrop-blur-sm",
        isProjectsPage
          ? "translate-y-0"
          : isAtTop
            ? "translate-y-0"
            : "-translate-y-[150%]",
      )}
    >
      <div className="container flex  items-center justify-between gap-4 ">
        <Logo />
        <Nav className="hidden lg:block" />
        <div className="flex items-center gap-2 max-lg:ml-auto">
          <LocalSwitcher />
          <div className="group hidden items-center lg:flex">
            <Button
              to={`/${localActive}/contact`}
              className="text-center leading-[1.3]"
            >
              {t("ContactButton")}
            </Button>
            <Button to={`/${localActive}/contact`}>
              <Icon icon={IconType.ARROW} />
            </Button>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export { Nav, Header };

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};
