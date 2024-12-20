"use client";
import React, { FC } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import Icon from "@/components/shared/icon/Icon";
import { IconType } from "@/components/shared";
import { useTranslations } from "next-intl";

interface PromoLeftProps {
  scrollYProgress: MotionValue<number>;
}

const PromoLeft: FC<PromoLeftProps> = (props) => {
  const divOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  const iconOneBackgroundColor = useTransform(
    props.scrollYProgress,
    [0, 0.02, 0.23, 0.25],
    ["#ffffff", "#00C9A5", "#00C9A5", "#ffffff"]
  );

  const iconOneOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.01, 0.24, 0.25],
    [1, 0, 0, 1]
  );

  const iconOneActiveOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.01, 0.24, 0.25],
    [0, 1, 1, 0]
  );

  const iconTwoBackgroundColor = useTransform(
    props.scrollYProgress,
    [0.25, 0.27, 0.48, 0.5],
    ["#fff", "#00C9A5", "#00C9A5", "#fff"]
  );

  const iconTwoOpacity = useTransform(
    props.scrollYProgress,
    [0.25, 0.26, 0.49, 0.5],
    [1, 0, 0, 1]
  );

  const iconTwoActiveOpacity = useTransform(
    props.scrollYProgress,
    [0.25, 0.26, 0.49, 0.5],
    [0, 1, 1, 0]
  );

  const iconThreeBackgroundColor = useTransform(
    props.scrollYProgress,
    [0.5, 0.52, 0.73, 0.75],
    ["#fff", "#00C9A5", "#00C9A5", "#fff"]
  );

  const iconThreeOpacity = useTransform(
    props.scrollYProgress,
    [0.5, 0.51, 0.74, 0.75],
    [1, 0, 0, 1]
  );

  const iconThreeActiveOpacity = useTransform(
    props.scrollYProgress,
    [0.5, 0.51, 0.74, 0.75],
    [0, 1, 1, 0]
  );

  const iconFourBackgroundColor = useTransform(
    props.scrollYProgress,
    [0.75, 0.77, 0.98, 1.1],
    ["#fff", "#00C9A5", "#00C9A5", "#fff"]
  );

  const iconFourOpacity = useTransform(
    props.scrollYProgress,
    [0.75, 0.76, 0.99, 1.1],
    [1, 0, 0, 1]
  );

  const iconFourActiveOpacity = useTransform(
    props.scrollYProgress,
    [0.75, 0.76, 0.99, 1.1],
    [0, 1, 1, 0]
  );

  const textOneOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.05, 0.2, 0.25],
    [0, 1, 1, 0]
  );

  const textTwoOpacity = useTransform(
    props.scrollYProgress,
    [0.25, 0.3, 0.45, 0.5],
    [0, 1, 1, 0]
  );

  const textThreeOpacity = useTransform(
    props.scrollYProgress,
    [0.5, 0.55, 0.7, 0.75],
    [0, 1, 1, 0]
  );

  const textFourOpacity = useTransform(
    props.scrollYProgress,
    [0.75, 0.8, 0.95, 1],
    [0, 1, 1, 0]
  );

  const textOneDisplay = useTransform(
    props.scrollYProgress,
    [0, 0.25],
    ["block", "none"]
  );

  const textTwoDisplay = useTransform(
    props.scrollYProgress,
    [0.25, 0.250001, 0.5],
    ["none", "block", "none"]
  );

  const textThreeDisplay = useTransform(
    props.scrollYProgress,
    [0.5, 0.500001, 0.75],
    ["none", "block", "none"]
  );

  const textFourDisplay = useTransform(
    props.scrollYProgress,
    [0.75, 0.750001],
    ["none", "block"]
  );

  const textOneTranslateY = useTransform(
    props.scrollYProgress,
    [0, 0.1, 0.15, 0.25],
    ["20px", "0px", "0px", "-15px"]
  );

  const textTwoTranslateY = useTransform(
    props.scrollYProgress,
    [0.25, 0.3, 0.4, 0.5],
    ["20px", "0px", "0px", "-15px"]
  );

  const textThreeTranslateY = useTransform(
    props.scrollYProgress,
    [0.5, 0.55, 0.65, 0.75],
    ["20px", "0px", "0px", "-15px"]
  );

  const textFourTranslateY = useTransform(
    props.scrollYProgress,
    [0.75, 0.8, 0.9, 1],
    ["20px", "0px", "0px", "-15px"]
  );

  const categories = [
    {
      iconType: IconType.BILL,
      activeIcon: IconType.BILL_ACTIVE,
      backgroundColor: iconOneBackgroundColor,
      iconOpacity: iconOneOpacity,
      iconActiveOpacity: iconOneActiveOpacity,
    },
    {
      iconType: IconType.REWARD,
      activeIcon: IconType.REWARD_ACTIVE,
      backgroundColor: iconTwoBackgroundColor,
      iconOpacity: iconTwoOpacity,
      iconActiveOpacity: iconTwoActiveOpacity,
    },
    {
      iconType: IconType.CHINESE_COIN,
      activeIcon: IconType.CHINESE_COIN_ACTIVE,
      backgroundColor: iconThreeBackgroundColor,
      iconOpacity: iconThreeOpacity,
      iconActiveOpacity: iconThreeActiveOpacity,
    },
    {
      iconType: IconType.MONEY_BAG,
      activeIcon: IconType.MONEY_BAG_ACTIVE,
      backgroundColor: iconFourBackgroundColor,
      iconOpacity: iconFourOpacity,
      iconActiveOpacity: iconFourActiveOpacity,
    },
  ];

  const textElements = [
    {
      title: "AdvantageTitle1",
      description: "AdvantageText1",
      styles: {
        opacity: textOneOpacity,
        display: textOneDisplay,
        translateY: textOneTranslateY,
      },
    },
    {
      title: "AdvantageTitle2",
      description: "AdvantageText2",
      styles: {
        opacity: textTwoOpacity,
        display: textTwoDisplay,
        translateY: textTwoTranslateY,
      },
    },
    {
      title: "AdvantageTitle3",
      description: "AdvantageText3",
      styles: {
        opacity: textThreeOpacity,
        display: textThreeDisplay,
        translateY: textThreeTranslateY,
      },
    },
    {
      title: "AdvantageTitle4",
      description: "AdvantageText4",
      styles: {
        opacity: textFourOpacity,
        display: textFourDisplay,
        translateY: textFourTranslateY,
      },
    },
  ];

  const t = useTranslations("Home");

  return (
    <motion.div
      style={{
        opacity: divOpacity,
      }}
    >
      <motion.div className="absolute max-lg:top-0 max-lg:w-full max-lg:text-center lg:translate-y-[-50%]">
        <p className="text-[16px] font-medium text-primary">
          {t("AdvantageUndertitle")}
        </p>
        <div className="mt-3 flex gap-1.5 max-lg:mx-auto max-lg:w-full max-lg:max-w-[480px] max-lg:justify-between lg:mt-9">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              style={{ backgroundColor: category.backgroundColor }}
              className="relative h-14 w-14 rounded-full object-contain lg:h-24 lg:w-24"
            >
              <motion.div
                style={{
                  opacity: category.iconOpacity,
                }}
                className="absolute left-[50%] top-[50%] h-[34px] w-[34px] translate-x-[-50%] translate-y-[-50%] lg:h-[50px] lg:w-[50px]"
              >
                <Icon
                  icon={category.iconType}
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <motion.div
                style={{
                  opacity: category.iconActiveOpacity,
                }}
                className="absolute left-[50%] top-[50%] h-[34px] w-[34px] translate-x-[-50%] translate-y-[-50%] lg:h-[50px] lg:w-[50px]"
              >
                <Icon
                  icon={category.activeIcon}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        {textElements.map((element, index) => (
          <motion.div
            key={index}
            style={element.styles}
            className="mx-auto mt-2 min-h-[255px] max-w-[520px] max-lg:text-center lg:mt-10 lg:min-h-[280px]"
          >
            <h4 className="mx-auto text-[32px] font-medium text-text lg:text-[52px]">
              {t(element.title)}
            </h4>
            <p className="mt-2.5 text-[16px] leading-[1.5] text-text lg:mt-7 lg:text-[18px] lg:leading-[1.6]">
              {t(element.description)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PromoLeft;
