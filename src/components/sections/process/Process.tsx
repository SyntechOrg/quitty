import React from "react";
import Image from "next/image";
import phone from "public/assets/images/quittyPhone.png";
import icon from "public/assets/images/borderArrow.png";
import arrow from "public/assets/images/rightArrow.png";
import { useTranslations } from "next-intl";

const Process = () => {
  const t = useTranslations("Process");

  return (
    <>
      <div className="lg:mt-[100px] mt-[70px]">
        <div className="sectionHead">
          <h5 className="text-[#01C9A5] lg:text-[18px] text-[16px] text-center">
            {t("undertitle")}
          </h5>
          <h1 className="lg:text-[46px] leading-[1.40] text-[32px] text-[#0C1726] font-[500] lg:mb-[20px] mb-[10px] text-center">
            {t("title")}
          </h1>
          <p className="lg:text-[16px] leading-[1.80] text-[14px] text-[#232226] text-center">
            {t("text")}
          </p>
        </div>

        <div className="flex lg:flex-row flex-col justify-between lg:gap-[5%] gap-[35px] lg:mt-[70px] mt-[40px]">
          <div className="lg:w-[50%] w-[100%]">
            <Image
              src={phone}
              alt="Quitty phone"
              className="h-[100%] lg:mx-0 mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center gap-[30px] lg:w-[50%] w-[100%]">
            <div>
              <div className="flex items-center lg:lg:justify-start justify-center gap-[10px] mb-[15px]">
                <Image src={icon} alt="arrow icon" className="w-[22px]" />
                <h5 className="lg:text-[16px] text-[15px] leading-[1.60] font-[600]">
                  {t("listTitle1")}
                </h5>
              </div>
              <p className="lg:text-left lg:text-[16px] text-[14px] text-center">
                {t("listText1")}
              </p>
            </div>
            <div>
              <div className="flex items-center lg:justify-start justify-center gap-[10px] mb-[15px]">
                <Image src={icon} alt="arrow icon" className="w-[22px]" />
                <h5 className="lg:text-[16px] text-[15px] leading-[1.60] font-[600]">
                  {t("listTitle2")}
                </h5>
              </div>
              <p className="lg:text-left lg:text-[16px] text-[14px] text-center">
                {t("listText2")}
              </p>
            </div>
            <div>
              <div className="flex items-center lg:justify-start justify-center gap-[10px] mb-[15px]">
                <Image src={icon} alt="arrow icon" className="w-[22px]" />
                <h5 className="lg:text-[16px] text-[15px] leading-[1.60] font-[600]">
                  {t("listTitle3")}
                </h5>
              </div>
              <p className="lg:text-left lg:text-[16px] text-[14px] text-center">
                {t("listText3")}
              </p>
            </div>
            <div>
              <div className="flex items-center lg:justify-start justify-center gap-[10px] mb-[15px]">
                <Image src={icon} alt="arrow icon" className="w-[22px]" />
                <h5 className="lg:text-[16px] text-[15px] font-[600]">
                  {t("listTitle4")}
                </h5>
              </div>
              <p className="lg:text-left lg:text-[16px] text-[14px] text-center">
                {t("listText4")}
              </p>
            </div>

            <button className="w-[200px] h-[48px] flex justify-center items-center gap-[10px] font-600 text-white bg-[#00C9A5] rounded-3xl lg:mx-0 mx-auto">
              {t("button")}
              <Image src={arrow} alt="arrow icon" className="w-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
