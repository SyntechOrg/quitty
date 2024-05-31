import React, { FC } from "react";
import { FadeIn } from "../fade-in/FadeIn";

interface SecondaryHeroSectionProps {
  title: string;
  text: string;
}

export const SecondaryHeroSection: FC<SecondaryHeroSectionProps> = ({
  title,
  text,
}) => {
  return (
    <FadeIn
      className={`container mx-auto grid
       min-h-[calc(100vh-106px)] w-10/12 items-center md:min-h-[calc(100vh-114px)]`}
    >
      <div
        className={`relative flex translate-y-[-53px] flex-col justify-between gap-x-5 gap-y-8 max-lg:items-center 
      max-lg:text-center md:translate-y-[-57px] lg:flex-row`}
      >
        <h1
          className="max-w-[450px] flex-shrink-0 text-[24px] leading-[1.4] sm:text-[36px] md:text-[42px] lg:max-w-[420px]
          lg:text-[52px]"
        >
          {title}
        </h1>
        <p className="max-w-[630px] leading-[1.9] md:text-[18px] lg:mt-3 lg:text-[24px]">
          {text}
        </p>
      </div>
    </FadeIn>
  );
};
