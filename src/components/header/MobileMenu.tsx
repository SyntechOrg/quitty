"use client";
import { useEffect, type FC } from "react";
import { Icon, IconType, Logo } from "../shared";
import { AnimatePresence, motion } from "framer-motion";
import { useMobileHeaderStore } from "@/lib/store";
import { Nav } from "./Header";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

type MobileMenuProps = {
  className?: string;
};

export const MobileMenu: FC<MobileMenuProps> = () => {
  const { open, toggleOpen } = useMobileHeaderStore();
  const pathname = usePathname();

  const t = useTranslations("Header");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    if (open) toggleOpen();
  }, [pathname]);

  const toggleMenu = () => toggleOpen();

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#90919c0f] p-[22px] hover:opacity-80 active:opacity-90"
      >
        <div>
          <Icon icon={IconType.BURGER_MENU} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex min-h-screen w-[100vw] flex-col justify-between bg-background px-10 py-[30px]"
            initial={{ transform: "translateX(100%)", opacity: 0 }}
            animate={{ transform: "translateX(0)", opacity: 1 }}
            exit={{ transform: "translateX(100%)", opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                className="rounded-full bg-[#90919c0f] p-[22px] hover:opacity-80 active:opacity-90"
                onClick={toggleMenu}
              >
                <div>
                  <Icon icon={IconType.CLOSE} />
                </div>
              </button>
            </div>
            <Nav />
            <div className="pb-[105px]">
              <p className="text-sm text-primary">{t("getInTouch")}</p>
              <Link href="mailto:info@quitty.ch">
                <div className="text-lg text-text">info@quitty.ch</div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
