import HomeHero from "@/components/sections/home-hero/HomeHero";
import { FadeIn } from "@/components/fade-in/FadeIn";
import InsightsSection from "@/components/sections/insights-section/InsightsSection";
import PromoSection from "@/components/sections/promo-section/PromoSection";
import HowItWorksSection from "@/components/sections/how-it-works/HowItWorksSection";
import Partners from "@/components/shared/partners/Partners";
import React from "react";
import SpotLightSection from "@/components/sections/spotlight-section/SpotLightSection";
import PackagesSection from "@/components/sections/PackagesSection/PackagesSection";

const Home = () => {
  return (
    <div className="container relative">
      <HomeHero />
      <div className="mt-[-420px]">
        <Partners />
      </div>
      <FadeIn className="mx-auto mt-32 max-w-[780px] text-center text-text lg:mt-52">
        <h2 className="text-[32px] font-medium leading-[1.4] lg:text-[42px]">
          Verändere die Art und Weise, wie du deine Quittungen einfach verwaltest.
        </h2>
        <p className="mt-4 text-[18px] font-medium leading-[1.4] lg:mt-8 lg:text-[20px]">
          Bau Loyalität auf, spare Geld und werde mühelos umweltfreundlich.
        </p>
      </FadeIn>
      <InsightsSection />
      <FadeIn className="mx-auto max-w-[650px] text-center text-text">
        <h3 className="text-[32px] font-medium leading-[1.4] lg:text-[58px]">
          Nachhaltig, effizient und ansprechend.
        </h3>
      </FadeIn>
      <PromoSection />
      <HowItWorksSection />
      <SpotLightSection />
      <PackagesSection />
    </div>
  );
};

export default Home;
