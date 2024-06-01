import React from "react";
import { Button, Icon, IconType } from "@/components/shared";
import QuickCard from "@/components/cards/QuickCard";
import BubbleAboutImage from "../../../public/assets/images/bubble-about-section.png";
import Image from "next/image";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";

const quickCardData = [
  { statistic: "+200", description: "AboutUs quickcard-1" },
  { statistic: "+10", description: "AboutUs quickcard-2" },
  { statistic: "10K", description: "AboutUs quickcard-3" },
  { statistic: "+20", description: "AboutUs quickcard-4" },
];

const AboutSection = () => {
  const t = useTranslations("Shared");
  return (
    <FadeIn
      className="container mt-[100px] flex flex-col justify-between gap-[40px] max-lg:text-center lg:mt-[150px] lg:flex-row
      lg:gap-[80px]"
    >
      <div className="max-w-[565px] backdrop-blur-[1px] max-lg:mx-auto">
        <Image
          src={BubbleAboutImage}
          alt="about"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full max-lg:mx-auto lg:w-1/2">
        <p className="category-text">{t("AboutUs category-1")}</p>
        <h4
          className="mt-[14px] w-11/12 text-[24px] leading-[1.4] tracking-[0.02em] max-lg:mx-auto md:mt-[16px]
        md:text-[32px] lg:mt-[20px] lg:text-[48px]"
        >
          {t("AboutUs heading-1")}
        </h4>
        <p
          className="mt-[12px] text-[15px] leading-[1.666] text-text max-lg:mx-auto sm:w-[80%] md:mt-[14px]
          lg:mt-[18px] lg:text-[18px]"
        >
          {t("AboutUs text-1")}
        </p>
        <div className="group mt-[20px] flex items-center max-lg:justify-center md:mt-[24px] lg:mt-[32px]">
          <Button to="/about">{t("AboutUs button-1")}</Button>
          <Button to="/about" className="px-[21px]">
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
        <div className="lg:mt:[40px] mt-[21px] flex flex-wrap items-center gap-1.5 text-left max-lg:justify-center md:mt-[28px]">
          {quickCardData.map((card, index) => (
            <QuickCard
              key={index}
              statistic={card.statistic}
              description={t(card.description)}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default AboutSection;
