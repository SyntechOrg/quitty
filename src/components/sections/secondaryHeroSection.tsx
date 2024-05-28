import React, {FC} from 'react';
import {HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE} from "@/assets/constants/constants";

interface SecondaryHeroSectionProps {
  title: string;
  text: string;
}

export const SecondaryHeroSection: FC<SecondaryHeroSectionProps> = ({title, text}) => {
  const TRANSLATE_Y_DESKTOP = HEADER_HEIGHT_DESKTOP / 2;
  const TRANSLATE_Y_MOBILE = HEADER_HEIGHT_MOBILE / 2;

  return (
    <div
      className={`container min-h-[calc(100vh-${HEADER_HEIGHT_MOBILE}px)] md:min-h-[calc(100vh-${HEADER_HEIGHT_DESKTOP}px)]
       mx-auto w-10/12 grid items-center`}
    >
      <div className={`relative flex lg:flex-row flex-col justify-between max-lg:items-center max-lg:text-center gap-x-5 
      gap-y-8 md:translate-y-[-${TRANSLATE_Y_DESKTOP}px] translate-y-[-${TRANSLATE_Y_MOBILE}px]`}
      >
        <h1
          className="lg:text-[52px] md:text-[42px] sm:text-[36px] text-[24px] leading-[1.4] lg:max-w-[420px] max-w-[450px]
          flex-shrink-0"
        >
          {title}
        </h1>
        <p className="lg:text-[24px] md:text-[18px] leading-[1.9] max-w-[630px] lg:mt-3">
          {text}
        </p>
      </div>
    </div>
  );
};

