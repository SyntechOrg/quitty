import React from "react";
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
    title: ["Service card-title-1", "Service card-title-1.1"],
    description: [
      "Serivce card-description-1",
      "Serivce card-description-1.1",
    ],
    image: WebDevImage,
    FAQ: [
      {
        question: "Portfolio",
        answer:
        "Services FAQ-a-1",
      },
      {
        question: "Portfolio",
        answer:
        "Services FAQ-a-1",
      },
      {
        question: "Portfolio",
        answer:
        "Services FAQ-a-3",
      },
    ],
    href: "/some-href",
  },
  {
    id: 2,
    title: ["Service card-title-2", "Service card-title-2.1"],
    description: [
      "Serivce card-description-2",
      "Serivce card-description-2.1",
    ],
    image: MobileAppImage,
    FAQ: [
      {
        question: "Portfolio",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
      },
      {
        question: "Portfolio",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
      },
      {
        question: "Portfolio",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
      },
    ],
    href: "/some-href",
  },
  {
    id: 3,
    title: ["Service card-title-3", "Service card-title-3.1"],
    description: [
      "Serivce card-description-3"
    ],
    image: BrandIdentityImage,
    FAQ: [
      {
        question: "Portfolio",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
      },
      {
        question: "Portfolio",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
      },
      {
        question: "Portfolio",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
      },
    ],
    href: "/some-href",
  },
  {
    id: 4,
    title: ["Service card-title-4", "Service card-title-4.1"],
    description: [
      "Serivce card-description-4",
      "Serivce card-description-4.1",
    ],
    image: DigitalMarketingImage,
    FAQ: [
      {
        question: "Portfolio1",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
      },
      {
        question: "Portfolio2",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
      },
      {
        question: "Portfolio3",
        answer:
          "Brands need to keep up with the times. A progressive corporate identity manages the balance between fresh designs and the preserved core of the brand. A real high-wire act of design.",
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
        title={t("Services first-title")}
        text={t("Services first-text")}
      />
      <FadeIn className="container mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <h2 className="category-text text-center lg:text-[22px]">
          {t("Services second-title")}
        </h2>
        <div className="mt-[50px] space-y-[50px] md:mt-[70px] lg:mt-[90px]">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              FAQ={service.FAQ}
              href={service.href}
            />
          ))}
        </div>
      </FadeIn>
      <SocialMedia />
    </div>
  );
};

export default ServicesPage;
