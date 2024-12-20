import HomeHero from "@/components/sections/home-hero/HomeHero";
import { FadeIn } from "@/components/fade-in/FadeIn";
import InsightsSection from "@/components/sections/insights-section/InsightsSection";
import PromoSection from "@/components/sections/promo-section/PromoSection";
import HowItWorksSection from "@/components/sections/how-it-works/HowItWorksSection";
import Partners from "@/components/shared/partners/Partners";
import React from "react";
import SpotLightSection from "@/components/sections/spotlight-section/SpotLightSection";
import PackagesSection from "@/components/sections/PackagesSection/PackagesSection";
import HomeHeroBg from "@/components/sections/home-hero/HomeHeroBg";
import FeedbackStacked from "@/components/sections/feedback/FeedbackStacked";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("Home");
  return (
    <>
      <HomeHeroBg />
      <div className="container relative">
        <HomeHero />
        <div className="mt-[-420px]">
          <Partners />
        </div>
        <FadeIn className="mx-auto mt-32 max-w-[780px] text-center text-text lg:mt-52">
          <h2 className="text-[32px] font-medium leading-[1.4] lg:text-[42px]">
            {t("ChangeTitle")};
          </h2>
          <p className="mt-4 text-[18px] font-medium leading-[1.4] lg:mt-8 lg:text-[20px]">
            {t("ChangeUndertitle")}
          </p>
        </FadeIn>
        <InsightsSection />
        <FadeIn className="mx-auto max-w-[650px] text-center text-text">
          <h3 className="text-[32px] font-medium leading-[1.4] lg:text-[58px]">
            {t("Sustainable")}
          </h3>
        </FadeIn>
        <PromoSection />
        <HowItWorksSection />
        <SpotLightSection />
        <FeedbackStacked />
        <PackagesSection />
      </div>
    </>
  );
};

export default Home;
