"use client";
import React, { FC } from "react";
import Link from "next/link";
import { Button, Logo } from "../shared";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NAV_ITEMS = ["Home", "About", "Portfolio", "Services"] as const;

export const Nav: FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-x-[60px] text-base">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            {/* TODO: ask designer for an active and hover color (substitute: text-red-xxx) */}
            <Link
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={`
              ${
                isHomePage && item.toLowerCase() === "home"
                  ? "text-red-400"
                  : ""
              }
              ${
                !isHomePage && pathname === "/" + item.toLowerCase()
                  ? "text-red-400"
                  : ""
              }
              hover:text-red-300
            `}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Header: FC = () => {
  const isProjectPage = usePathname().includes("projects");

  return (
    <header
      className={classNames(
        "container flex items-center justify-between py-[33px]",
        isProjectPage ? "absolute top-0 inset-x-0 z-10" : ""
      )}
    >
      <Logo />
      <Nav />
      <Button to="contact">Get in Touch</Button>
    </header>
  );
};
