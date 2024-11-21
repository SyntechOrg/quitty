import React, { FC } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import InsightRow from "@/components/insight-row/InsightRow";
import { IconType } from "@/components/shared";

const insightRows = [
  {
    name: "Travel",
    percentage: 30,
    icon: IconType.KLEIDUNG_OUTLINE,
    color: "113, 238, 56",
  },
  {
    name: "Auto",
    percentage: 20,
    icon: IconType.KLEIDUNG_OUTLINE,
    color: "255, 199, 0",
  },
  {
    name: "Möbel",
    percentage: 50,
    icon: IconType.KLEIDUNG_OUTLINE,
    color: "0, 201, 137",
  },
  {
    name: "Lebensmittel",
    percentage: 20,
    icon: IconType.KLEIDUNG_OUTLINE,
    color: "58, 69, 241",
  },
  {
    name: "Kleidung",
    percentage: 20,
    icon: IconType.KLEIDUNG_OUTLINE,
    color: "220, 0, 0",
  },
  {
    name: "Restaurant",
    percentage: 20,
    icon: IconType.KLEIDUNG_OUTLINE,
    color: "112, 48, 193",
  },
  {
    name: "Sport",
    percentage: 20,
    icon: IconType.KLEIDUNG_OUTLINE,
    color: "77, 193, 240",
  },
];

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
    [0, 0.3, 0.9, 1],
    [0, 1, 1, 0],
  );

  const divScale = useTransform(
    props.scrollYProgress,
    [0, 0.35, 0.9, 1],
    [0.2, 1, 1, 0.2],
  );

  const divRotate = useTransform(
    props.scrollYProgress,
    [0, 0.35, 0.9, 1],
    ["-45deg", "0deg", "0deg", "45deg"],
  );

  const divBackground = useTransform(
    props.scrollYProgress,
    [0.2, 0.5, 0.9, 0.95],
    ["#d2f4f000", "#d2f4f0", "#d2f4f0", "#d2f4f000"],
  );

  const divTranslateY = useTransform(
    props.scrollYProgress,
    [0, 0.2, 0.9, 1],
    ["40%", "0%", "0%", "-30%"],
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
        {insightRows.map((item, index) => (
          <InsightRow
            key={index}
            index={index}
            name={item.name}
            percentage={item.percentage}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default InsightsRight;
