import React from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "../fade-in/FadeIn";

const HeroSection = () => {
  const t = useTranslations("Home");

  return (
    <div
      id="hero-text"
      style={{ minHeight: "100dvh" || "100vh" }}
      className="container mx-auto flex w-10/12 max-w-[850px] items-center justify-center"
    >
      <FadeIn className="h-fit">
        <h1 className="text-center text-[22px] leading-[1.66] sm:text-[36px] md:text-[42px] lg:text-[52px]">
          {t("HeroSectionTitle")}
        </h1>
      </FadeIn>
    </div>
  );
};

export default HeroSection;
