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
        className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#90919c0f] p-[22px]"
      >
        <div>
          <Icon icon={IconType.BURGER_MENU} />
        </div>
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
              <button
                className="mr-2.5 rounded-full bg-[#90919c0f] p-[22px]"
                onClick={toggleMenu}
              >
                <div>
                  <Icon icon={IconType.CLOSE} />
                </div>
              </button>
            </div>
            <Nav />
            <div className="pb-[105px]">
              <p className="text-sm text-[#2D2D31]">Get in touch</p>
              <div className="text-lg text-[#D4D4D4]">email@placeholder.ch</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
