"use client";

import React from "react";
import type { Metadata } from "next";
import Heading from "@/components/shared/heading/Heading";
import Mission from "@/components/sections/mission/Mission";
import Partners from "@/components/shared/partners/Partners";
import PackagesSection from "@/components/sections/PackagesSection/PackagesSection";
import FeedbackStacked from "@/components/sections/feedback/FeedbackStacked";
import ImpactSection from "@/components/ImpactSection/ImpactSection";
import TeamSection from "@/components/sections/team-section/TeamSection";
import CoreValuesSection from "@/components/core-values/CoreValuesSection";
import VideoSection from "@/components/sections/video-section/video-section";
import AboutHero from "@/components/sections/about-hero/AboutHero";
import withAuth from "@/components/hocs/withAuth";
import useChatbase from "@/components/chatbot/useChatbase";

// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const lang = params.locale || "de";
//
//   const metadataMap = {
//     en: {
//       title: "Quitty – About Us | Revolutionizing Retail",
//       description: "At Quitty, we believe in transforming retail for a sustainable future. By eliminating paper receipts and enhancing customer engagement, we empower businesses to thrive in the digital age.",
//     },
//     de: {
//       title: "Quitty – Über Uns | Einzelhandel Revolutionieren",
//       description: "Bei Quitty glauben wir daran, den Einzelhandel für eine nachhaltige Zukunft zu transformieren. Durch die Abschaffung von Papierbelegen und die Verbesserung der Kundenbindung ermöglichen wir Unternehmen, im digitalen Zeitalter erfolgreich zu sein.",
//     },
//   };
//
//   return metadataMap[lang] || metadataMap.de;
// }
const AboutPage = () => {
  useChatbase();
  return (
    <div className="container">
      <AboutHero />
      {/* <Partners /> */}
      <Heading
        title="Heading-title1"
        underTitle="Heading-underTitle1"
        text="Heading-text1"
      />
      <Mission />
      {/* <VideoSection /> */}
      <CoreValuesSection />
      <TeamSection />
      <ImpactSection />
      <FeedbackStacked />
      {/* <PackagesSection /> */}
    </div>
  );
};

export default withAuth(AboutPage);
