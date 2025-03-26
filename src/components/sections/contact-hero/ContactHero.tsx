import React from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const t = useTranslations("Contact");

  return (
    <div className="mt-[150px] lg:mt-[200px]">
      <FadeIn>
        <h1 className="text-[50px] font-medium lg:text-[60px]">
          {t("HeroTitle")}
        </h1>
        <h5 className=" text-[16px] lg:text-[18px]">{t("HeroText")}</h5>
        {/* <a
          href="#"
          className="mt-4 inline-block rounded-[6px] bg-primary px-4 py-3 text-center text-[16px] uppercase leading-[1.5]
          text-white hover:opacity-80 active:opacity-90"
        >
          {t("CtaButton")}
        </a> */}
      </FadeIn>
    </div>
  );
};

export default ContactHero;
