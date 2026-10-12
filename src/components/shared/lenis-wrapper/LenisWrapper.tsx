"use client";

import React, { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";

const LenisWrapper = (props: { children: ReactNode }) => {
  const pathname = usePathname();
  const useNativeScroll = /^\/(de|en)\/app\/?$/.test(pathname ?? "");

  useEffect(() => {
    // Keep vertical page scroll and the native horizontal journey in one system.
    if (useNativeScroll) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let frame = 0;

    const stop = () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
    const update = () => {
      stop();
      if (preference.matches) return;
      lenis = new Lenis();
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    };

    update();
    preference.addEventListener("change", update);
    return () => {
      preference.removeEventListener("change", update);
      stop();
    };
  }, [useNativeScroll]);

  return <>{props.children}</>;
};

export default LenisWrapper;
