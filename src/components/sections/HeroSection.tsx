import React from "react";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Home");

  return (
    <div className="container mx-auto flex min-h-screen w-10/12 max-w-[850px] items-center justify-center">
      <h1
        data-aos="fade-up"
        className="text-center text-[22px] leading-[1.66] sm:text-[36px] md:text-[42px] lg:text-[52px]"
      >
        {t("HeroSectionTitle")}
      </h1>
    </div>
  );
};

export default HeroSection;
