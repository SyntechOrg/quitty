import React from "react";
import Image from "next/image";
import phone from "public/assets/images/TransformPhone.png";
import flame from "public/assets/images/flameIcon.png";
import apple from "public/assets/images/apple-logo.png";
import play from "public/assets/images/google-play-logo.png";
import { useTranslations } from "next-intl";
import bgBlur from "public/assets/images/bgBlur.png";
import { FadeIn } from "@/components/fade-in/FadeIn";

const Transform = () => {
  const t = useTranslations("Shared");
  return (
    <FadeIn
      className="container relative mt-[80px] flex h-[auto] flex-col items-center justify-end overflow-hidden
        rounded-[80px] border-l-2 border-t-2 border-l-[#b6d0f8] border-t-[#b6d0f8] bg-[#E6F2F4] p-4 pb-[0px] pt-[50px]
        lg:mt-[120px] lg:flex-row lg:items-end lg:justify-center lg:gap-[7.5%] lg:pt-[75px]"
    >
      <Image
        src={bgBlur}
        alt=""
        className="absolute right-0 top-0 h-[100%] w-[100%] object-cover lg:w-[88%]"
      />

      <div className="z-10 mb-[10%] flex flex-col items-center gap-[17px] lg:items-start lg:gap-[30px] ">
        <h1 className="max-w-[420px] text-center text-[28px] font-medium leading-[40px] max-lg:mx-auto lg:text-left lg:text-[36px] lg:leading-[50px]">
          {t("TransformTitle")}
        </h1>
        <div className="mx-auto flex w-11/12 flex-col gap-[20px] lg:w-fit lg:gap-[25px]">
          <div className="flex w-fit items-center justify-center gap-[10px]">
            <Image src={flame} alt="" className="mt-[5px] w-[22px]" />
            <p className="text-[16px] leading-[24px] lg:text-[18px]">
              {t("TransformP1")}
            </p>
          </div>
          <div className="flex w-fit items-center justify-center gap-[10px]">
            <Image src={flame} alt="" className="mt-[5px] w-[22px]" />
            <p className="text-[16px] leading-[24px] lg:text-[18px]">
              {t("TransformP2")}
            </p>
          </div>
          <div className="flex w-fit items-center justify-center gap-[10px]">
            <Image src={flame} alt="" className="mt-[5px] w-[22px]" />
            <p className="text-[16px] leading-[24px] lg:text-[18px]">
              {t("TransformP3")}
            </p>
          </div>
        </div>

        <div className="flex w-fit flex-col items-center justify-center gap-[20px] lg:flex-row lg:justify-start">
          <button
            className="border-color-[#00C9A5] flex h-[60px] w-[200px] items-center justify-center gap-[10px]
            rounded-full border border-primary duration-150 hover:bg-primary"
          >
            <Image src={apple} alt="" className="w-[30px]" />
            App Store
          </button>
          <button
            className="border-color-[#00C9A5] flex h-[60px] w-[200px] items-center justify-center gap-[10px]
            rounded-full border border-primary duration-150 hover:bg-primary"
          >
            <Image src={play} alt="" className="w-[30px]" />
            Google Play
          </button>
        </div>
      </div>
      <Image
        src={phone}
        alt="Tranform Phone"
        className="z-10 w-[300px] lg:w-[30%]"
      />
    </FadeIn>
  );
};

export default Transform;
