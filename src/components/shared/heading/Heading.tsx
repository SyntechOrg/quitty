import { useTranslations } from "next-intl";
import React from "react";
import { FC } from "react";

type HeadingProps = {
  title: String;
  underTitle: String;
  text: String;
};

export const Heading: FC<HeadingProps> = ({ title, underTitle, text }) => {
  const t = useTranslations("Shared");

  return (
    <>
      <div className="container lg:pt-[100px] lg:pb-[100px] pt-[60px] pb-[60px]  lg:gap-[0px] gap-[20px] flex justify-between lg:flex-row flex-col">
        <div className="flex flex-col justify-center items-start lg:max-w-[50%] w-[100%] lg:gap-[10px]">
          <h5 className="text-[#00C9A5] font-[500] lg:text-[18px] text-[16px]">
            {t(underTitle)}
          </h5>
          <h1 className="text-[#0C1726] font-[500] lg:text-[48px] text-[42px] leading-[1.3] lg:w-[90%] w-[100%]">
            {t(title)}
          </h1>
        </div>
        <div className="lg:max-w-[50%] w-[100%]">
          <p className="leading-[1.75] lg:text-[16px] text-[15px]">{t(text)}</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
