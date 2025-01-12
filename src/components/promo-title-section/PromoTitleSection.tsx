"use client";
import React, { FC, useRef } from "react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { motion, useScroll, useTransform } from "framer-motion";

interface PromoTitleSectionProps {
  title: string;
  as?: React.ElementType;
}

const PromoTitleSection: FC<PromoTitleSectionProps> = (props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const scale = useTransform(scrollYProgress, [0.25, 0.6, 1], [0.8, 0.9, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0.25, 0.6, 0.9, 1],
    [0, 1, 1, 0],
  );

  return (
    <div ref={targetRef} className="-mb-[100vh] -mt-[100vh] h-[200vh]">
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-[calc(50vh-90px)]  mx-auto max-w-[650px] text-center text-text"
      >
        <TextShimmer
          className="flex h-[180px] items-center justify-center text-[32px] font-medium leading-[1.4] lg:text-[58px]"
          duration={3}
          spread={5}
          as={props.as}
        >
          {props.title}
        </TextShimmer>
      </motion.div>
    </div>
  );
};

export default PromoTitleSection;
