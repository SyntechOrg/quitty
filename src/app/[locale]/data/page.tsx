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
      <h1 className="container text-[35px] md:text-[50px] lg:text-[60px]">
        {t("Title")}
      </h1>
      <h5 className="container text-[15px] md:text-[18px]">{t("UnderText")}</h5>

      <div className="mb-[40px] mt-[40px] w-full bg-[#E9EAF066] pb-[40px] pt-[40px] md:mb-[80px] md:mt-[80px] md:pb-[80px] md:pt-[80px] lg:mb-[100px] lg:mt-[100px] lg:pb-[100px] lg:pt-[100px]">
        <div className="container flex flex-col justify-center gap-[50px] md:gap-[100px]">
          <div className="flex flex-col items-center justify-center gap-[50px] md:flex-row md:items-start md:justify-between">
            <div className="align-start flex w-full flex-col justify-center gap-[20px] md:w-[48%]">
              <h1 className="text-[20px] font-bold leading-[1.30] text-[#111013] md:text-[24px] lg:text-[28px]">
                {t("formTitle")}
              </h1>
              <p className="text-[14px] leading-[1.70] text-[#161519] md:text-[16px]">
                {t("formText")}
              </p>
              <div>
                {listData.map((item, index) => (
                  <div key={index}>
                    <h5 className="mb-[4px] mt-[4px] text-[13px] font-[600] leading-[1.60] text-[#161519] md:text-[14px]">
                      {t(item.title)}
                    </h5>
                    <p className="text-[13px] md:text-[14px]">{t(item.text)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[48%]">
              <form
                className="flex w-full flex-col justify-center gap-[20px]"
                action=""
              >
                <div className="flex flex-col justify-center gap-[10px]">
                  <label
                    className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                    htmlFor="email"
                  >
                    {t("label1")}
                  </label>
                  <input
                    className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                    name="email"
                    type="email"
                    placeholder={t("input1")}
                  />
                </div>
                <div className="flex flex-col justify-center gap-[10px]">
                  <label
                    className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                    htmlFor="phone"
                  >
                    {t("label2")}
                  </label>
                  <input
                    className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                    name="phone"
                    type="tel"
                    placeholder={t("input2")}
                  />
                </div>
                <div className="flex flex-col justify-center gap-[10px]">
                  <label
                    className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                    htmlFor="reason"
                  >
                    {t("label3")}
                  </label>
                  <select
                    className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#60606B]"
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
                  <p className="text-[13px] leading-[1.85] text-[#161519] md:text-[14px]">
                    {t("formCheck")}
                  </p>
                </div>
                <button
                  className="h-[43px] w-[160px] rounded-md bg-[#111013] text-[14px] text-[#fff] md:h-[48px] md:w-[180px] md:text-[16px]"
                  type="submit"
                >
                  {t("formButton")}
                </button>
              </form>
            </div>
          </div>
          <div>
            <h1 className="text-[16px] font-[600] leading-[1.60] text-[#161519] md:text-[18px]">
              {t("impTitle")}
            </h1>
            <p className="text-[14px] leading-[1.60] text-[#161519] md:text-[16px]">
              {t("impText")}
            </p>
          </div>
        </div>
      </div>

      <div className="container flex flex-col justify-center gap-[30px] md:flex-row md:justify-between md:gap-[unset]">
        <div className="w-[100%] md:w-[23%]">
          <h1 className="mb-[13px] text-[21px] font-bold leading-[1.3] text-[#111013] md:text-[25px] lg:text-[28px]">
            {t("contactTitle")}
          </h1>
          <p className="text-[14px] leading-[1.7] text-[#111013] md:text-[16px]">
            {t("contactText")}
          </p>
        </div>
        {contactData.map((item, index) => (
          <div
            className="flex w-[100%] flex-col justify-start gap-[10px] md:w-[23%] md:gap-[15px]"
            key={index}
          >
            <h1 className="text-[16px] font-bold leading-[1.35] text-[#111013] md:text-[18px] lg:text-[20px]">
              {t(item.title)}
            </h1>
            <div>
              <p className="text-[14px] text-[#111013] md:text-[16px]">
                {t(item.info1)}
              </p>
              <p className="text-[16px] font-semibold text-[#111013] md:text-[18px]">
                {t(item.info2)}
              </p>
            </div>
            <p className="text-[14px] leading-[1.4] text-[#111013] md:text-[16px]">
              {t(item.text)}
            </p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default DataPage;
