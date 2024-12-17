"use client";

import React, { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisWrapper = (props: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <>{props.children}</>;
};

export default LenisWrapper;
