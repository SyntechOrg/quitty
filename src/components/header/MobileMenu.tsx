"use client";
import { useEffect, type FC } from "react";
import { Icon, IconType, Logo } from "../shared";
import { AnimatePresence, motion } from "framer-motion";
import { useMobileHeaderStore } from "@/lib/store";
import { Nav } from "./Header";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  className?: string;
};

export const MobileMenu: FC<MobileMenuProps> = () => {
  const { open, toggleOpen } = useMobileHeaderStore();
  const pathname = usePathname();

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
        className="flex h-5 w-5 items-center justify-center"
      >
        <Icon icon={open ? IconType.CLOSE : IconType.MENU} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex min-h-screen w-[100vw] flex-col justify-between bg-background p-8"
            initial={{ transform: "translateX(100%)", opacity: 0 }}
            animate={{ transform: "translateX(0)", opacity: 1 }}
            exit={{ transform: "translateX(100%)", opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button className="mr-5" onClick={toggleMenu}>
                <Icon icon={IconType.CLOSE} />
              </button>
            </div>
            <div>
              <p className="mb-5 text-sm text-[#2D2D31]">Menu</p>
              <Nav />
            </div>
            <div className="pb-[105px]">
              <p className="text-sm text-[#2D2D31]">Get in touch</p>
              <div className="text-lg text-[#D4D4D4]">office@syn-tech.ch</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
