"use client";

import HomeHero from "@/components/sections/home-hero/HomeHero";
import type { AppProps } from "next/app";

import { FadeIn } from "@/components/fade-in/FadeIn";
import InsightsSection from "@/components/sections/insights-section/InsightsSection";
import PromoSection from "@/components/sections/promo-section/PromoSection";
import HowItWorksSection from "@/components/sections/how-it-works/HowItWorksSection";
import Partners from "@/components/shared/partners/Partners";
import React, { useEffect, useState } from "react";
import SpotLightSection from "@/components/sections/spotlight-section/SpotLightSection";
import PackagesSection from "@/components/sections/PackagesSection/PackagesSection";
import HomeHeroBg from "@/components/sections/home-hero/HomeHeroBg";
import FeedbackStacked from "@/components/sections/feedback/FeedbackStacked";
import { useTranslations } from "next-intl";
import VideoSection from "@/components/sections/video-section/video-section";
import { TextShimmer } from "@/components/ui/text-shimmer";
import PromoTitleSection from "@/components/promo-title-section/PromoTitleSection";
import withAuth from "@/components/hocs/withAuth";
import useChatbase from "@/components/chatbot/useChatbase";

//   const metadataMap = {
//     en: {
//       title: "Quitty – Revolutionizing Digital Receipts",
//       description: "Transform your retail experience with Quitty. Our all-in-one platform offers digital receipts, integrated loyalty rewards, and actionable customer insights, all while reducing your environmental footprint.",
//     },
//     de: {
//       title: "Quitty – Revolutioniert Digitale Kassenbons",
//       description: "Verwandeln Sie Ihr Einzelhandelserlebnis mit Quitty. Unsere All-in-One-Plattform bietet digitale Kassenbons, integrierte Treueprämien und umsetzbare Kundenanalysen – alles bei gleichzeitiger Reduzierung Ihres ökologischen Fussabdrucks.",
//     },
//   };
//
//   return metadataMap[lang] || metadataMap.de;
// }

const Home = () => {
  const t = useTranslations("Home");

  useChatbase();

  return (
    <>
      <HomeHeroBg />
      <div className="container relative">
        <HomeHero />
        <div className="mt-[-420px]">{/* <Partners /> */}</div>
        <FadeIn className="mx-auto mt-32 text-center text-text lg:mt-52">
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
        <VideoSection />

        <SpotLightSection />
        <FeedbackStacked />
        {/* <PackagesSection /> */}
      </div>
    </>
  );
};

export default Home;
