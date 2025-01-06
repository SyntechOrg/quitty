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
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
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
              Assistance hours: Monday - Friday 6 am to 8 pm EST (toll free)
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
              Assistance hours: Monday - Friday 6 am to 8 pm EST (toll free)
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
              Assistance hours: Monday - Friday 6 am to 8 pm EST (toll free)
            </p>
          </FadeIn>
        </div>
        <div className="mt-32 flex w-full gap-x-8 gap-y-12 lg:mt-40">
          <div className="w-full lg:w-[30%]">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] lg:text-[26px]">
              {t("FormTitle")}
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              {t("FormText")}
            </p>
          </div>
          <div className="w-full bg-primary/10"></div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactUsSection;
