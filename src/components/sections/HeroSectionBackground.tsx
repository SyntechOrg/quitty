"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Icon, IconType } from "@/components/shared";

const HeroSectionBackground = () => {
  const [initialAnimation, setInitialAnimation] = useState(true);
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
  });

  const fullDisappear = useTransform(scrollY, [40, 500], [1, 0]);
  const fullDisappearLater = useTransform(scrollY, [400, 1000], [1, 0]);
  const fullDisappearEarly = useTransform(scrollY, [10, 150], [0.8, 0]);
  const almostDisappear = useTransform(scrollY, [40, 500], [1, 0.3]);
  const changeMaxWidth = useTransform(scrollY, [40, 1000], [1179, 1600]);
  const changeWidth = useTransform(scrollY, [40, 700], ["55vw", "95vw"]);

  const vh = typeof window !== "undefined" && window.innerHeight;

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialAnimation(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className="min-h-screen">
      <motion.div
        style={{
          maxWidth: changeMaxWidth,
          width: changeWidth,
          opacity: fullDisappearLater,
          minWidth: 250,
          translateX: "-50%",
        }}
        initial={initialAnimation ? { scale: 0, opacity: 0 } : false}
        animate={
          initialAnimation ? { scale: 1, opacity: 1 } : { scale: [1, 1.05, 1] }
        }
        transition={
          initialAnimation
            ? { duration: 1.5 }
            : { duration: 4, repeat: Infinity, repeatType: "reverse" }
        }
        className="fixed left-[50%] top-[50%] z-[-1]"
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
      <motion.div
        style={{
          opacity: fullDisappearEarly,
          top: "90dvh",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute left-[50%] top-[90dvh] translate-x-[-50%] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={() => window.scrollTo({ top: vh || 300, behavior: "smooth" })}
      >
        <Icon
          icon={IconType.MOUSE}
          className="relative mx-auto max-h-[30px] w-[90%] max-w-[30px] lg:max-h-[36px] lg:max-w-[36px]"
        />
      </motion.div>
    </div>
  );
};

export default HeroSectionBackground;
