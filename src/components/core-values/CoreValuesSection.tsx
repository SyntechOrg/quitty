import React from "react";
import Image from "next/image";
import CoreImage from "../../../public/assets/images/cores-image.png";
import { FadeIn } from "@/components/fade-in/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/accordion/Accordion";
import { useTranslations } from "next-intl";
import arrow from "../../../public/assets/images/rightArrow.png";

const coreFAQ = [
  {
    question: "Core-faqQuestion1",
    answer: "Core-faqAnswer1",
  },
  {
    question: "Core-faqQuestion2",
    answer: "Core-faqAnswer2",
  },
  {
    question: "Core-faqQuestion3",
    answer: "Core-faqAnswer3",
  },
];

const CoreValuesSection = () => {
  const t = useTranslations("About");

  return (
    <div className="mt-20 flex items-center justify-center gap-10 max-lg:flex-col lg:mt-32">
      <FadeIn className="w-full max-lg:mx-auto max-lg:max-w-[620px]">
        <Image
          src={CoreImage}
          alt="our core image"
          className="mx-auto h-full w-full max-w-[420px] object-contain max-lg:max-w-[350px]"
        />
      </FadeIn>
      <div className="w-full max-lg:mx-auto max-lg:max-w-[620px]">
        <FadeIn className="mx-auto max-w-[540px]">
          <p className="text-[16px] font-medium leading-[1.3] text-primary lg:text-[18px]">
            {t("CoreUndertitle")}
          </p>
          <h5 className="mt-3 text-[32px] font-medium leading-[1.19] text-text lg:mt-4 lg:text-[42px]">
            {t("CoreTitle")}
          </h5>
          <FadeIn className="mt-4 lg:mt-6">
            <Accordion type="single" className="" defaultValue="item-0">
              {coreFAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{t(faq.question)}</AccordionTrigger>
                  <AccordionContent>{t(faq.answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
          <FadeIn>
            <button
              className="mt-7 flex h-[48px] w-[200px] items-center justify-center gap-2.5
                rounded-3xl bg-[#00C9A5] font-semibold text-white max-lg:mx-auto lg:mt-5"
            >
              {t("button")}
              <Image src={arrow} alt="arrow icon" className="w-[16px]" />
            </button>
          </FadeIn>
        </FadeIn>
      </div>
    </div>
  );
};

export default CoreValuesSection;
