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
    question: "Eliminate Paper Waste",
    answer:
      "Over 10,000 tons of paper receipts are discarded annually in Switzerland alone.",
  },
  {
    question: "Safe and Eco-friendly",
    answer: "Paper receipts often contain harmful chemicals.",
  },
  {
    question: "Customer Preferences",
    answer: "69% of consumers prefer brands that offer eco-friendly solutions.",
  },
];

const HowItWorksSection = () => {
  const t = useTranslations("");

  return (
    <FadeIn className="flex items-center justify-center gap-10 max-lg:flex-col">
      <div className="w-full max-lg:mx-auto max-lg:max-w-[620px]">
        <Image
          src={Globe}
          alt="globe"
          className="h-full w-full object-contain max-lg:mx-auto max-lg:max-w-[480px]"
        />
      </div>
      <div className="w-full max-lg:mx-auto max-lg:max-w-[620px]">
        <div className="mx-auto max-w-[540px]">
          <p className="text-[16px] font-medium leading-[1.4] text-primary lg:text-[18px]">
            How it works
          </p>
          <h5 className="mt-4 text-[32px] font-medium leading-[1.19] text-text lg:mt-6 lg:text-[48px]">
            We’re Committed to Creating Impact.
          </h5>
          <p className="mt-4 text-[16px] leading-[1.6] text-text lg:mt-6 lg:text-[18px]">
            Consumers will be actors of the end of paper receipts and get
            unprecedented accuracy to classify spendings by categories and
            products in order to clean up their finance. Product quality will be
            reviewed to offer health impact.
          </p>
          <div className="mt-4 lg:mt-6">
            <Accordion type="single" className="" defaultValue="item-0">
              {FAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{t(`${faq.question}`)}</AccordionTrigger>
                  <AccordionContent>{t(`${faq.answer}`)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default HowItWorksSection;
