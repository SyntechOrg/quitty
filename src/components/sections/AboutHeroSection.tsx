import React from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/fade-in/FadeIn";
import HeroVideo from "@/components/heroVideo/HeroVideo";

const AboutHeroSection = () => {
  const t = useTranslations("About Us");

  return (
    <div className="relative mx-auto w-full max-w-[1920px]">
      <HeroVideo />
      <FadeIn className="container relative flex max-h-[850px] items-center max-lg:my-32 lg:h-[calc(100vh-114px)]">
        <div className="w-full max-w-[520px] max-lg:mx-auto max-lg:text-center lg:w-1/2">
          <p className="category-text max-sm:text-[12px]">
            {t("About first-text")}
          </p>
          <h1 className="mt-3 w-10/12 max-w-[500px] text-[30px] leading-[1.666] text-white max-lg:mx-auto lg:mt-4 lg:text-[52px] lg:leading-[1.16]">
            {t("About first-title")}
          </h1>
          <p className="mt-6 leading-[1.666] tracking-[0.02em] max-sm:text-[15px] lg:mt-8 lg:text-[18px]">
            {t("About first-text-2")}
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default AboutHeroSection;
