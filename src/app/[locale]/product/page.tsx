"use client";
import React, { FC } from "react";
import { Metadata } from "next";
import Partners from "@/components/shared/partners/Partners";
import Heading from "@/components/shared/heading/Heading";
import Slider from "@/components/sections/slider/Slider";
import Process from "@/components/sections/process/Process";
import Features from "@/components/sections/features/Features";
import PackagesSection from "@/components/sections/PackagesSection/PackagesSection";
import FeedbackStacked from "@/components/sections/feedback/FeedbackStacked";
import ProductHero from "@/components/sections/product-hero/ProductHero";
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
//       title: "Quitty – The Ultimate Digital Receipt Solution",
//       description: "Quitty is more than just digital receipts. It’s a complete retail solution that integrates loyalty rewards, simplifies returns, and provides powerful spending insights—all seamlessly connected to your POS system.",
//     },
//     de: {
//       title: "Quitty – Die Ultimative Lösung für Digitale Belege",
//       description: "Quitty ist mehr als nur digitale Belege. Es ist eine komplette Einzelhandelslösung, die Treueprämien integriert, Rückgaben vereinfacht und leistungsstarke Ausgabenanalysen bietet – alles nahtlos mit Ihrem Kassensystem verbunden.",
//     },
//   };
//
//   return metadataMap[lang] || metadataMap.de;
// }

const ProductPage = () => {
  useChatbase();

  return (
    <div className="container">
      <ProductHero />
      <div className="my-32 lg:my-44">{/* <Partners /> */}</div>
      <Heading
        title="Heading-title2"
        underTitle="Heading-underTitle2"
        text="Heading-text2"
      />
      <Slider />
      <Process />
      <Features />
      <FeedbackStacked />
      {/* <PackagesSection /> */}
    </div>
  );
};

export default ProductPage;
