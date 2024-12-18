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

export const metadata: Metadata = {
  title: "Quitty | Product",
  description: "Our products",
};

const ContactPage: FC = () => (
  <div className="container">
    <ProductHero />
    <div className="my-32 lg:my-44">
      <Partners />
    </div>
    <Heading
      title="Heading-title2"
      underTitle="Heading-underTitle2"
      text="Heading-text2"
    />
    <Slider />
    <Process />
    <Features />
    <FeedbackStacked />
    <PackagesSection />
  </div>
);

export default ContactPage;
