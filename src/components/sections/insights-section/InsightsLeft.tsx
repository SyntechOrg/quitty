"use client";
import React, { FC } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface InsightsLeftProps {
  scrollYProgress: MotionValue<number>;
}

const InsightsLeft: FC<InsightsLeftProps> = (props) => {
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
    ["60vh", "50vh", "50vh", "30vh"],
  );
  const secondTextTop = useTransform(
    props.scrollYProgress,
    [0.5, 0.65, 0.85, 1],
    ["60vh", "50vh", "50vh", "30vh"],
  );

  return (
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
        className="absolute top-[50vh] translate-y-[-50%]"
      >
        <p className="text-[16px] font-medium text-primary">
          See Your Spending at a Glance
        </p>
        <h4 className="text-[52px] font-medium text-text">
          Uncover Insights for Every Category you Track
        </h4>
      </motion.div>
    </div>
  );
};

export default InsightsLeft;
