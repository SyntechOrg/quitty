import { FadeIn } from "@/components/fade-in/FadeIn";
import { useTranslations } from "next-intl";
import React from "react";

const DataPage = () => {
  const t = useTranslations("DataDeletion");

  const listData = [
    {
      title: "formListT1",
      text: "formListC1",
    },
    {
      title: "formListT2",
      text: "formListC2",
    },
    {
      title: "formListT3",
      text: "formListC3",
    },
  ];

  const contactData = [
    {
      title: "contactCardT1",
      info1: "contactCardI1",
      info2: "contactCardC1",
      text: "contactCardtt1",
    },
    {
      title: "contactCardT2",
      info1: "contactCardI2",
      info2: "contactCardC2",
      text: "contactCardtt2",
    },
    {
      title: "contactCardT3",
      info1: "contactCardI3",
      info2: "contactCardC3",
      text: "contactCardtt3",
    },
  ];
  return (
    <FadeIn className="mt-[120px] md:mt-[150px] lg:mt-[200px]">
      <h1 className="text-[35px] container md:text-[50px] lg:text-[60px]">
        {t("Title")}
      </h1>
      <h5 className="text-[15px] container md:text-[18px]">{t("UnderText")}</h5>

      <div className="w-full bg-[#E9EAF066] lg:pt-[100px] lg:pb-[100px] lg:mt-[100px] lg:mb-[100px] md:pt-[80px] md:pb-[80px] md:mt-[80px] md:mb-[80px] pt-[40px] pb-[40px] mt-[40px] mb-[40px]">
        <div className="container flex flex-col justify-center md:gap-[100px] gap-[50px]">
          <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center gap-[50px]">
            <div className="md:w-[48%] w-full flex flex-col align-start justify-center gap-[20px]">
              <h1 className="lg:text-[28px] md:text-[24px] text-[20px] text-[#111013] font-bold leading-[1.30]">
                {t("formTitle")}
              </h1>
              <p className="md:text-[16px] text-[14px] text-[#161519] leading-[1.70]">
                {t("formText")}
              </p>
              <div>
                {listData.map((item, index) => (
                  <div key={index}>
                    <h5 className="md:text-[14px] mb-[4px] mt-[4px] text-[13px] text-[#161519] font-[600] leading-[1.60]">
                      {t(item.title)}
                    </h5>
                    <p className="md:text-[14px] text-[13px]">{t(item.text)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-[48%] w-full">
              <form
                className="w-full flex flex-col justify-center gap-[20px]"
                action=""
              >
                <div className="flex flex-col justify-center gap-[10px]">
                  <label
                    className="md:text-[14px] text-[13px] text-[#161519] leading-[1.5]"
                    htmlFor="email"
                  >
                    {t("label1")}
                  </label>
                  <input
                    className="bg-[#90919C14] h-[48px] text-[#000] rounded pl-[10px]"
                    name="email"
                    type="email"
                    placeholder={t("input1")}
                  />
                </div>
                <div className="flex flex-col justify-center gap-[10px]">
                  <label
                    className="md:text-[14px] text-[13px] text-[#161519] leading-[1.5]"
                    htmlFor="phone"
                  >
                    {t("label2")}
                  </label>
                  <input
                    className="bg-[#90919C14] h-[48px] text-[#000] rounded pl-[10px]"
                    name="phone"
                    type="tel"
                    placeholder={t("input2")}
                  />
                </div>
                <div className="flex flex-col justify-center gap-[10px]">
                  <label
                    className="md:text-[14px] text-[13px] text-[#161519] leading-[1.5]"
                    htmlFor="reason"
                  >
                    {t("label3")}
                  </label>
                  <select
                    className="bg-[#90919C14] h-[48px] text-[#60606B] rounded pl-[10px]"
                    name="reason"
                    value={t("input3")}
                  >
                    <option value={t("input3")}>{t("input3")}</option>
                    <option value={t("input3")}>{t("input3")}</option>
                    <option value={t("input3")}>{t("input3")}</option>
                  </select>
                </div>
                <div className="flex flex-row justify-start gap-[8px]">
                  <input className="rounded-md" type="checkbox" />
                  <p className="leading-[1.85] md:text-[14px] text-[13px] text-[#161519]">
                    {t("formCheck")}
                  </p>
                </div>
                <button
                  className="bg-[#111013] md:text-[16px] text-[14px] text-[#fff] rounded-md md:w-[180px] w-[160px] md:h-[48px] h-[43px]"
                  type="submit"
                >
                  {t("formButton")}
                </button>
              </form>
            </div>
          </div>
          <div>
            <h1 className="md:text-[18px] text-[16px] text-[#161519] font-[600] leading-[1.60]">
              {t("impTitle")}
            </h1>
            <p className="md:text-[16px] text-[14px] text-[#161519] leading-[1.60]">
              {t("impText")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:justify-between justify-center md:gap-[unset] gap-[30px] container">
        <div className="md:w-[23%] w-[100%]">
          <h1 className="lg:text-[28px] md:text-[25px] text-[21px] mb-[13px] text-[#111013] font-bold leading-[1.3]">
            {t("contactTitle")}
          </h1>
          <p className="md:text-[16px] text-[14px] text-[#111013] leading-[1.7]">
            {t("contactText")}
          </p>
        </div>
        {contactData.map((item, index) => (
          <div
            className="md:w-[23%] w-[100%] flex flex-col justify-start md:gap-[15px] gap-[10px]"
            key={index}
          >
            <h1 className="lg:text-[20px] md:text-[18px] text-[16px] text-[#111013] leading-[1.35] font-bold">
              {t(item.title)}
            </h1>
            <div>
              <p className="md:text-[16px] text-[14px] text-[#111013]">
                {t(item.info1)}
              </p>
              <p className="md:text-[18px] text-[16px] text-[#111013] font-semibold">
                {t(item.info2)}
              </p>
            </div>
            <p className="md:text-[16px] text-[14px] text-[#111013] leading-[1.4]">
              {t(item.text)}
            </p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default DataPage;
