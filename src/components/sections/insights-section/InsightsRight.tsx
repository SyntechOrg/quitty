import React, { FC } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import InsightRow from "@/components/insight-row/InsightRow";
import { IconType } from "@/components/shared";
import { useTranslations } from "next-intl";

const insightRows = [
  {
    name: "InsightCard1",
    percentage: undefined,
    icon: undefined,
    color: "113, 238, 56",
  },
  {
    name: "InsightCard2",
    percentage: undefined,
    icon: undefined,
    color: "255, 199, 0",
  },
  {
    name: "InsightCard3",
    percentage: 50,
    icon: IconType.MOEBEL_OUTLINE,
    color: "0, 201, 137",
  },
  {
    name: "InsightCard4",
    percentage: 20,
    icon: IconType.LEBENSMITTEL_OUTLINE,
    color: "58, 69, 241",
  },
  {
    name: "InsightCard5",
    percentage: 20,
    icon: IconType.KLEIDUNG_OUTLINE,
    color: "220, 0, 0",
  },
  {
    name: "InsightCard6",
    percentage: 20,
    icon: IconType.RESTAURANT_OUTLINE,
    color: "112, 48, 193",
  },
  {
    name: "InsightCard7",
    percentage: 20,
    icon: IconType.SPORT_OUTLINE,
    color: "77, 193, 240",
  },
];

interface InsightsRightProps {
  scrollYProgress: MotionValue<number>;
}

const InsightsRight: FC<InsightsRightProps> = (props) => {
  const divContentTranslateY = useTransform(
    props.scrollYProgress,
    [0.1, 0.3, 0.5],
    ["30%", "-0%", "-40%"]
  );

  const divContentOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0, 1, 1, 0]
  );

  const divScale = useTransform(
    props.scrollYProgress,
    [0, 0.3, 0.75, 1],
    [0.2, 1, 1, 0.75]
  );

  const divRotate = useTransform(
    props.scrollYProgress,
    [0, 0.3],
    ["-45deg", "0deg"]
  );

  const divBackground = useTransform(
    props.scrollYProgress,
    [0.2, 0.5, 0.85, 0.95],
    ["#d2f4f000", "#d2f4f0", "#d2f4f0", "#d2f4f000"]
  );

  const divTranslateY = useTransform(
    props.scrollYProgress,
    [0, 0.2, 0.85, 1],
    ["40%", "0%", "0%", "-15%"]
  );

  const t = useTranslations("Home");
  return (
    <motion.div
      style={{
        scale: divScale,
        backgroundColor: divBackground,
        translateY: divTranslateY,
        rotate: divRotate,
      }}
      className="relative h-full max-h-[720px] w-full overflow-hidden rounded-[40px] max-lg:mx-auto max-lg:max-w-[620px]
       lg:h-[70vh] lg:rounded-[80px]"
    >
      <motion.div
        className="relative h-full"
        style={{
          translateY: divContentTranslateY,
          opacity: divContentOpacity,
        }}
      >
        {insightRows.map((item, index) => (
          <InsightRow
            key={index}
            index={index}
            name={t(item.name)}
            percentage={item?.percentage}
            icon={item?.icon}
            color={item.color}
            scrollYProgress={props.scrollYProgress}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default InsightsRight;
