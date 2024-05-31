import React from "react";
import SectionHeader from "@/components/header/SectionHeader";
import BasicServiceCard from "@/components/cards/BasicServiceCard";
import WebDevImage from "../../../public/assets/images/web-dev-service-image.png";
import MobileAppImage from "../../../public/assets/images/mobile-app-service-image.png";
import BrandIdentityImage from "../../../public/assets/images/brand-identity-service-image.png";
import DigitalMarketingImage from "../../../public/assets/images/digital-marketing-service-image.png";
import { FadeIn } from "../fade-in/FadeIn";

const services = [
  {
    title: (
      <>
        Web Design
        <br />& Development
      </>
    ),
    description:
      "Art meets efficiency in our web design services. We architect robust websites that serve as the cornerstone of " +
      "your digital identity. Our web development, from backend functionality to user-friendly interfaces, is the backbone of " +
      "a seamless online presence.",
    image: WebDevImage,
    categories: ["Portfolio", "eCommerce", "Software"],
    href: "/some-href",
  },
  {
    title: (
      <>
        Mobile
        <br />
        APP
      </>
    ),
    description:
      "Unlock the power of mobility with Syntech. Many years of expertise in mobile development allow us to design " +
      "architecture and create bespoke native applications for Apple iOS and Google Android.",
    image: MobileAppImage,
    categories: ["React Native", "FlutterJS", "Kotlin"],
    href: "/some-href",
  },
  {
    title: (
      <>
        Brand
        <br />
        Identity
      </>
    ),
    description:
      "Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, " +
      "values, and visual elements, such as logos and color schemes, to leave a lasting impression on the audience",
    image: BrandIdentityImage,
    categories: ["Logo", "Brand Identity", "Graphics & Illustration"],
    href: "/some-href",
  },
  {
    title: (
      <>
        Digital
        <br />
        Marketing
      </>
    ),
    description:
      "In the realm of Digital Marketing, we excel at leveraging the power of online channels to drive growth and " +
      "engagement for businesses. Our expertise encompasses a wide range of strategies, including search engine optimization (SEO), " +
      "social media marketing, content creation, email campaigns, and more.",
    image: DigitalMarketingImage,
    categories: [
      "Marketing Automation",
      "PPC Advertising",
      "Online Reputation",
    ],
    href: "/some-href",
  },
];

const ServicesSection = () => {
  return (
    <FadeIn className="container mt-[60px] md:mt-[120px] lg:mt-[150px]">
      <SectionHeader
        title="Creating Impactful Digital Narratives"
        category="02- SERVICES"
      />
      <div className="mt-[50px] space-y-[50px] md:mt-[80px] lg:mt-[100px]">
        {services.map((service, index) => (
          <BasicServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            categories={service.categories}
            href={service.href}
          />
        ))}
      </div>
    </FadeIn>
  );
};

export default ServicesSection;
