"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {Icon, IconType} from "@/components/shared";

const Home = () => {
  const ref = useRef(null);
  const {scrollY} = useScroll({
    target: ref
  });

  const fullDisappear = useTransform(scrollY, [50, 200], [1, 0]);
  const almostDisappear = useTransform(scrollY, [50, 300], [1, 0.3]);
  const changeMaxWidth = useTransform(scrollY, [50, 300], [1232, 1600]);
  const changeWidth = useTransform(scrollY, [50, 300], ["85%", "90%"]);

  return (
    <div ref={ref}>
      <motion.div
        style={{
          maxWidth: changeMaxWidth,
          width: changeWidth,
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
            className="relative w-[25vw] h-full max-w-[300px] max-h-[65vh]"
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
          className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
        >
          <Icon
            icon={IconType.SYNTECH_HERO_TEXT}
            className="relative w-[75vw] max-w-[1200px] max-h-[65vh]"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="max-h-[680px] h-screen flex items-center justify-center"
      >
        {/*test23test3*/}
      </motion.div>
    </div>
  );
}

export default Home;
