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
import VideoSection from "@/components/sections/video-section/video-section";
import { TextShimmer } from "@/components/ui/text-shimmer";
import PromoTitleSection from "@/components/promo-title-section/PromoTitleSection";

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
          <TextShimmer
            className="text-[32px] font-medium leading-[1.4] lg:text-[58px]"
            duration={4.5}
            spread={55}
            as="h2"
          >
            {t("ChangeTitle")};
          </TextShimmer>
          <TextShimmer
            className="mt-4 text-[18px] font-medium leading-[1.4] lg:mt-8 lg:text-[20px]"
            duration={4.5}
          >
            {t("ChangeUndertitle")}
          </TextShimmer>
        </FadeIn>
        <InsightsSection />
        <PromoTitleSection title={t("Sustainable")} as="h4" />
        <PromoSection />
        <HowItWorksSection />
        <VideoSection url="https://www.youtube.com/embed/YZ84iQrbYjw?si=NsmS-Uwu1xz690W0" />
        <SpotLightSection />
        <FeedbackStacked />
        <PackagesSection />
      </div>
    </>
  );
};

export default Home;
