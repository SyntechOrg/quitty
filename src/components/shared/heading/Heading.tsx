import { useTranslations } from "next-intl";
import React from "react";
import { FC } from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";

type HeadingProps = {
  title: string;
  underTitle: string;
  text: string;
};

export const Heading: FC<HeadingProps> = ({ title, underTitle, text }) => {
  const t = useTranslations("Shared");

  return (
    <FadeIn className="flex flex-col justify-between gap-[20px] pb-[60px] pt-[60px] max-lg:mx-auto max-lg:max-w-[620px] lg:flex-row lg:gap-[0px] lg:pb-[100px] lg:pt-[100px]">
      <div className="flex w-[100%] flex-col items-start justify-center lg:max-w-[50%] lg:gap-[10px]">
        <h5 className="text-[16px] font-[500] text-[#00C9A5] lg:text-[18px]">
          {t(underTitle)}
        </h5>
        <h1 className="w-[100%] break-words text-[32px] font-[500] leading-[1.3] text-[#0C1726] lg:w-[90%] lg:text-[48px]">
          {t(title)}
        </h1>
      </div>
      <div className="w-[100%] lg:max-w-[50%]">
        <p className="text-[15px] leading-[1.75] lg:text-[16px]">{t(text)}</p>
      </div>
    </FadeIn>
  );
};

export default Heading;
