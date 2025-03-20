import React from "react";
import Image from "next/image";
import phone from "public/assets/images/quittyPhone.png";
import icon from "public/assets/images/borderArrow.png";
import arrow from "public/assets/images/rightArrow.png";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/fade-in/FadeIn";
import Link from "next/link";

const listItems = [
  { title: "listTitle1", text: "listText1" },
  { title: "listTitle2", text: "listText2" },
  { title: "listTitle3", text: "listText3" },
  { title: "listTitle4", text: "listText4" },
];

const Process = () => {
  const t = useTranslations("Process");

  return (
    <>
      <div className="mt-[70px] lg:mt-[100px]">
        <FadeIn className="max-lg:mx-auto max-lg:max-w-[620px]">
          <h5 className="text-center text-[16px] text-[#01C9A5] lg:text-[18px]">
            {t("undertitle")}
          </h5>
          <h1 className="mb-[10px] text-center text-[32px] font-[500] leading-[1.40] text-[#0C1726] lg:mb-[20px] lg:text-[46px]">
            {t("title")}
          </h1>
          <p className="text-center text-[14px] leading-[1.80] text-[#232226] lg:text-[16px]">
            {t("text")}
          </p>
        </FadeIn>
        <div className="mt-[40px] flex flex-col justify-between gap-[35px] lg:mt-[70px] lg:flex-row lg:gap-[5%]">
          <FadeIn className="mx-auto w-full max-w-[520px] lg:w-[50%]">
            <Image
              src={phone}
              alt="Quitty phone"
              className="mx-auto h-full w-full object-contain lg:mx-0"
            />
          </FadeIn>
          <div className="flex w-full max-w-[600px] flex-col justify-center gap-[30px] max-lg:mx-auto lg:w-1/2">
            {listItems.map((item, index) => (
              <FadeIn key={index}>
                <div className="mb-[15px] flex items-center gap-2.5">
                  <Image src={icon} alt="arrow icon" className="w-[22px]" />
                  <h5 className="text-[15px] font-semibold leading-[1.60] lg:text-[16px]">
                    {t(item.title)}
                  </h5>
                </div>
                <p className="text-[14px] lg:text-[16px]">{t(item.text)}</p>
              </FadeIn>
            ))}
            <FadeIn>
              <Link href={"https://apps.apple.com/us/app/quitty/id6740874619"}>
                <button
                  className="flex h-[48px] w-[200px] items-center justify-center gap-2.5 rounded-3xl
                bg-[#00C9A5] font-semibold text-white max-lg:mx-auto"
                >
                  {t("button")}
                  <Image src={arrow} alt="arrow icon" className="w-[16px]" />
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
