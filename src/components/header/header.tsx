"use client";
import React, { FC } from "react";
import Link from "next/link";
import { Button, Icon, IconType, Logo } from "../shared";
import { usePathname } from "next/navigation";

const NAV_ITEMS = ["Home", "About", "Portfolio", "Services"] as const;

export const Nav: FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-x-[60px] text-base">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <Link href={`/${item === "Home" ? "" : item.toLowerCase()}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Header: FC = () => {
  return (
    <header className="container py-[33px] flex items-center justify-between">
      <Logo />
      <Nav />

      <div className="lg:flex items-center hidden">
        <Button to="contact">Get in Touch</Button>
        <Button>
          <Icon icon={IconType.ARROW} />
        </Button>
      </div>
    </header>
  );
};
