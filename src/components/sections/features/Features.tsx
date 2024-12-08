import React from "react";
import Image from "next/image";
import image1 from "public/assets/images/featureimage1.png";
import image2 from "public/assets/images/featureimage2.png";
import image3 from "public/assets/images/featureimage3.png";
import image4 from "public/assets/images/featureimage4.png";
import icon1 from "public/assets/images/featureicon1.png";
import icon2 from "public/assets/images/featureicon2.png";
import icon3 from "public/assets/images/featureicon3.png";
import icon4 from "../../../../featureicon4.png";
import iconn4 from "/public/assets/images/featureicon4.png";
import { useTranslations } from "next-intl";

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
      <div className="flex jsutify-center flex-col items-center lg:gap-[80px] gap-[50px] lg:mt-[120px] mt-[80px]">
        <div>
          <p className="text-[#01C9A5] lg:text-[17px] text-[15px] text-center">
            {t("undertitle")}
          </p>
          <h1 className="text-[#0C1726] lg:text-[44px] text-[34px] text-center leading-[1.4] font-[500]">
            {t("title")}
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-[50px]">
          {myContent.map((feature, index) => (
            <div className="flex justify-between items-center lg:flex-row md:flex-row flex-col gap-[15px]">
              <div
                key={index}
                className="lg:w-[40%] w-[100%] flex flex-col justify-center lg:gap-[20px] md:gap-[10px] gap-[15px] items-start"
              >
                <Image
                  src={feature.src2}
                  alt={t(feature.title)}
                  className="md:mx-[0] mx-[auto]"
                  width={50}
                  height={50}
                />
                <h2 className="text-[#0C1726] leading-[1.4] md:text-left text-center w-[100%] lg:text-[36px] md:text-[30px] text-[25px] font-[500]">
                  {t(feature.title)}
                </h2>
                <p className="text-[#111013] leading-[1.6] md:text-left text-center w-[100%] lg:text-[15px] text-[14px]">
                  {t(feature.text)}
                </p>
                <p className="text-[#111013] leading-[1.6] md:text-left text-center w-[100%] lg:text-[15px] text-[14px]">
                  <span className="font-[500]">{t(feature.span)}</span>
                  {t(feature.text2)}
                </p>
              </div>
              <div className="lg:w-[55%] w-[100%]">
                <Image
                  src={feature.src}
                  alt={t(feature.title)}
                  className="w-[100%] h-[auto]"
                  layout="responsive"
                  width={16}
                  height={12}
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
