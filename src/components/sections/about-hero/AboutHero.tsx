import React from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { Button } from "@/components/shared";
import Image from "next/image";
import AppleLogo from "../../../../public/assets/images/apple-logo.png";
import AppleLogoWhite from "../../../../public/assets/images/apple-logo-white.png";
import GooglePlayLogo from "../../../../public/assets/images/google-play-logo.png";
import GooglePlayLogoWhite from "../../../../public/assets/images/google-play-logo-white.png";
import HeroImage1 from "../../../../public/assets/images/about-hero/about-hero-image-1.png";
import { useTranslations } from "next-intl";
import "./AboutHero.css";

const circularCarouselImages = [
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
  HeroImage1,
];

const AboutHero = () => {
  const t = useTranslations("About");

  return (
    <div className="relative">
      <FadeIn className="-mb-[300px] h-[600px] overflow-hidden pt-12">
        <div className="circular-carousel">
          {circularCarouselImages.map((image, index) => (
            <div key={index} className="circular-carousel__item">
              <div className="image--wrapper">
                <Image src={image} alt={`Carousel item ${index + 1}`} />
              </div>
              <div className="image--wrapper">
                <Image
                  src={image}
                  alt={`Carousel item ${index + 1} rotated`}
                  className="rotate-[180deg]"
                />
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
      <div className="relative z-10 mx-auto max-w-[400px] md:max-w-[550px] lg:max-w-[640px] lg:pt-20">
        <FadeIn className="flex flex-col items-center">
          <h1 className="text-center text-[32px] font-medium leading-[1.2] text-text md:text-[40px] lg:text-[52px]">
            {t("heroTitle")}
          </h1>
          <p className="mt-5 text-center text-[16px] leading-[1.6] text-text lg:text-[19px]">
            {t("heroText")}
          </p>
          <div className="mt-5 flex justify-center gap-5 max-lg:flex-col max-lg:items-center">
            <Button to={"/"} variant="primary" className="group w-[250px]">
              <Image
                src={AppleLogo}
                alt="Apple logo"
                className="h-full max-h-[30px] w-full max-w-[30px] object-contain group-hover:hidden"
              />
              <Image
                src={AppleLogoWhite}
                alt="Apple logo"
                className="hidden h-full max-h-[30px] w-full max-w-[30px] object-contain group-hover:block"
              />
              <span className="text-text duration-150 group-hover:text-white">
                App Store
              </span>
            </Button>
            <Button to={"/"} variant="primary" className="group w-[250px]">
              <Image
                src={GooglePlayLogo}
                alt="Google Play logo"
                className="h-full max-h-[30px] w-full max-w-[30px] object-contain group-hover:hidden"
              />
              <Image
                src={GooglePlayLogoWhite}
                alt="Google Play logo"
                className="hidden h-full max-h-[30px] w-full max-w-[30px] object-contain group-hover:block"
              />
              <span className="text-text duration-150 group-hover:text-white">
                Google Play
              </span>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default AboutHero;
