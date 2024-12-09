"use client";
import React, { useRef } from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useScroll } from "framer-motion";
import PromoLeft from "@/components/sections/promo-section/PromoLeft";
import PromoRight from "@/components/sections/promo-section/PromoRight";

const PromoSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <FadeIn>
      <section ref={targetRef} className="relative flex h-[500vh] w-full">
        <div className="relative w-full max-lg:w-full lg:flex lg:justify-between lg:gap-6">
          <div className="sticky top-[90px] flex h-[46vh] w-full items-center overflow-hidden lg:top-[45px] lg:h-screen lg:w-1/2">
            <PromoLeft scrollYProgress={scrollYProgress} />
          </div>
          <div className="sticky top-[calc(46vh+90px)] flex h-[54vh] w-full items-center overflow-hidden lg:top-[45px] lg:h-screen lg:w-1/2">
            <PromoRight scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default PromoSection;
