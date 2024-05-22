import React, { FC } from "react";
import { Button, Icon, IconType, Logo } from "../shared";
import Link from "next/link";

const NAV_ITEMS = ["Home", "About", "Portfolio", "Services"] as const;

type NavProps = {};

export const Nav: FC<NavProps> = () => {
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
