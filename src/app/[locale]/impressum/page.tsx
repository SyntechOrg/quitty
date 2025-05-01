"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Partners from "@/components/shared/partners/Partners";
import { FadeIn } from "@/components/fade-in/FadeIn";
import withAuth from "@/components/hocs/withAuth";
import useChatbase from "@/components/chatbot/useChatbase";

// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const lang = params.locale || "de";
//
//   const metadataMap = {
//     en: {
//       title: "Quitty – Impressum",
//       description: "Quitty is brought to you by SynTech Solutions AG. View our legal and company information here.",
//     },
//     de: {
//       title: "Quitty – Impressum",
//       description: "Quitty wird Ihnen von der SynTech Solutions AG zur Verfügung gestellt. Sehen Sie hier unsere rechtlichen und Unternehmensinformationen.",
//     },
//   };
//
//   return metadataMap[lang] || metadataMap.de;
// }

const ImpressumPage = () => {
  const t = useTranslations("Impressum");

  useChatbase();

  return (
    <div className="container">
      <FadeIn
        className="mt-[75px] space-y-[15px] md:space-y-[25px] lg:mt-[150px]
     [&>p]:text-[14px] [&>p]:leading-[23px] md:[&>p]:text-[16px] md:[&>p]:leading-[27px]"
      >
        <h1 className="text-[40px] font-bold md:text-[50px] lg:text-[60px]">
          {t("Title")}
        </h1>
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
      </FadeIn>
      {/* <Partners /> */}
    </div>
  );
};

export default ImpressumPage;
