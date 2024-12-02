import React from "react";
import Image from "next/image";
import tinder from "public/assets/images/tinder-1 1.png";
import { useTranslations } from "next-intl";
import {FadeIn} from "@/components/fade-in/FadeIn";

const Images = [
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
  { src: tinder, alt: "tinder logo" },
];

const Partners = () => {
  const t = useTranslations("Shared");

  return (
    <FadeIn className="container mt-[60px] gap-[50px] lg:mt-[100px]">
      <h1 className="mx-auto w-fit text-center text-[21px] font-medium leading-[1.4] text-text lg:text-[24px]">
        {t("PartnersTitle")}
      </h1>
      <div className="flex w-[100%] flex-wrap items-start justify-center">
        {Images.map((image, index) => (
          <div
            key={index}
            className="mx-auto flex h-[74px] w-[133px] items-center justify-center lg:w-[184px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className=""
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default Partners;
