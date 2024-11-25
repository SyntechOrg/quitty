"use client";
import React, { useRef } from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useScroll } from "framer-motion";
import InsightsLeft from "@/components/sections/insights-section/InsightsLeft";
import InsightsRight from "@/components/sections/insights-section/InsightsRight";

const InsightsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <FadeIn>
      <section
        ref={targetRef}
        className="container relative flex h-[400vh] w-full"
      >
        <div className="relative w-full max-lg:w-full lg:flex lg:justify-between lg:gap-6">
          <div className="sticky top-[115px] flex h-[45vh] w-full items-center overflow-hidden lg:top-[45px] lg:h-screen lg:w-1/2">
            <InsightsLeft scrollYProgress={scrollYProgress} />
          </div>
          <div className="sticky top-[43vh] flex h-[53vh] w-full items-center overflow-hidden lg:top-[45px] lg:h-screen lg:w-1/2">
            <InsightsRight scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default InsightsSection;
