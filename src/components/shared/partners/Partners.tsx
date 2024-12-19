import React from "react";
import Image from "next/image";
import zara from "public/assets/images/zara.png";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/fade-in/FadeIn";

const Images = [
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
  { src: zara, alt: "zara logo" },
];

const Partners = () => {
  const t = useTranslations("Shared");

  return (
    <FadeIn className="mt-[60px] gap-[50px] lg:mt-[100px]">
      <h1 className="mx-auto w-fit text-center text-[21px] font-medium leading-[1.4] text-text lg:text-[24px]">
        {t("PartnersTitle")}
      </h1>
      <div className="mt-10 flex w-[100%] flex-wrap items-start justify-center lg:mt-[60px]">
        {Images.map((image, index) => (
          <div
            key={index}
            className="mx-auto flex h-[74px] w-[133px] items-center justify-center lg:w-[184px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className=""
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default Partners;
