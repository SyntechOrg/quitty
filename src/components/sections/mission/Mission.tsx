import { useTranslations } from "next-intl";
import React from "react";

const Mission = () => {
  const t = useTranslations("Shared");

  return (
    <div className="lg:pt-[40px] lg:pb-[100px] pt-[15px] pb-[60px] container flex items-start lg:flex-row flex-col lg:justify-between lg:gap-[0] gap-[30px] justify-center ">
      <div className="flex flex-col justify-center items-start gap-[15px] lg:max-w-[45%] w-[100%]">
        <h5 className="text-[#0C1726] text-[16px] border-b-[2px] border-[#60606B] pb-[13px] w-[100%] border-opacity-[40%] font-[500]">
          {t("Mission-underTitle")}
        </h5>
        <h1 className="text-[20px] text-[#0C1726] leading-[1.30] font-[500]">
          {t("Mission-title")}
        </h1>
        <p className="text-[#232226] text-[16px] leading-[1.85]">
          {t("Mission-text")}
        </p>
      </div>
      <div className="flex flex-col justify-center items-start gap-[15px] lg:max-w-[45%] w-[100%]">
        <h5 className="text-[#0C1726] text-[16px] border-b-[2px] border-[#60606B] pb-[13px] w-[100%] border-opacity-[40%] font-[500]">
          {t("Vision-underTitle")}
        </h5>
        <h1 className="text-[20px] text-[#0C1726] leading-[1.30] font-[500]">
          {t("Vision-title")}
        </h1>
        <p className="text-[#232226] text-[16px] leading-[1.85]">
          {t("Vision-text")}
        </p>
      </div>
    </div>
  );
};

export default Mission;
