import React from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useTranslations } from "next-intl";
import FormPrivacyNotice from "@/components/legal/FormPrivacyNotice";

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
        <div className="flex md:flex-row flex-col gap-x-8 gap-y-12">
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
              action="https://formspree.io/f/xppznkrv"
              method="POST"
            >
              <div className="flex sm:flex-row flex-col justify-between">
                <div className="flex flex-col justify-center gap-[10px] sm:w-[48%] w-full">
                  <label
                    className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                    htmlFor="name"
                  >
                    {t("formlabel1")}
                  </label>
                  <input
                    className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                    name="name"
                    type="text"
                    placeholder={t("formInput1")}
                  />
                </div>
                <div className="flex flex-col justify-center gap-[10px] sm:w-[48%] w-full">
                  <label
                    className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                    htmlFor="email"
                  >
                    {t("formlabel2")}
                  </label>
                  <input
                    className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                    name="email"
                    type="email"
                    placeholder={t("formInput2")}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-[10px] w-full">
                <label
                  className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                  htmlFor="phone"
                >
                  {t("formlabel3")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                  name="phone"
                  type="tel"
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
                  htmlFor="message"
                >
                  {t("formlabel5")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                  name="message"
                  type="text"
                  placeholder={t("formInput5")}
                />
              </div>

              {/* Two separate, optional consents (QTY-LAUNCH-2026-01 M-1);
                  neither is needed to send the enquiry. */}
              <fieldset className="flex flex-col gap-[10px]">
                <legend className="mb-[10px] text-[13px] leading-[1.5] text-[#161519] md:text-[14px]">
                  {t("formcheckLegend")}
                </legend>
                <label className="flex flex-row items-start justify-start gap-[8px]">
                  <input
                    className="mt-[6px] rounded-md"
                    type="checkbox"
                    name="consent_marketing_emails"
                    value="yes"
                  />
                  <span className="text-[13px] leading-[1.85] text-[#161519] md:text-[14px]">
                    {t("formcheckEmails")}
                  </span>
                </label>
                <label className="flex flex-row items-start justify-start gap-[8px]">
                  <input
                    className="mt-[6px] rounded-md"
                    type="checkbox"
                    name="consent_email_tracking"
                    value="yes"
                  />
                  <span className="text-[13px] leading-[1.85] text-[#161519] md:text-[14px]">
                    {t("formcheckTracking")}
                  </span>
                </label>
              </fieldset>
              <FormPrivacyNotice />
              <button
                className="h-[43px] w-[160px] rounded-md bg-[#111013] text-[14px] text-[#fff] md:h-[48px] md:w-[180px] md:text-[16px]"
                type="submit"
              >
                {t("formbutton1")}
              </button>
            </form>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-[repeat(5,max-content)] xl:justify-between lg:mt-40 mt-32">
          <FadeIn className="w-full min-w-0 text-left">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] md:min-h-[68px] lg:text-[26px]">
              {t("addressTitle")}
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Brauereistrasse 1a,
              <br />
              8730 Uznach
            </p>
          </FadeIn>
          <FadeIn className="w-full min-w-0 text-left">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] md:min-h-[68px] lg:text-[26px]">
              {t("contactNumber")}
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              <a href="tel:+41555896767">055 589 67 67</a>
            </p>
          </FadeIn>
          <FadeIn className="w-full min-w-0 text-left">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] md:min-h-[68px] lg:text-[26px]">
              Business Support
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Email: support@quitty.ch
            </p>
            {/* <p className="text-[16px] font-semibold leading-[1.6] text-[#161519]">
              {t("contactNumber")} +41 55 589 67 67
            </p> */}
            {/* <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              {t("assistanceContact")}
            </p> */}
          </FadeIn>
          <FadeIn className="w-full min-w-0 text-left">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] md:min-h-[68px] lg:text-[26px]">
              {t("salesContact")}
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Email: sales@quitty.ch
            </p>
            {/* <p className="text-[16px] font-semibold leading-[1.6] text-[#161519]">
              {t("contactNumber")} +41 55 589 67 67
            </p> */}
            {/* <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              {t("assistanceContact")}
            </p> */}
          </FadeIn>
          <FadeIn className="w-full min-w-0 text-left">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] md:min-h-[68px] lg:text-[26px]">
              General
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              Email: info@quitty.ch
            </p>
            {/* <p className="text-[16px] font-semibold leading-[1.6] text-[#161519]">
              {t("contactNumber")} +41 55 589 67 67
            </p> */}
            {/* <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              {t("assistanceContact")}
            </p> */}
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactUsSection;
