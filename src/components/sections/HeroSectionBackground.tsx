"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Icon, IconType } from "@/components/shared";
import { FadeIn } from "../fade-in/FadeIn";

const HeroSectionBackground = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
  });

  const fullDisappear = useTransform(scrollY, [40, 500], [1, 0]);
  const almostDisappear = useTransform(scrollY, [40, 500], [1, 0.3]);
  const changeMaxWidth = useTransform(scrollY, [40, 1000], [1179, 1600]);
  const changeWidth = useTransform(scrollY, [40, 700], ["55vw", "95vw"]);

  return (
    <FadeIn>
      <div
        ref={ref}
        className="min-h-[calc(100vh-106px)] md:min-h-[calc(100vh-114px)]"
      >
        <motion.div
          style={{
            maxWidth: changeMaxWidth,
            width: changeWidth,
            minWidth: 250,
          }}
          className="fixed left-[50%] top-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%]"
        >
          <motion.div
            style={{
              opacity: fullDisappear,
            }}
            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <Icon
              icon={IconType.HERO_STAR}
              className="relative h-full max-h-[30vh] w-[16vw] max-w-[367px]"
            />
          </motion.div>
          <motion.div
            style={{
              opacity: almostDisappear,
            }}
            className="absolute top-[50%] translate-y-[-50%]"
          >
            <Icon
              icon={IconType.HERO_ARROW_LEFT}
              className="relative h-full max-h-[65vh] w-[25vw] max-w-[300px]"
            />
          </motion.div>
          <motion.div
            style={{
              opacity: almostDisappear,
            }}
            className="absolute right-0 top-[50%] translate-y-[-50%]"
          >
            <Icon
              icon={IconType.HERO_ARROW_RIGHT}
              className="relative h-full max-h-[65vh] w-[25vw] max-w-[300px]"
            />
          </motion.div>
          <motion.div
            style={{
              opacity: fullDisappear,
            }}
            className="absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%]"
          >
            <Icon
              icon={IconType.SYNTECH_HERO_TEXT}
              className="relative mx-auto max-h-[65vh] w-[90%] max-w-[1031px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </FadeIn>
  );
};

export default HeroSectionBackground;
