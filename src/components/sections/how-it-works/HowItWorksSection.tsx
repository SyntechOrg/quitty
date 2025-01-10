import React from "react";
import Image from "next/image";
import Globe from "../../../../public/assets/images/globe.png";
import { FadeIn } from "@/components/fade-in/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/accordion/Accordion";
import { useTranslations } from "next-intl";

const FAQ = [
  {
    question: "FaqQuestion1",
    answer: "FaqAnswer1",
  },
  {
    question: "FaqQuestion2",
    answer: "FaqAnswer2",
  },
  {
    question: "FaqQuestion3",
    answer: "FaqAnswer3",
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
            <Accordion type="single" className="" defaultValue="item-0">
              {FAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{t(faq.question)}</AccordionTrigger>
                  <AccordionContent>{t(faq.answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default HowItWorksSection;
