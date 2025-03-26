import React from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useTranslations } from "next-intl";

const ContactUsSection = () => {
  const t = useTranslations("Contact");

  return (
    <FadeIn className="relative my-32 flex items-center justify-center py-[80px] lg:my-52">
      <div
        className="absolute z-[-1] mx-auto h-full w-screen overflow-clip"
        style={{
          backgroundColor: "rgba(233, 234, 240, 0.40)",
        }}
      ></div>
      <div>
        <div className="flex md:flex-row flex-col gap-x-8 gap-y-12 container">
          <div className="w-full lg:w-[30%]">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] lg:text-[26px]">
              {t("FormTitle")}
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              {t("FormText")}
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <form
              className="flex w-full flex-col justify-center gap-[20px]"
              action=""
            >
              <div className="flex sm:flex-row flex-col justify-between">
                <div className="flex flex-col justify-center gap-[10px] sm:w-[48%] w-full">
                  <label
                    className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                    htmlFor="email"
                  >
                    {t("formlabel1")}
                  </label>
                  <input
                    className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                    name="email"
                    type="email"
                    placeholder={t("formInput1")}
                  />
                </div>
                <div className="flex flex-col justify-center gap-[10px] sm:w-[48%] w-full">
                  <label
                    className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                    htmlFor="phone"
                  >
                    {t("formlabel2")}
                  </label>
                  <input
                    className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                    name="phone"
                    type="tel"
                    placeholder={t("formInput2")}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-[10px] w-full">
                <label
                  className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                  htmlFor="email"
                >
                  {t("formlabel3")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                  name="email"
                  type="email"
                  placeholder={t("formInput3")}
                />
              </div>
              {/* <div className="flex flex-col justify-center gap-[10px] sm:w-[48%] w-full">
                  <label
                    className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                    htmlFor="reason"
                  >
                    {t("formlabel4")}
                  </label>
                  <input
                    className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#60606B]"
                    name="reason"
                    placeholder={t("formInput4")}
                  />
                </div> */}
              <div className="flex flex-col justify-center gap-[10px] w-[100%]">
                <label
                  className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                  htmlFor="email"
                >
                  {t("formlabel5")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                  name="email"
                  type="email"
                  placeholder={t("formInput5")}
                />
              </div>

              <div className="flex flex-row justify-start gap-[8px]">
                <input className="rounded-md" type="checkbox" />
                <p className="text-[13px] leading-[1.85] text-[#161519] md:text-[14px]">
                  {t("formcheck1")}
                </p>
              </div>
              <button
                className="h-[43px] w-[160px] rounded-md bg-[#111013] text-[14px] text-[#fff] md:h-[48px] md:w-[180px] md:text-[16px]"
                type="submit"
              >
                {t("formbutton1")}
              </button>
            </form>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:mt-40 mt-32">
          <FadeIn className="w-full max-lg:mx-auto max-lg:max-w-[320px] max-md:text-center">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] lg:text-[26px]">
              Sie finden uns
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Brauereistrasse 1a;
              <br />
              8730 Uznach
            </p>
          </FadeIn>
          <FadeIn className="w-full max-lg:mx-auto max-lg:max-w-[320px] max-md:text-center">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] lg:text-[26px]">
              Business Support
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Email: support@quitty.ch
            </p>
            <p className="text-[16px] font-semibold leading-[1.6] text-[#161519]">
              Call us: +4409.120.6705
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Assistance hours: Monday - Friday 9 am to 5 pm EST
            </p>
          </FadeIn>
          <FadeIn className="w-full max-lg:mx-auto max-lg:max-w-[320px] max-md:text-center">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] lg:text-[26px]">
              Sales:
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Email: sales@quitty.ch
            </p>
            <p className="text-[16px] font-semibold leading-[1.6] text-[#161519]">
              Call us: +4409.120.6705
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Assistance hours: Monday - Friday 9 am to 5 pm EST
            </p>
          </FadeIn>
          <FadeIn className="w-full max-lg:mx-auto max-lg:max-w-[320px] max-md:text-center">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] lg:text-[26px]">
              General:
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Email: info@quitty.ch
            </p>
            <p className="text-[16px] font-semibold leading-[1.6] text-[#161519]">
              Call us: +4409.120.6705
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Assistance hours: Monday - Friday 9 am to 5 pm EST
            </p>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactUsSection;
