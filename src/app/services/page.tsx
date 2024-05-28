import React from 'react';
import {SocialMedia} from "@/components/shared/social-media/SocialMedia";
import {SecondaryHeroSection} from "@/components/sections/secondaryHeroSection";
import BasicServiceCard from "@/components/cards/basicServiceCard";
import WebDevImage from "../../../public/assets/images/web-dev-service-image.png";
import MobileAppImage from "../../../public/assets/images/mobile-app-service-image.png";
import BrandIdentityImage from "../../../public/assets/images/brand-identity-service-image.png";
import DigitalMarketingImage from "../../../public/assets/images/digital-marketing-service-image.png";
import ServiceCard from "@/components/sections/serviceCard";


const services = [
  {
    title: <>Web Design<br/>& Development</>,
    description: [
      "Art meets efficiency in our web design services. We architect robust websites that serve as the cornerstone of " +
      "your digital identity. Our web development, from backend functionality to user-friendly interfaces, is the backbone of " +
      "a seamless online presence.",
      "In our approach to web design and development, we seamlessly blend creativity with functionality to create digital " +
      "experiences that resonate with your audience and drive tangible results. From conceptualization to execution, " +
      "we prioritize the user journey, ensuring intuitive navigation and engaging interactions at every touchpoint."
    ],
    image: WebDevImage,
    FAQ: [{question: "some", answer: "some"}, {question: "some", answer: "some"}, {question: "some", answer: "some"}],
    href: "/some-href"
  },
  {
    title: <>Mobile<br/>APP</>,
    description: [
      "Unlock the power of mobility with Syntech. Many years of expertise in mobile development allow us to design " +
      "architecture and create bespoke native applications for Apple iOS and Google Android.",
      "Our team combines technical expertise with creative innovation to craft mobile apps that deliver seamless user experiences " +
      "and drive engagement. Whether you're targeting the iOS or Android market, we ensure that your app stands out with intuitive design, " +
      "robust functionality, and optimal performance.",
    ],
    image: MobileAppImage,
    FAQ: [{question: "some", answer: "some"}, {question: "some", answer: "some"}, {question: "some", answer: "some"}],
    href: "/some-href"
  },
  {
    title: <>Brand<br/>Identity</>,
    description: [
      "Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, " +
      "values, and visual elements, such as logos and color schemes, to leave a lasting impression on the audience",
      "At our agency, we understand the importance of crafting a brand identity that resonates with your target audience and " +
      "sets you apart from competitors. Our approach involves defining a brand's personality, values, and visual elements, " +
      "such as logos and color schemes, to leave a lasting impression on the audience."
    ],
    image: BrandIdentityImage,
    FAQ: [{question: "some", answer: "some"}, {question: "some", answer: "some"}, {question: "some", answer: "some"}],
    href: "/some-href"
  },
  {
    title: <>Digital<br/>Marketing</>,
    description: [
      "In the realm of Digital Marketing, we excel at leveraging the power of online channels to drive growth and " +
      "engagement for businesses. Our expertise encompasses a wide range of strategies, including search engine optimization (SEO), " +
      "social media marketing, content creation, email campaigns, and more.",
      "At our agency, we understand the nuances of digital marketing and tailor our approach to suit your unique goals and target " +
      "audience. Whether you're looking to increase brand awareness, generate leads, or drive sales, we develop customized digital " +
      "marketing strategies that deliver measurable results."
    ],
    image: DigitalMarketingImage,
    FAQ: [{question: "some", answer: "some"}, {question: "some", answer: "some"}, {question: "some", answer: "some"}],
    href: "/some-href"
  }
];

const ServicesPage = () => {
  return (
    <div>
      <SecondaryHeroSection
        title="Expertise"
        text="Focusing on core areas, we combine our creative and technical expertise to reveal the essence of brands,
         redesigning websites, building web applications, and delivering e-commerce solutions."
      />
      <div className="container lg:mb-[150px] md:mb-[120px] mb-[60px]">
        <div className="lg:mt-[100px] md:mt-[80px] mt-[50px] space-y-[50px]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              FAQ={[{question: "some", answer: "some"}, {question: "some", answer: "some"}, {
                question: "some",
                answer: "some"
              }]}
              href={service.href}
            />
          ))}
        </div>
      </div>
      <SocialMedia/>
    </div>
  );
};

export default ServicesPage;
