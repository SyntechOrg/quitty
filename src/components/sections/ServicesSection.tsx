import React from "react";
import SectionHeader from "@/components/header/SectionHeader";
import BasicServiceCard from "@/components/cards/BasicServiceCard";
import WebDevImage from "../../../public/assets/images/web-dev-service-image.png";
import MobileAppImage from "../../../public/assets/images/mobile-app-service-image.png";
import BrandIdentityImage from "../../../public/assets/images/brand-identity-service-image.png";
import DigitalMarketingImage from "../../../public/assets/images/digital-marketing-service-image.png";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";

const services = [
  {
    id: 1,
    title: ["Service card-title-1", "Service card-title-1-1"],
    description: "Service card-description-1",
    image: WebDevImage,
    categories: ["Portfolio", "eCommerce", "Software"],
    href: "/services#1",
  },
  {
    id: 2,
    title: ["Service card-title-2", "Service card-title-2-1"],
    description: "Service card-description-2",
    image: MobileAppImage,
    categories: ["React Native", "FlutterJS", "Kotlin"],
    href: "/services#2",
  },
  {
    id: 3,
    title: ["Service card-title-3", "Service card-title-3-1"],
    description: "Service card-description-3",
    image: BrandIdentityImage,
    categories: ["Logo", "Brand Identity", "Graphics & Illustration"],
    href: "/services#3",
  },
  {
    id: 4,
    title: ["Service card-title-4", "Service card-title-4-1"],
    description: "Service card-description-4",
    image: DigitalMarketingImage,
    categories: [
      "Marketing Automation",
      "PPC Advertising",
      "Online Reputation",
    ],
    href: "/services#4",
  },
];

const ServicesSection = () => {
  const t = useTranslations("Shared");

  return (
    <div className="container mt-[60px] md:mt-[120px] lg:mt-[150px]">
      <FadeIn>
        <SectionHeader
          title={t("Services title-1")}
          category={t("Services category-1")}
        />
      </FadeIn>
      <div className="mt-[50px] space-y-[50px] md:mt-[80px] lg:mt-[100px]">
        {services.map((service, index) => (
          <BasicServiceCard
            key={index}
            title={service.title}
            description={t(service.description)}
            image={service.image}
            categories={service.categories}
            href={service.href}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
