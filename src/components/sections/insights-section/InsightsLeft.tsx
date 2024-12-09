"use client";
import React, { FC } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";

interface InsightsLeftProps {
  scrollYProgress: MotionValue<number>;
}

const InsightsLeft: FC<InsightsLeftProps> = (props) => {
  const isLargeScreen = useIsLargeScreen();

  const firstTextOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.1, 0.35, 0.5],
    [0, 1, 1, 0],
  );

  const secondTextOpacity = useTransform(
    props.scrollYProgress,
    [0.5, 0.6, 0.85, 1],
    [0, 1, 1, 0],
  );

  const firstTextLineHeight = useTransform(
    props.scrollYProgress,
    [0, 0.2, 0.35, 0.5],
    [2.0, 1.4, 1.4, 1],
  );
  const secondTextLineHeight = useTransform(
    props.scrollYProgress,
    [0.5, 0.7, 0.85, 1],
    [2.0, 1.4, 1.4, 1],
  );

  const firstTextTop = useTransform(
    props.scrollYProgress,
    [0, 0.15, 0.35, 0.5],
    isLargeScreen
      ? ["60vh", "50vh", "50vh", "30vh"]
      : ["0vh", "0vh", "0vh", "0vh"],
  );

  const secondTextTop = useTransform(
    props.scrollYProgress,
    [0.5, 0.65, 0.85, 1],
    isLargeScreen
      ? ["60vh", "50vh", "50vh", "30vh"]
      : ["0vh", "0vh", "0vh", "0vh"],
  );
  return (
    <div>
      <motion.div
        style={{
          opacity: firstTextOpacity,
          lineHeight: isLargeScreen ? firstTextLineHeight : 1.4,
          top: firstTextTop,
        }}
        className="absolute max-lg:w-full max-lg:text-center lg:translate-y-[-50%]"
      >
        <p className="text-[16px] font-medium text-primary">
          Simplify Your Receipts
        </p>
        <h3 className="mx-auto text-[32px] font-medium text-text max-lg:max-w-[520px] lg:text-[52px]">
          Discover your Spending Patterns with Ease
        </h3>
      </motion.div>
      <motion.div
        style={{
          opacity: secondTextOpacity,
          lineHeight: isLargeScreen ? secondTextLineHeight : 1.4,
          top: secondTextTop,
        }}
        className="absolute top-[50vh] max-lg:w-full max-lg:text-center lg:translate-y-[-50%]"
      >
        <p className="text-[16px] font-medium text-primary">
          See Your Spending at a Glance
        </p>
        <h4 className="mx-auto text-[32px] font-medium text-text max-lg:max-w-[520px] lg:text-[52px]">
          Uncover Insights for Every Category you Track
        </h4>
      </motion.div>
    </div>
  );
};

export default InsightsLeft;
