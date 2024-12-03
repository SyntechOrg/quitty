"use client";
import React, { FC } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import Icon from "@/components/shared/icon/Icon";
import { IconType } from "@/components/shared";

interface PromoLeftProps {
  scrollYProgress: MotionValue<number>;
}

const PromoLeft: FC<PromoLeftProps> = (props) => {
  const divOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );

  const iconOneBackgroundColor = useTransform(
    props.scrollYProgress,
    [0, 0.05, 0.2, 0.25],
    ["#ffffff", "#00C9A560", "#00C9A560", "#ffffff"],
  );

  const iconTwoBackgroundColor = useTransform(
    props.scrollYProgress,
    [0.25, 0.3, 0.45, 0.5],
    ["#fff", "#00C9A560", "#00C9A560", "#fff"],
  );

  const iconThreeBackgroundColor = useTransform(
    props.scrollYProgress,
    [0.5, 0.55, 0.7, 0.75],
    ["#fff", "#00C9A560", "#00C9A560", "#fff"],
  );

  const iconFourBackgroundColor = useTransform(
    props.scrollYProgress,
    [0.75, 0.8, 0.95, 1.1],
    ["#fff", "#00C9A560", "#00C9A560", "#fff"],
  );

  const textOneOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.05, 0.2, 0.25],
    [0, 1, 1, 0],
  );

  const textTwoOpacity = useTransform(
    props.scrollYProgress,
    [0.25, 0.3, 0.45, 0.5],
    [0, 1, 1, 0],
  );

  const textThreeOpacity = useTransform(
    props.scrollYProgress,
    [0.5, 0.55, 0.7, 0.75],
    [0, 1, 1, 0],
  );

  const textFourOpacity = useTransform(
    props.scrollYProgress,
    [0.75, 0.8, 0.95, 1],
    [0, 1, 1, 0],
  );

  const textOneDisplay = useTransform(
    props.scrollYProgress,
    [0, 0.25],
    ["block", "none"],
  );

  const textTwoDisplay = useTransform(
    props.scrollYProgress,
    [0.25, 0.250001, 0.5],
    ["none", "block", "none"],
  );

  const textThreeDisplay = useTransform(
    props.scrollYProgress,
    [0.5, 0.500001, 0.75],
    ["none", "block", "none"],
  );

  const textFourDisplay = useTransform(
    props.scrollYProgress,
    [0.75, 0.750001],
    ["none", "block"],
  );

  const textOneTranslateY = useTransform(
    props.scrollYProgress,
    [0, 0.1, 0.15, 0.25],
    ["20px", "0px", "0px", "-15px"],
  );

  const textTwoTranslateY = useTransform(
    props.scrollYProgress,
    [0.25, 0.3, 0.4, 0.5],
    ["20px", "0px", "0px", "-15px"],
  );

  const textThreeTranslateY = useTransform(
    props.scrollYProgress,
    [0.5, 0.55, 0.65, 0.75],
    ["20px", "0px", "0px", "-15px"],
  );

  const textFourTranslateY = useTransform(
    props.scrollYProgress,
    [0.75, 0.8, 0.9, 1],
    ["20px", "0px", "0px", "-15px"],
  );

  return (
    <motion.div
      style={{
        opacity: divOpacity,
      }}
    >
      <motion.div className="absolute max-lg:top-0 max-lg:w-full max-lg:text-center lg:translate-y-[-50%]">
        <p className="text-[16px] font-medium text-primary">
          Advantages of Quitty
        </p>
        <div className="mt-5 flex gap-1.5 max-lg:mx-auto max-lg:w-full max-lg:max-w-[480px] max-lg:justify-between lg:mt-9">
          <motion.div
            style={{ backgroundColor: iconOneBackgroundColor }}
            className="flex h-16 w-16 items-center justify-center rounded-full object-contain lg:h-24 lg:w-24"
          >
            <Icon
              icon={IconType.MONEY_BAG}
              className="object-container h-[42px] w-[42px] lg:h-[50px] lg:w-[50px]"
            />
          </motion.div>
          <motion.div
            style={{ backgroundColor: iconTwoBackgroundColor }}
            className="flex h-16 w-16 items-center justify-center rounded-full object-contain lg:h-24 lg:w-24"
          >
            <Icon
              icon={IconType.MONEY_BAG}
              className="object-container h-[42px] w-[42px] lg:h-[50px] lg:w-[50px]"
            />
          </motion.div>
          <motion.div
            style={{ backgroundColor: iconThreeBackgroundColor }}
            className="flex h-16 w-16 items-center justify-center rounded-full object-contain lg:h-24 lg:w-24"
          >
            <Icon
              icon={IconType.MONEY_BAG}
              className="object-container h-[42px] w-[42px] lg:h-[50px] lg:w-[50px]"
            />
          </motion.div>
          <motion.div
            style={{ backgroundColor: iconFourBackgroundColor }}
            className="flex h-16 w-16 items-center justify-center rounded-full object-contain lg:h-24 lg:w-24"
          >
            <Icon
              icon={IconType.MONEY_BAG}
              className="object-container h-[42px] w-[42px] lg:h-[50px] lg:w-[50px]"
            />
          </motion.div>
        </div>
        <motion.div
          style={{
            opacity: textOneOpacity,
            display: textOneDisplay,
            translateY: textOneTranslateY,
          }}
          className="mx-auto mt-3 max-w-[520px] max-lg:text-center lg:mt-10"
        >
          <h4 className="mx-auto text-[32px] font-medium text-text lg:text-[52px]">
            Guarantee
          </h4>
          <p className="mt-3 text-[16px] leading-[1.6] text-text lg:mt-7 lg:text-[18px]">
            Unleash your full potential with our cross-workout sessions,
            blending strength, agility, and endurance training for a
            transformative fitness experience like never before. Agility, and
            endurance training for a transformative fitness experience like
            never before.
          </p>
        </motion.div>
        <motion.div
          style={{
            opacity: textTwoOpacity,
            display: textTwoDisplay,
            translateY: textTwoTranslateY,
          }}
          className="mx-auto mt-3 max-w-[520px] max-lg:text-center lg:mt-10"
        >
          <h4 className="mx-auto text-[32px] font-medium text-text lg:text-[52px]">
            Guarantee
          </h4>
          <p className="mt-3 text-[16px] leading-[1.6] text-text lg:mt-7 lg:text-[18px]">
            Unleash your full potential with our cross-workout sessions,
            blending strength, agility, and endurance training for a
            transformative fitness experience like never before. Agility, and
            endurance training for a transformative fitness experience like
            never before.
          </p>
        </motion.div>
        <motion.div
          style={{
            opacity: textThreeOpacity,
            display: textThreeDisplay,
            translateY: textThreeTranslateY,
          }}
          className="mx-auto mt-3 max-w-[520px] max-lg:text-center lg:mt-10"
        >
          <h4 className="mx-auto text-[32px] font-medium text-text lg:text-[52px]">
            Guarantee
          </h4>
          <p className="mt-3 text-[16px] leading-[1.6] text-text lg:mt-7 lg:text-[18px]">
            Unleash your full potential with our cross-workout sessions,
            blending strength, agility, and endurance training for a
            transformative fitness experience like never before. Agility, and
            endurance training for a transformative fitness experience like
            never before.
          </p>
        </motion.div>
        <motion.div
          style={{
            opacity: textFourOpacity,
            display: textFourDisplay,
            translateY: textFourTranslateY,
          }}
          className="mx-auto mt-3 max-w-[520px] max-lg:text-center lg:mt-10"
        >
          <h4 className="mx-auto text-[32px] font-medium text-text lg:text-[52px]">
            Guarantee
          </h4>
          <p className="mt-3 text-[16px] leading-[1.6] text-text lg:mt-7 lg:text-[18px]">
            Unleash your full potential with our cross-workout sessions,
            blending strength, agility, and endurance training for a
            transformative fitness experience like never before. Agility, and
            endurance training for a transformative fitness experience like
            never before.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PromoLeft;
