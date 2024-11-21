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
        className="container relative flex h-[400vh] justify-between gap-6 max-lg:w-full max-lg:flex-col-reverse"
      >
        <div className="sticky top-[45px] flex h-screen w-full items-center overflow-hidden lg:w-1/2">
          <InsightsLeft scrollYProgress={scrollYProgress} />
        </div>
        <div className="sticky top-[45px] flex h-screen w-full items-center overflow-hidden lg:w-1/2">
          <InsightsRight scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </FadeIn>
  );
};

export default InsightsSection;
