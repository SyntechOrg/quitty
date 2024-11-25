"use client";
import React, { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon, IconType } from "@/components/shared";

interface InsightRowProps {
  index: number;
  icon: IconType;
  name: string;
  percentage: number;
  color: string;
}

const InsightRow: FC<InsightRowProps> = (props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const overlayInset = useTransform(scrollYProgress, [0.4, 0.8], ["0", "4px"]);

  const overlayRadius = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ["40px", "36px"],
  );

  const overlayBackground = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8],
    [
      `linear-gradient(90deg, rgba(${props.color}, 1) 0%, rgba(${props.color}, 1) 100%)`,
      `linear-gradient(90deg, rgba(${props.color}, 1) 0%, rgba(${props.color}, 0.5) 50%)`,
      `linear-gradient(90deg, rgba(${props.color}, 0.40) 0%, rgba(${props.color}, 0.00) 22%)`,
    ],
  );

  const overlayTextOpacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);

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
          {props.name}
        </motion.p>
      </motion.div>
      <div className="flex items-center gap-1.5 md:gap-4">
        <div className="pr-1 md:pl-3">
          <Icon icon={props.icon} className="h-8 w-8 md:h-11 md:w-11" />
        </div>
        <p className="text-[21px] font-semibold leading-[1.4] text-[#373A40] md:text-[28px]">
          {props.name}
        </p>
      </div>
      <div className="pl-1 md:pr-5">
        <p className="text-[17px] font-medium leading-[1.4] text-[#212424] md:text-[24px]">
          {props.percentage}%
        </p>
      </div>
    </motion.div>
  );
};

export default InsightRow;
