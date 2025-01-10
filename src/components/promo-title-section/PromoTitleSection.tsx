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
  const scale = useTransform(scrollYProgress, [0.25, 0.6, 0.8, 1], [0.75, 1, 1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.6, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={targetRef} className="h-[200vh] mt-[-100vh] mb-[-100vh]">
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-[calc(50vh-90px)]  max-w-[650px] text-center text-text mx-auto"
      >
        <TextShimmer
          className="text-[32px] font-medium leading-[1.4] lg:text-[58px]"
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
