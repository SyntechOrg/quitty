"use client";
import React, { useRef } from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";

const InsightsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.5],
    [0, 1, 1, 0],
  );
  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8, 1],
    [0, 1, 1, 0],
  );

  const firstTextLineHeight = useTransform(
    scrollYProgress,
    [0, 0.2],
    [2.0, 1.4],
  );
  const secondTextLineHeight = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    [2.0, 1.4],
  );

  const firstTextTop = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.5],
    ["60vh", "50vh", "50vh", "30vh"],
  );
  const secondTextTop = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.8, 1],
    ["60vh", "50vh", "50vh", "30vh"],
  );

  return (
    <FadeIn>
      <section
        ref={targetRef}
        className="container relative flex h-[400vh] justify-between gap-6 max-lg:flex-col-reverse"
      >
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden lg:w-1/2">
          <div>
            <motion.div
              style={{
                opacity: firstTextOpacity,
                lineHeight: firstTextLineHeight,
                top: firstTextTop,
              }}
              className="absolute translate-y-[-50%]"
            >
              <p className="text-[16px] font-medium text-primary">
                Simplify Your Receipts
              </p>
              <h3 className="text-[52px] font-medium text-text">
                Discover your Spending Patterns with Ease
              </h3>
            </motion.div>
            <motion.div
              style={{
                opacity: secondTextOpacity,
                lineHeight: secondTextLineHeight,
                top: secondTextTop,
              }}
              className="absolute top-[50vh]  translate-y-[-50%]"
            >
              <p className="text-[16px] font-medium text-primary">
                See Your Spending at a Glance
              </p>
              <h4 className="text-[52px] font-medium text-text">
                Uncover Insights for Every Category you Track
              </h4>
            </motion.div>
          </div>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden lg:w-1/2">
          image
        </div>
      </section>
    </FadeIn>
  );
};

export default InsightsSection;
