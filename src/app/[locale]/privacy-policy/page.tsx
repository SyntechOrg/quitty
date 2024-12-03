import { useTranslations } from "next-intl";
import React from "react";
import Partners from "@/components/shared/partners/Partners";
import { FadeIn } from "@/components/fade-in/FadeIn";

const PrivacyPage = () => {
  const t = useTranslations("Privacy");
  return (
    <>
      <FadeIn className="container mt-[150px] lg:mt-[200px]">
        <h1 className="text-[40px] font-bold md:text-[50px] lg:text-[60px]">
          {t("Title")}
        </h1>
        <h5 className="text-[16px] md:text-[18px]">{t("UnderText")}</h5>

        <div
          className="mt-[75px] space-y-[15px] md:mt-[150px] md:space-y-[25px] [&>p]:text-[14px] [&>p]:leading-[23px]
        md:[&>p]:text-[16px] md:[&>p]:leading-[27px]"
        >
          <p>{t("Paragraph1-1")}</p>
          <p>{t("Paragraph1-2")}</p>
          <p>{t("Paragraph1-3")}</p>

          <h2 className="max-w-[700px] text-[30px] font-bold leading-[35px] md:text-[38px] md:leading-[43px]">
            {t("UnderTitle")}
          </h2>

          <p>{t("Paragraph1-4")}</p>
          <p>{t("Paragraph1-5")}</p>
          <p>{t("Paragraph1-6")}</p>
          <p>{t("Paragraph1-7")}</p>

          <h3 className="text-[25px] leading-[27px] md:text-[30px] md:leading-[36px]">
            {t("Paragraph-title")}
          </h3>

          <p>{t("Paragraph1-8")}</p>
          <p>{t("Paragraph1-9")}</p>
        </div>
      </FadeIn>
      <Partners />
    </>
  );
};

export default PrivacyPage;
