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
        className="w-5 h-5 flex items-center justify-center"
      >
        <Icon icon={open ? IconType.CLOSE : IconType.MENU} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-background min-h-screen p-8 z-[100] flex flex-col justify-between"
            initial={{ transform: "translateX(100%)", opacity: 0 }}
            animate={{ transform: "translateX(0%)", opacity: 1 }}
            exit={{ transform: "translateX(100%)", opacity: 0 }}
          >
            <div className="flex justify-between items-center">
              <Logo />
              <button className="mr-5" onClick={toggleMenu}>
                <Icon icon={IconType.CLOSE} />
              </button>
            </div>
            <div>
              <p className="text-[#2D2D31] text-sm mb-5">Menu</p>
              <Nav />
            </div>
            <div className="pb-[105px]">
              <p className="text-[#2D2D31] text-sm">Get in touch</p>
              <div className="text-lg text-[#D4D4D4]">info@syn-tech.ch</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
