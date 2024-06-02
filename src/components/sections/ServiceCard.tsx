"use client";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Button, Icon, IconType } from "@/components/shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/accordion/Accordion";
import { useLocale } from "use-intl";
import { useTranslations } from "next-intl";
import {FadeIn} from "@/components/fade-in/FadeIn";

interface ServiceCardProps {
  id: number;
  title: string[];
  description: string[];
  image: StaticImageData;
  FAQ: { question: string; answer: string }[];
  href: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  FAQ,
  href,
}) => {
  const localActive = useLocale();
  // const t = useTranslations("Services");
  const tt = useTranslations("Services");
  const t = useTranslations("Shared");

  return (
    <FadeIn
      className="relative flex w-full max-w-[1300px] flex-col justify-between overflow-clip rounded-[30px] border
      border-gray bg-[#0F0F13] px-0 py-8 sm:p-[50px] md:p-[60px] lg:flex-row lg:px-[90px] lg:py-[55px]"
    >
      <div className="w-11/12 max-lg:mx-auto max-sm:text-center lg:w-[46%]">
        <h2 className="text-[24px] leading-[1.33] md:text-[36px] lg:min-h-[260px] lg:text-[50px]">
          {title.map((title, index) => (
            <span key={index}>
              {t(title)}
              {index !== title.length - 1 && (
                <>
                  <br />
                </>
              )}
            </span>
          ))}
        </h2>
        <p className="mt-5 max-w-[630px] text-[17px] leading-[1.5] text-[#a6a6b1] max-sm:text-[15px] md:mt-8 lg:mt-[40px]">
          {description.map((desc, index) => (
            <span key={index}>
              {tt(desc)}
              {index !== description.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </span>
          ))}
        </p>
      </div>
      <div className="relative mt-14 w-11/12 flex-col-reverse max-lg:mx-auto max-lg:flex lg:mt-0 lg:w-[46%]">
        <div
          className="left-[-100px] top-0 mx-auto mb-[-45px] mt-14 h-full max-h-[320px] w-11/12
          max-w-[280px] max-lg:mx-auto sm:mb-[-60px] md:mb-[-75px] lg:absolute lg:mb-0 lg:mt-0 lg:max-h-[280px] lg:max-w-[350px]"
        >
          <Image
            src={image}
            alt="service"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <div
            className="group relative mt-10 flex w-fit items-center max-sm:mx-auto sm:ml-auto lg:absolute lg:right-0
            lg:top-[-20px]"
          >
            <Button to={`/${localActive}/contact`}>{t("Service card-button-1")}</Button>
            <Button to={`/${localActive}/contact`}>
              <Icon icon={IconType.ARROW} />
            </Button>
          </div>
        </div>
        <div className="w-full max-w-[630px] lg:mt-[310px]">
          <Accordion type="single" className="space-y-4" defaultValue="item-0">
            {FAQ.map((faq, index) => (
              // eslint-disable-next-line react/jsx-key
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{tt(faq.question)}</AccordionTrigger>
                <AccordionContent>{tt(faq.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </FadeIn>
  );
};

export default ServiceCard;
