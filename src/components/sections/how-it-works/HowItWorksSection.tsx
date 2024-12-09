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
    question: "Papierabfall beseitigen",
    answer:
      "Jährlich werden in der Schweiz allein über 10.000 Tonnen Papierquittungen weggeworfen.",
  },
  {
    question: "Sicher und umweltfreundlich",
    answer: "Papierquittungen enthalten oft schädliche Chemikalien.",
  },
  {
    question: "Kundenpräferenzen",
    answer: "69% der Verbraucher bevorzugen Marken, die umweltfreundliche Lösungen anbieten.",
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
            Wie es funktioniert
          </p>
          <h5 className="mt-4 text-[32px] font-medium leading-[1.19] text-text lg:mt-6 lg:text-[48px]">
            Wir setzen uns dafür ein, einen Unterschied zu machen.
          </h5>
          <p className="mt-4 text-[16px] leading-[1.6] text-text lg:mt-6 lg:text-[18px]">
            Verbraucher werden zu Akteuren des Endes der Papierquittungen und erhalten eine beispiellose Genauigkeit
            bei der Klassifizierung ihrer Ausgaben nach Kategorien und Produkten, um ihre Finanzen zu bereinigen.
            Die Produktqualität wird überprüft, um gesundheitliche Auswirkungen zu bieten.
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
