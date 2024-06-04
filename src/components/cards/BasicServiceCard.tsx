"use client";
import React, { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Button, Icon, IconType } from "@/components/shared";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FadeIn } from "@/components/fade-in/FadeIn";

interface BasicServiceCardProps {
  index: number;
  title: string[];
  description: string;
  image: StaticImageData;
  categories: string[];
  href: string;
}

const BasicServiceCard: FC<BasicServiceCardProps> = ({
  index,
  title,
  description,
  image,
  categories,
  href,
}) => {
  const t = useTranslations("Shared");
  const localActive = useLocale();
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const topPosition = 70 + (index + 1) * (isLargeScreen ? 30 : 20);
  const scaleEndValue = 0.8 + (index + 1) * 0.04;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scaleReduction = useTransform(
    scrollYProgress,
    [0.6, 0],
    [1, isLargeScreen ? scaleEndValue : 1]
  );

  return (
    <motion.div
      ref={ref}
      className="sticky flex w-full max-w-[1300px] flex-col justify-between overflow-clip rounded-[30px] border border-gray
      bg-[#0F0F13] px-0 pb-0 pt-5 sm:p-[50px] md:p-[60px] lg:flex-row lg:px-[90px] lg:py-[55px]"
      style={{
        top: `${topPosition}px`,
        scale: scaleReduction,
      }}
    >
      <FadeIn className="mx-auto w-11/12 max-sm:text-center lg:w-[55%]">
        <h4 className="text-[24px] leading-[1.16] md:text-[36px] lg:text-[48px]">
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
        </h4>
        <p className="mt-5 max-w-[630px] text-[17px] leading-[1.5] text-[#a6a6b1] max-sm:text-[14px] md:mt-8 lg:mt-[40px]">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2 max-sm:justify-center md:mt-[50px] lg:mt-[100px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="grid h-[36px] w-fit place-content-center rounded-3xl border border-gray bg-[#15151b] px-4 md:px-6 lg:h-[40px] lg:px-7"
            >
              <span className="text-[13px] leading-[1] md:text-[16px]">
                {category}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn className="relative mx-auto w-[70%] max-lg:flex max-lg:flex-col-reverse lg:w-[45%]">
        <Image
          src={image}
          alt="service"
          className="relative right-0 top-[15px] h-full max-h-[340px] w-11/12 max-w-[380px] object-contain max-lg:mx-auto
           sm:top-[65px] md:top-[75px] lg:absolute lg:top-[100px]"
        />
        <div className="group relative mt-5 flex items-center max-sm:mx-auto sm:ml-auto lg:absolute lg:right-0">
          <Button
            to={`/${localActive}${href}`}
            className="text-center leading-[1]"
          >
            {t("Service card-button-1")}
          </Button>
          <Button to={`/${localActive}${href}`} className="btn2">
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
      </FadeIn>
    </motion.div>
  );
};

export default BasicServiceCard;
