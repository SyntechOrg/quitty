"use client";
import React from "react";
import { Button, Icon, IconType } from "@/components/shared";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";

const OverviewCard = () => {
  const t = useTranslations("About Us");
  const localActive = useLocale();

  return (
    <div className="w-full rounded-[30px] border border-gray bg-radial-gradient-background px-8 py-14 md:p-12 md:py-32">
      <div className="mx-auto w-11/12 max-w-[700px] text-center">
        <h4 className="mx-auto max-w-[600px] text-[24px] leading-[1.14] md:text-[32px] lg:text-[48px]">
          {t("About overview-title")}
        </h4>
        <p className="mt-6 text-[14px] font-light leading-[1.875] md:mt-10 md:text-[16px]">
          {t("About overview-text")}
        </p>
        <div className="group mx-auto mt-6 flex w-fit items-center md:mt-10 ">
          <Button to={`/${localActive}/contact`}>
            {t("About overview-button")}
          </Button>
          <Button to={`/${localActive}/contact`}>
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
