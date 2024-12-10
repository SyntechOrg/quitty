"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisWrapper = (props: { children: any }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <>{props.children}</>;
};

export default LenisWrapper;
