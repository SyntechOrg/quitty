import HomeHero from "@/components/sections/home-hero/HomeHero";
import { FadeIn } from "@/components/fade-in/FadeIn";
import InsightsSection from "@/components/sections/insights-section/InsightsSection";
import PromoSection from "@/components/sections/promo-section/PromoSection";
import HowItWorksSection from "@/components/sections/how-it-works/HowItWorksSection";
import Partners from "@/components/shared/partners/Partners";
import React from "react";

const Home = () => {
  return (
    <div className="container relative">
      <HomeHero />
      <Partners />
      <FadeIn className="mx-auto mt-32 max-w-[780px] text-center text-text lg:mt-52">
        <h2 className="text-[24px] font-medium leading-[1.4] lg:text-[58px]">
          Changing the way you Easily Manage your Receipts
        </h2>
        <p className="mt-4 text-[17px] font-medium leading-[1.4] lg:mt-8 lg:text-[22px]">
          Build loyalty, save money, and go green with ease.
        </p>
      </FadeIn>
      <InsightsSection />
      <FadeIn className="mx-auto max-w-[650px] text-center text-text">
        <h3 className="text-[24px] font-medium leading-[1.4] lg:text-[58px]">
          Sustainable, Efficient, and Engaging.
        </h3>
      </FadeIn>
      <PromoSection />
      <HowItWorksSection />
    </div>
  );
};

export default Home;
