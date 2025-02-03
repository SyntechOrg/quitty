import React from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useTranslations } from "next-intl";
import { Button } from "@/components/shared";

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
        <div className="mt-32 flex w-full flex-col gap-x-8 gap-y-12 max-lg:mx-auto max-lg:max-w-[720px] lg:mt-40 lg:flex-row">
          <div className="w-full lg:w-[30%]">
            <p className="text-[24px] font-semibold leading-[1.3] text-[#111013] lg:text-[26px]">
              {t("FormTitle")}
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#161519]">
              {t("FormText")}
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-8">
            <div className="space-y-3">
              <label className="text-[14px] font-medium leading-[16px] text-text">
                Vollständiger Name (erforderlich)
              </label>
              <input
                type="text"
                placeholder="Ihr Name"
                className="w-full rounded-[6px] !bg-[#90919C14] bg-white px-4 py-3 text-text placeholder-[#60606B] focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[14px] font-medium leading-[16px] text-text">
                Vollständiger Name (erforderlich)
              </label>
              <input
                type="text"
                placeholder="Ihr Name"
                className="w-full rounded-[6px] !bg-[#90919C14] bg-white px-4 py-3 text-text placeholder-[#60606B] focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[14px] font-medium leading-[16px] text-text">
                Telefon (optional)
              </label>
              <input
                type="tel"
                placeholder="Your actual number"
                className="w-full rounded-[6px] !bg-[#90919C14] bg-white px-4 py-3 text-text placeholder-[#60606B] focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[14px] font-medium leading-[16px] text-text">
                Subject (optional)
              </label>
              <select
                className="w-full rounded-[6px] !bg-[#90919C14] bg-white px-4 py-3 text-text
               placeholder-[#60606B] focus:border-primary focus:ring-primary"
              >
                <option>Choose a subject</option>
                <option>Sales Inquiry</option>
                <option>Support Request</option>
                <option>General Question</option>
              </select>
            </div>
            <div className="space-y-2 lg:col-span-2">
              <label className="text-[14px] font-medium leading-[16px] text-text">
                How can we help you?* (required)
              </label>
              <textarea
                placeholder="Brief project details"
                className="max-h-80 min-h-12 w-full rounded-[6px] !bg-[#90919C14] bg-white px-4
               py-3 text-text placeholder-[#60606B] focus:border-primary focus:ring-primary"
              ></textarea>
            </div>
            <label className="flex items-center space-x-3 lg:col-span-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[#90919C14] text-text focus:ring-text"
              />
              <span className="text-[14px] leading-[16px] text-text">
                Ich bin damit einverstanden, E-Mails zu erhalten und diese
                Aktivität zur Verbesserung meiner Erfahrung zu verfolgen.
              </span>
            </label>
            <div className="lg:col-span-2">
              <Button
                type="submit"
                variant="contact"
                className="h-12 w-full max-w-[230px] rounded-[6px]"
              >
                Ein Angebot anfordern
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactUsSection;
