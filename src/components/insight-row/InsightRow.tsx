"use client";
import React, { FC, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Icon, IconType } from "@/components/shared";

interface InsightRowProps {
  index: number;
  icon?: IconType;
  name: string;
  percentage?: number;
  color: string;
  scrollYProgress: MotionValue<number>;
}

const InsightRow: FC<InsightRowProps> = (props) => {
  const overlayInset = useTransform(
    props.scrollYProgress,
    [0.4, 0.8],
    ["0", "4px"],
  );

  const overlayRadius = useTransform(
    props.scrollYProgress,
    [0.6, 0.8],
    ["40px", "36px"],
  );

  const overlayBackground = useTransform(
    props.scrollYProgress,
    [0.5, 0.55, 0.6],
    [
      `linear-gradient(90deg, rgba(${props.color}, 1) 0%, rgba(${props.color}, 1) 100%)`,
      `linear-gradient(90deg, rgba(${props.color}, 1) 0%, rgba(${props.color}, 0.5) 50%)`,
      `linear-gradient(90deg, rgba(${props.color}, 0.40) 0%, rgba(${props.color}, 0.00) 22%)`,
    ],
  );

  const overlayTextOpacity = useTransform(
    props.scrollYProgress,
    [0.5, 0.55],
    [1, 0],
  );

  const rowMarginTop = useTransform(
    props.scrollYProgress,
    [0, 0.5],
    [`-80px`, "10px"],
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
          className="text-[22px] font-semibold leading-[1.4] text-white sm:text-[32px]"
        >
          {props.name}
        </motion.p>
      </motion.div>
      <div className="flex items-center gap-2 sm:gap-4">
        {props.icon && (
          <>
            <div className="px-1 sm:pl-3">
              <Icon icon={props.icon} className="h-7 w-7 sm:h-11 sm:w-11" />
            </div>
            <p className="text-[21px] font-semibold leading-[1.4] text-[#373A40] sm:text-[28px]">
              {props.name}
            </p>
          </>
        )}
      </div>
      <div className="pl-1 sm:pr-5">
        {props.percentage && (
          <p className="text-[17px] font-medium leading-[1.4] text-[#212424] sm:text-[24px]">
            {props.percentage}%
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default InsightRow;
