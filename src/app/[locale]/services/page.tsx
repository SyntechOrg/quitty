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
      "Art meets efficiency in our web design services. We architect robust websites that serve as the cornerstone of " +
        "your digital identity. Our web development, from backend functionality to user-friendly interfaces, is the backbone of " +
        "a seamless online presence.",
      "In our approach to web design and development, we seamlessly blend creativity with functionality to create digital " +
        "experiences that resonate with your audience and drive tangible results. From conceptualization to execution, " +
        "we prioritize the user journey, ensuring intuitive navigation and engaging interactions at every touchpoint.",
    ],
    image: WebDevImage,
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
    id: 2,
    title: ["Service card-title-2", "Service card-title-2.1"],
    description: [
      "Unlock the power of mobility with Syntech. Many years of expertise in mobile development allow us to design " +
        "architecture and create bespoke native applications for Apple iOS and Google Android.",
      "Our team combines technical expertise with creative innovation to craft mobile apps that deliver seamless user experiences " +
        "and drive engagement. Whether you're targeting the iOS or Android market, we ensure that your app stands out with intuitive design, " +
        "robust functionality, and optimal performance.",
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
      "Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, " +
        "values, and visual elements, such as logos and color schemes, to leave a lasting impression on the audience",
      "At our agency, we understand the importance of crafting a brand identity that resonates with your target audience and " +
        "sets you apart from competitors. Our approach involves defining a brand's personality, values, and visual elements, " +
        "such as logos and color schemes, to leave a lasting impression on the audience.",
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
      "In the realm of Digital Marketing, we excel at leveraging the power of online channels to drive growth and " +
        "engagement for businesses. Our expertise encompasses a wide range of strategies, including search engine optimization (SEO), " +
        "social media marketing, content creation, email campaigns, and more.",
      "At our agency, we understand the nuances of digital marketing and tailor our approach to suit your unique goals and target " +
        "audience. Whether you're looking to increase brand awareness, generate leads, or drive sales, we develop customized digital " +
        "marketing strategies that deliver measurable results.",
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
