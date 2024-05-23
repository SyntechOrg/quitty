"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {Icon, IconType} from "@/components/shared";

const HeroSection = () => {
  const ref = useRef(null);
  const {scrollY} = useScroll({
    target: ref
  });

  const fullDisappear = useTransform(scrollY, [40, 300], [1, 0]);
  const almostDisappear = useTransform(scrollY, [40, 500], [1, 0.3]);
  const changeMaxWidth = useTransform(scrollY, [40, 800], [1179, 1600]);
  const changeWidth = useTransform(scrollY, [40, 500], ["55vw", "95vw"]);

  return (
    <div ref={ref} className="min-h-[calc(100vh-114px)]">
      {/* 114px is the height of the header */}
      <motion.div
        style={{
          maxWidth: changeMaxWidth,
          width: changeWidth,
          minWidth: 250,
        }}
        className="fixed z-[-1] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
        <motion.div
          style={{
            opacity: fullDisappear,
          }}
          className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
        >
          <Icon
            icon={IconType.HERO_STAR}
            className="relative w-[16vw] h-full max-w-[367px] max-h-[30vh]"
          />
        </motion.div>
        <motion.div
          style={{
            opacity: almostDisappear,
          }}
          className="absolute top-[50%] translate-y-[-50%]">
          <Icon
            icon={IconType.HERO_ARROW_LEFT}
            className="relative w-[25vw] h-full max-w-[300px] max-h-[65vh]"
          />
        </motion.div>
        <motion.div
          style={{
            opacity: almostDisappear,
          }}
          className="absolute top-[50%] translate-y-[-50%] right-0">
          <Icon
            icon={IconType.HERO_ARROW_RIGHT}
            className="relative w-[25vw] h-full max-w-[300px] max-h-[65vh]"
          />
        </motion.div>
        <motion.div
          style={{
            opacity: fullDisappear,
          }}
          className="absolute w-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
        >
          <Icon
            icon={IconType.SYNTECH_HERO_TEXT}
            className="relative w-[90%] mx-auto max-w-[1031px] max-h-[65vh]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
