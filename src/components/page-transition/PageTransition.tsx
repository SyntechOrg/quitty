"use client";
import { ReactNode, type FC } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const router = usePathname();

  return (
    <motion.div
      key={router}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        animation: "ease-in-out",
        transition: { duration: 0.5 },
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 50,
      }}
    >
      {children}
    </motion.div>
  );
};
