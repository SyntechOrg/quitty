import { useTranslations } from "next-intl";
import React from "react";

const ImpressumPage = () => {
  const t = useTranslations("Impressum");

  return (
    <div className="container lg:[&>p]:text-[16px] [&>p]:text-[14px] lg:[&>p]:leading-[27px] [&>p]:leading-[23px] lg:mt-[150px] mt-[75px] p-[0] ml-[0] mr-[0] space-y-[15px] lg:space-y-[25px]">
      <p className="">{t("Paragraph1-1")}</p>
      <p className="">{t("Paragraph1-2")}</p>
      <p className="">{t("Paragraph1-3")}</p>

      <h2 className="lg:text-[38px] text-[30px] lg:leading-[43px] leading-[35px] max-w-[700px] font-bold">
        {t("UnderTitle")}
      </h2>

      <p className="">{t("Paragraph1-4")}</p>
      <p className="">{t("Paragraph1-5")}</p>
      <p className="">{t("Paragraph1-6")}</p>
      <p className="">{t("Paragraph1-7")}</p>

      <h3 className="lg:text-[30px] lg:leading-[36px] leading-[27px] text-[25px]">
        {t("Paragraph-title")}
      </h3>

      <p className="">{t("Paragraph1-8")}</p>
      <p className="">{t("Paragraph1-9")}</p>
    </div>
  );
};

export default ImpressumPage;
