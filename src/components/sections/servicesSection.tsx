import React from 'react';
import SectionHeader from "@/components/header/sectionHeader";
import BasicServiceCard from "@/components/cards/basicServiceCard";
import WebDevImage from "../../../public/assets/images/web-dev-image.png";
import MobileAppImage from "../../../public/assets/images/mobile-app-image.png";
import BrandIdentityImage from "../../../public/assets/images/brand-identity-image.png";
import BrandIdentityImage2 from "../../../public/assets/images/brand-identity-image2.png";
import DigitalMarketingImage from "../../../public/assets/images/digital-marketing-image.png";

const services = [
  {
    title: "Brand Identity",
    description: "Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, values, and visual elements, such as logos and color schemes, to leave a lasting impression on the audience",
    image: WebDevImage,
    categories: ["Logo", "Brand Identity", "Graphics & Illustration"],
    href: "/some-href"
  },
  {
    title: "Brand Identity",
    description: "Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, values, and visual elements, such as logos and color schemes, to leave a lasting impression on the audience",
    image: MobileAppImage,
    categories: ["Logo", "Brand Identity", "Graphics & Illustration"],
    href: "/some-href"
  },
  {
    title: "Brand Identity",
    description: "Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, values, and visual elements, such as logos and color schemes, to leave a lasting impression on the audience",
    image: BrandIdentityImage,
    categories: ["Logo", "Brand Identity", "Graphics & Illustration"],
    href: "/some-href"
  },
  {
    title: "Brand Identity",
    description: "Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, values, and visual elements, such as logos and color schemes, to leave a lasting impression on the audience",
    image: DigitalMarketingImage,
    categories: ["Logo", "Brand Identity", "Graphics & Illustration"],
    href: "/some-href"
  }
];

const ServicesSection = () => {
  return (
    <div className="container lg:mt-[150px] md:mt-[120px] mt-[60px]">
      <SectionHeader title="Creating Impactful Digital Narratives" category="02- SERVICES"/>
      <div className="lg:mt-[100px] md:mt-[80px] mt-[50px] space-y-[50px]">
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
    </div>
  );
};

export default ServicesSection;
