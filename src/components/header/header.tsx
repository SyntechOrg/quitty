"use client";
import React, { FC } from "react";
import Link from "next/link";
import { Button, Icon, IconType, Logo } from "../shared";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NAV_ITEMS = ["Home", "About", "Portfolio", "Services"] as const;

const Nav: FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-x-[60px] text-base">
        {NAV_ITEMS.map((item) => {
          const lowerCaseItem = item.toLowerCase();
          const isActive =
            (isHomePage && lowerCaseItem === "home") ||
            (!isHomePage && pathname === `/${lowerCaseItem}`);

          return (
            <li key={item}>
              {/* TODO: ask designer for an active and hover color (substitute: text-red-xxx) */}
              <Link
                href={`/${item === "Home" ? "" : lowerCaseItem}`}
                className={classNames(
                  "transition-colors duration-200",
                  isActive ? "text-red-400" : "hover:text-red-300"
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

const Header: FC = () => (
  <header className="container flex items-center justify-between py-[33px]">
    <Logo />
    <Nav />
    <div className="flex items-center group">
      <Button to="contact">Get in Touch</Button>
      <Button to="contact">
        <Icon icon={IconType.ARROW} />
      </Button>
    </div>
  </header>
);

export { Nav, Header };
