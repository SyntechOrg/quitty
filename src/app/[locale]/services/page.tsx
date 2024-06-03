import React, {Fragment} from "react";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import { SecondaryHeroSection } from "@/components/sections/SecondaryHeroSection";
import WebDevImage from "../../../../public/assets/images/web-dev-service-image.png";
import MobileAppImage from "../../../../public/assets/images/mobile-app-service-image.png";
import BrandIdentityImage from "../../../../public/assets/images/brand-identity-service-image.png";
import DigitalMarketingImage from "../../../../public/assets/images/digital-marketing-service-image.png";
import ServiceCard from "@/components/sections/ServiceCard";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useTranslations } from "next-intl";

const services = [
  {
    id: 1,
    title: ["Service card-title-1", "Service card-title-1-1"],
    description: ["Service card-description-1", "Service card-description-1-1"],
    image: WebDevImage,
    FAQ: [
      {
        question: "Services FAQ-q1-1",
        answer: "Services FAQ-a1-1",
      },
      {
        question: "Services FAQ-q1-2",
        answer: "Services FAQ-a1-1",
      },
      {
        question: "Services FAQ-q1-3",
        answer: "Services FAQ-a1-3",
      },
    ],
    href: "/some-href",
  },
  {
    id: 2,
    title: ["Service card-title-2", "Service card-title-2-1"],
    description: ["Service card-description-2", "Service card-description-2-1"],
    image: MobileAppImage,
    FAQ: [
      {
        question: "Services FAQ-q2-1",
        answer: "Services FAQ-a2-1",
      },
      {
        question: "Services FAQ-q2-2",
        answer: "Services FAQ-a2-2",
      },
      {
        question: "Services FAQ-q2-3",
        answer: "Services FAQ-a2-3",
      },
    ],
    href: "/some-href",
  },
  {
    id: 3,
    title: ["Service card-title-3", "Service card-title-3-1"],
    description: ["Service card-description-3"],
    image: BrandIdentityImage,
    FAQ: [
      {
        question: "Services FAQ-q3-1",
        answer: "Services FAQ-a3-1",
      },
      {
        question: "Services FAQ-q3-2",
        answer: "Services FAQ-a3-2",
      },
      {
        question: "Services FAQ-q3-3",
        answer: "Services FAQ-a3-3",
      },
    ],
    href: "/some-href",
  },
  {
    id: 4,
    title: ["Service card-title-4", "Service card-title-4-1"],
    description: ["Service card-description-4", "Service card-description-4-1"],
    image: DigitalMarketingImage,
    FAQ: [
      {
        question: "Services FAQ-q4-1",
        answer: "Services FAQ-a4-1",
      },
      {
        question: "Services FAQ-q4-2",
        answer: "Services FAQ-a4-2",
      },
      {
        question: "Services FAQ-q4-3",
        answer: "Services FAQ-a4-3",
      },
    ],
    href: "/some-href",
  },
];

const ServicesPage = () => {
  const t = useTranslations("Services");
  return (
    <div>
      <SecondaryHeroSection
        title={"Services.Services first-title"}
        text={"Services.Services first-text"}
      />
      <div className="container mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <FadeIn>
          <h2 className="category-text text-center lg:text-[22px]">
            {t("Services second-title")}
          </h2>
        </FadeIn>
        <div className="mt-[50px] space-y-[50px] md:mt-[70px] lg:mt-[90px]">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              FAQ={service.FAQ}
            />
          ))}
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default ServicesPage;
