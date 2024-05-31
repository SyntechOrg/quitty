"use client";
import React, { FC } from "react";
import Link from "next/link";
import { Button, Icon, IconType, Logo } from "../shared";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { MobileMenu } from "./MobileMenu";
import LocalSwitcher from "@/components/language/LocalSwitcher";
import { useLocale } from "use-intl";

const NAV_ITEMS = ["Home", "About", "Portfolio", "Services"] as const;

type NavProps = {
  className?: string;
};

const Nav: FC<NavProps> = ({ className }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const localActive = useLocale();

  return (
    <nav className={classNames("lg:block", className)}>
      <ul className="flex flex-col  gap-x-[60px] gap-y-5 text-[32px] leading-[36px] lg:flex-row lg:gap-y-0 lg:text-base">
        {NAV_ITEMS.map((item) => {
          const lowerCaseItem = item.toLowerCase();
          const isActive =
            (isHomePage && lowerCaseItem === "home") ||
            (!isHomePage && pathname === `/${lowerCaseItem}`);

          return (
            <li key={item}>
              <Link
                href={`/${localActive}/${item === "Home" ? "" : lowerCaseItem}`}
                className={classNames(
                  "transition-all duration-150 ease-in-out cursor-pointer hover:text-primary",
                  isActive
                    ? "text-primary font-bold lg:font-normal"
                    : "hover:text-primary",
                )}
              >
                {item}
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

  return (
    <header
      className={classNames(
        "container flex items-center justify-between py-[33px]",
        isProjectsPage && "absolute top-0 inset-x-0 z-20",
      )}
    >
      <Logo />
      <Nav className="hidden lg:block" />
      <div className="flex  items-center gap-4 max-lg:ml-auto max-lg:mr-4">
        <LocalSwitcher />
        <div className="group hidden items-center lg:flex">
          <Button to={`/${localActive}/contact`}>Get in Touch</Button>
          <Button to={`/${localActive}/contact`}>
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};

export { Nav, Header };
