import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/fade-in/FadeIn";

const myContent = [
  {
    src: "/assets/images/featureimage1.png",
    src2: "/assets/images/featureicon1.png",
    title: "listTitle1",
    text: "listText1",
    text2: "listText1-2",
    span: "span",
  },
  {
    src: "/assets/images/featureimage2.png",
    src2: "/assets/images/featureicon2.png",
    title: "listTitle2",
    text: "listText2",
    text2: "listText2-2",
    span: "span",
  },
  {
    src: "/assets/images/featureimage3.png",
    src2: "/assets/images/featureicon3.png",
    title: "listTitle3",
    text: "listText3",
    text2: "listText3-2",
    span: "span",
  },
  {
    src: "/assets/images/featureimage4.png",
    src2: "/assets/images/featureicon4.png",
    title: "listTitle3",
    text: "listText4",
    text2: "listText4-2",
    span: "span",
  },
];

const Features = () => {
  const t = useTranslations("Features");
  return (
    <>
      <FadeIn className="mt-[80px] flex flex-col items-center justify-center gap-[50px] max-lg:mx-auto max-lg:max-w-[620px] lg:mt-[120px] lg:gap-[80px]">
        <div>
          <p className="text-center text-[15px] text-[#01C9A5] lg:text-[17px]">
            {t("undertitle")}
          </p>
          <h1 className="text-center text-[32px] font-semibold leading-[1.4] text-[#0C1726] lg:text-[44px]">
            {t("title")}
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-32">
          {myContent.map((feature, index) => (
            <FadeIn
              key={index}
              className="flex flex-col items-center justify-between gap-x-16 gap-y-10 lg:flex-row"
            >
              <div
                key={index}
                className="flex w-full flex-col items-start justify-center gap-[15px] max-lg:mx-auto max-lg:max-w-[550px] lg:w-[50%] lg:gap-[20px]"
              >
                <Image
                  src={feature.src2}
                  alt={t(feature.title)}
                  className="max-lg:mx-auto"
                  width={50}
                  height={50}
                />
                <h2 className="w-full text-[25px] font-[500] leading-[1.4] text-[#0C1726] max-lg:text-center lg:text-left lg:text-[36px]">
                  {t(feature.title)}
                </h2>
                <p className="full text-[14px] leading-[1.6] text-[#111013] max-lg:text-center lg:text-left lg:text-[15px]">
                  {t(feature.text)}
                </p>
                <p className="w-full text-[14px] leading-[1.6] text-[#111013] max-lg:text-center lg:text-left lg:text-[15px]">
                  <span className="font-medium">{t(feature.span)}</span>
                  {t(feature.text2)}
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src={feature.src}
                  alt={t(feature.title)}
                  className="h-full w-full object-contain"
                  layout="responsive"
                  width={16}
                  height={12}
                  quality={100}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </>
  );
};

export default Features;
