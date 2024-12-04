import { useTranslations } from "next-intl";
import React from "react";

const Mission = () => {
  const t = useTranslations("Shared");

  return (
    <div
      className="flex flex-col items-start justify-center gap-[30px] pb-[60px] pt-[15px] lg:flex-row lg:justify-between
       lg:gap-[0] lg:pb-[100px] lg:pt-[40px]"
    >
      <div className="flex w-[100%] flex-col items-start justify-center gap-[15px] lg:max-w-[45%]">
        <h5 className="w-[100%] border-b-[2px] border-[#60606B] border-opacity-[40%] pb-[13px] text-[16px] font-[500] text-[#0C1726]">
          {t("Mission-underTitle")}
        </h5>
        <h1 className="text-[20px] font-[500] leading-[1.30] text-[#0C1726]">
          {t("Mission-title")}
        </h1>
        <p className="text-[16px] leading-[1.85] text-[#232226]">
          {t("Mission-text")}
        </p>
      </div>
      <div className="flex w-[100%] flex-col items-start justify-center gap-[15px] lg:max-w-[45%]">
        <h5 className="w-[100%] border-b-[2px] border-[#60606B] border-opacity-[40%] pb-[13px] text-[16px] font-[500] text-[#0C1726]">
          {t("Vision-underTitle")}
        </h5>
        <h1 className="text-[20px] font-[500] leading-[1.30] text-[#0C1726]">
          {t("Vision-title")}
        </h1>
        <p className="text-[16px] leading-[1.85] text-[#232226]">
          {t("Vision-text")}
        </p>
      </div>
    </div>
  );
};

export default Mission;
