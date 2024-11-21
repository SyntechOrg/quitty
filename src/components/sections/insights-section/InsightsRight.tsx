import React, { FC } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import InsightRow from "@/components/insight-row/InsightRow";

interface InsightsRightProps {
  scrollYProgress: MotionValue<number>;
}

const InsightsRight: FC<InsightsRightProps> = (props) => {
  const divContentTranslateY = useTransform(
    props.scrollYProgress,
    [0.1, 0.5],
    ["0%", "-40%"],
  );

  const divContentOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.3],
    [0, 1],
  );

  const divScale = useTransform(props.scrollYProgress, [0, 0.35], ["0.2", "1"]);

  const divRotate = useTransform(
    props.scrollYProgress,
    [0, 0.35],
    ["-45deg", "0deg"],
  );

  const divBackground = useTransform(
    props.scrollYProgress,
    [0.2, 0.5],
    ["#d2f4f000", "#d2f4f0"],
  );

  const divTranslateY = useTransform(
    props.scrollYProgress,
    [0, 0.2],
    ["40%", "0%"],
  );

  return (
    <motion.div
      style={{
        scale: divScale,
        backgroundColor: divBackground,
        translateY: divTranslateY,
        rotate: divRotate,
      }}
      className="relative h-[70vh] max-h-[720px] w-full overflow-hidden rounded-[40px] lg:rounded-[80px]"
    >
      <motion.div
        className="h-full"
        style={{
          translateY: divContentTranslateY,
          opacity: divContentOpacity,
        }}
      >
        {[...Array(7)].map((_, index) => (
          <InsightRow key={index} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default InsightsRight;
