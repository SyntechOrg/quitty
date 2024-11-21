"use client";
import React, { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon, IconType } from "@/components/shared";

interface InsightRowProps {
  index?: number;
  img?: string;
  name?: string;
  percentage?: number;
  color?: string;
  top?: string;
}

const InsightRow: FC<InsightRowProps> = (props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const overlayInset = useTransform(scrollYProgress, [0.4, 0.8], ["0", "4px"]);

  const overlayRadius = useTransform(
    scrollYProgress,
    [0.4, 0.8],
    ["40px", "36px"],
  );

  const overlayBackground = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.75],
    [
      "linear-gradient(90deg, rgba(220, 0, 0, 1) 0%, rgba(220, 0, 0, 1) 100%)",
      "linear-gradient(90deg, rgba(220, 0, 0, 1) 0%, rgba(220, 0, 0, 0.6) 60%)",
      "linear-gradient(90deg, rgba(220, 0, 0, 0.40) 0%, rgba(220, 0, 0, 0.00) 22%)",
    ],
  );

  const overlayTextOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);

  const rowMarginTop = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [`${props.index * -40}px`, "10px"],
  );

  return (
    <motion.div
      style={{ marginTop: rowMarginTop }}
      className="relative mx-auto flex h-[calc(20%-11px)] w-[85%] items-center justify-between rounded-[40px] bg-white p-4"
    >
      <motion.div
        className="absolute flex items-center justify-center"
        style={{
          background: overlayBackground,
          inset: overlayInset,
          borderRadius: overlayRadius,
        }}
      >
        <motion.p
          style={{ opacity: overlayTextOpacity }}
          className="text-[26px] font-semibold leading-[1.4] text-white lg:text-[32px]"
        >
          Restaurant
        </motion.p>
      </motion.div>
      <div className="flex items-center gap-5">
        <div className="px-5">
          <Icon icon={IconType.KLEIDUNG_OUTLINE} className="h-12 w-12" />
        </div>
        <p className="text-[26px] font-semibold leading-[1.4] text-[#373A40] lg:text-[32px]">
          Restaurant
        </p>
      </div>
      <div className="pr-6">
        <p className="text-[22px] font-medium leading-[1.4] text-[#212424] lg:text-[26px]">
          30%
        </p>
      </div>
    </motion.div>
  );
};

export default InsightRow;
