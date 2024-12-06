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

  const categories = [
    { iconType: IconType.MONEY_BAG, backgroundColor: iconOneBackgroundColor },
    { iconType: IconType.MONEY_BAG, backgroundColor: iconTwoBackgroundColor },
    { iconType: IconType.MONEY_BAG, backgroundColor: iconThreeBackgroundColor },
    { iconType: IconType.MONEY_BAG, backgroundColor: iconFourBackgroundColor },
  ];

  const textElements = [
    {
      title: "Digital Receipts",
      description:
        "Instantly send receipts to customers’ smartphones, eliminating paper waste and making receipts easy to access. " +
        "Quitty helps businesses reduce their environmental footprint while offering customers the convenience of securely storing all their receipts. No more lost papers—just seamless, digital organization.",
      styles: {
        opacity: textOneOpacity,
        display: textOneDisplay,
        translateY: textOneTranslateY,
      },
    },
    {
      title: "Warranty Tracker",
      description:
        "Store receipts digitally, making warranty claims and returns effortless for customers and retailers. " +
        "Quitty ensures warranties are always accessible, removing the hassle of searching for proof of purchase. Streamline the process and provide peace of mind to customers.",
      styles: {
        opacity: textTwoOpacity,
        display: textTwoDisplay,
        translateY: textTwoTranslateY,
      },
    },
    {
      title: "Loyalty Rewards",
      description:
        "Reward customers with points for every purchase, driving engagement and repeat visits. " +
        "Quitty’s loyalty system encourages repeat purchases by offering redeemable points for discounts or perks from partnered brands. " +
        "Build long-term customer relationships with ease.",
      styles: {
        opacity: textThreeOpacity,
        display: textThreeDisplay,
        translateY: textThreeTranslateY,
      },
    },
    {
      title: "Spending Insights",
      description:
        "Provide customers with categorized spending reports to help them manage finances easily. " +
        "Quitty offers users a clear view of their spending habits through detailed charts. " +
        "Empower customers to make informed financial decisions and manage budgets confidently.",
      styles: {
        opacity: textFourOpacity,
        display: textFourDisplay,
        translateY: textFourTranslateY,
      },
    },
  ];

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
        <div className="mt-3 flex gap-1.5 max-lg:mx-auto max-lg:w-full max-lg:max-w-[480px] max-lg:justify-between lg:mt-9">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              style={{ backgroundColor: category.backgroundColor }}
              className="flex h-14 w-14 items-center justify-center rounded-full object-contain lg:h-24 lg:w-24"
            >
              <Icon
                icon={category.iconType}
                className="object-container h-[34px] w-[34px] lg:h-[50px] lg:w-[50px]"
              />
            </motion.div>
          ))}
        </div>
        {textElements.map((element, index) => (
          <motion.div
            key={index}
            style={element.styles}
            className="mx-auto mt-2 max-w-[520px] max-lg:text-center lg:mt-10"
          >
            <h4 className="mx-auto text-[32px] font-medium text-text lg:text-[52px]">
              {element.title}
            </h4>
            <p className="mt-3 text-[16px] leading-[1.5] text-text lg:mt-7 lg:text-[18px] lg:leading-[1.6]">
              {element.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PromoLeft;
