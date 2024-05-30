"use client";
import React, { FC, ReactNode } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AosTransitionProps {
  children: ReactNode;
}
export const AosTransition: FC<AosTransitionProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      duration: 600,
      offset: 250,
      delay: 150,
      anchorPlacement: "center-center",
    });
  }, []);

  return <>{children}</>;
};
