import React from "react";
import Image from "next/image";
import Globe from "../../../../public/assets/images/globe.png";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { Icon, IconType } from "@/components/shared";
import { useTranslations } from "next-intl";

const FAQ = [
  {
    question: "FaqQuestion1",
    answer: "FaqAnswer1",
  },
];

const HowItWorksSection = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex items-center justify-center gap-10 max-lg:flex-col">
      <FadeIn className="w-full max-lg:mx-auto max-lg:max-w-[620px]">
        <Image
          src={Globe}
          alt="globe"
          className="h-full w-full object-contain max-lg:mx-auto max-lg:max-w-[480px]"
        />
      </FadeIn>
      <FadeIn className="w-full max-lg:mx-auto max-lg:max-w-[620px]">
        <div className="mx-auto max-w-[540px]">
          <p className="text-[16px] font-medium leading-[1.4] text-primary lg:text-[18px]">
            {t("HowUndertitle")}
          </p>
          <h5 className="mt-4 text-[32px] font-medium leading-[1.19] text-text lg:mt-6 lg:text-[48px]">
            {t("HowTitle")}
          </h5>
          <p className="mt-4 text-[16px] leading-[1.6] text-text lg:mt-6 lg:text-[18px]">
            {t("HowDescription")}
          </p>
          <div className="mt-4 lg:mt-6">
            {FAQ.map((faq) => (
              <div key={faq.question} className="py-4">
                <h6 className="flex items-center gap-3 py-2 text-[16px] leading-[1.5] md:text-[18px]">
                  <Icon
                    icon={IconType.ARROW_DIAGONAL}
                    className="h-[16px] w-[16px] object-contain"
                  />
                  {t(faq.question)}
                </h6>
                <p className="mt-3 pb-2 text-[18px] leading-[1.6] text-[#161616] md:text-[16px]">
                  {t(faq.answer)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default HowItWorksSection;
