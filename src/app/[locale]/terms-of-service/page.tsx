import { useTranslations } from "next-intl";
import React from "react";
import Partners from "@/components/shared/partners/Partners";

const TermsPage = () => {
  const t = useTranslations("Terms");
  return (
    <>
      <div className="container lg:mt-[200px] mt-[150px]">
        <h1 className="font-bold lg:text-[60px] text-[50px]">{t("Title")}</h1>
        <h5 className="lg:text-[18px] text-[16px]">{t("UnderText")}</h5>

        <div className="container lg:mt-[150px] mt-[75px] p-[0] ml-[0] mr-[0] space-y-[15px] lg:space-y-[25px]">
          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-1")}</p>
          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-2")}</p>
          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-3")}</p>

          <h2 className="lg:text-[38px] text-[30px] max-w-[700px] font-bold">
            {t("UnderTitle")}
          </h2>

          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-4")}</p>
          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-5")}</p>
          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-6")}</p>
          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-7")}</p>

          <h3 className="lg:text-[30px] text-[25px]">{t("Paragraph-title")}</h3>

          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-8")}</p>
          <p className="lg:text-[16px] text-[14px]">{t("Paragraph1-9")}</p>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
