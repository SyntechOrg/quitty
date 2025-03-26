import React from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import DiceIcon from "../../../public/assets/images/dice-icon.png";
import CubeIcon from "../../../public/assets/images/cube-icon.png";
import NetworkIcon from "../../../public/assets/images/network-icon.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ImpactSection = () => {
  const t = useTranslations("About");
  return (
    <div className="mt-32 grid grid-cols-1 gap-x-10 gap-y-16 max-lg:mx-auto max-lg:max-w-[600px] lg:mt-52 lg:grid-cols-3">
      <FadeIn className="lg:row-span-2">
        <p className="text-[16px] font-medium leading-[1.2] text-primary lg:text-[18px]">
          {t("undertitle")}
        </p>
        <h4 className="mt-3 text-[24px] font-medium leading-[1.333] text-text lg:mt-4 lg:text-[32px]">
          {t("title")}
        </h4>
        <p className="mt-5 text-[16px] leading-[1.5] text-text lg:mt-7">
          {t("text")}
        </p>
      </FadeIn>
      <FadeIn className="max-lg:text-center">
        <div className="flex items-center gap-2 max-lg:mx-auto max-lg:w-fit">
          <div className="h-full max-h-[32px] w-full max-w-[32px]">
            <Image
              src={DiceIcon}
              alt="icon"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="flex items-center gap-1 text-[24px] font-bold leading-[1] tracking-[-2px] text-text lg:text-[32px]">
            1 M <span className="text-[20px] lg:text-[22px]">+</span>
          </p>
        </div>
        <p className="mt-6 text-[16px] font-semibold leading-[1.33] text-text lg:mt-7 lg:text-[18px]">
          {t("statistics1-2")}
        </p>
        <p className="mt-3 text-[15px] leading-[1.5] text-text lg:mt-4 lg:text-[16px]">
          {t("statistics1-3")}
        </p>
      </FadeIn>
      <FadeIn className="max-lg:text-center">
        <div className="flex items-center gap-2 max-lg:mx-auto max-lg:w-fit">
          <div className="h-full max-h-[32px] w-full max-w-[32px]">
            <Image
              src={CubeIcon}
              alt="icon"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="flex items-center gap-1 text-[24px] font-bold leading-[1] tracking-[-2px] text-text lg:text-[32px]">
            80 <span className="text-[20px] lg:text-[22px]">%</span>
          </p>
        </div>
        <p className="mt-6 text-[16px] font-semibold leading-[1.33] text-text lg:mt-7 lg:text-[18px]">
          {t("statistics2-2")}
        </p>
        <p className="mt-3 text-[15px] leading-[1.5] text-text lg:mt-4 lg:text-[16px]">
          {t("statistics2-3")}
        </p>
      </FadeIn>
      <FadeIn className="max-lg:text-center lg:col-span-2">
        <div className="flex items-center gap-2 max-lg:mx-auto max-lg:w-fit">
          <div className="h-full max-h-[32px] w-full max-w-[32px]">
            <Image
              src={NetworkIcon}
              alt="icon"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="flex items-center gap-1 text-[24px] font-bold leading-[1] tracking-[-1px] text-text lg:text-[32px]">
            29 <span className="text-[20px] lg:text-[22px]">+</span>
          </p>
        </div>
        <p className="mt-6 text-[16px] font-semibold leading-[1.33] text-text lg:mt-7 lg:text-[18px]">
          {t("statistics3-2")}
        </p>
        <p className="mt-3 text-[15px] leading-[1.5] text-text lg:mt-4 lg:text-[16px]">
          {t("statistics3-3")}
        </p>
      </FadeIn>
    </div>
  );
};

export default ImpactSection;
