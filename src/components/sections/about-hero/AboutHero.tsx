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
      <FadeIn className="circular-carousel-container">
        {/*<div*/}
        {/*  className="absolute bottom-[-5%] left-[-5%] top-[90%] z-10 w-[25%] bg-background*/}
        {/*  blur-[12px] max-lg:bottom-[25%] max-lg:left-[-25%] max-lg:top-[45%]*/}
        {/*  max-md:bottom-[35%] max-md:top-[40%] max-sm:bottom-[40%] max-sm:top-[35%]"*/}
        {/*></div>*/}
        {/*<div*/}
        {/*  className="absolute bottom-[-5%] right-[-5%] top-[90%] z-10 w-[25%] bg-background*/}
        {/*  blur-[12px] max-lg:bottom-[25%] max-lg:right-[-25%] max-lg:top-[45%]*/}
        {/*  max-md:bottom-[35%] max-md:top-[40%] max-sm:bottom-[40%] max-sm:top-[35%]"*/}
        {/*></div>*/}
        <div
          className="absolute bottom-[-5%] left-[-5%] top-[92%] z-10 w-[24%] bg-background blur-[10px]
          max-[1460px]:hidden min-[2200px]:hidden"
        ></div>
        <div
          className="absolute bottom-[-5%] right-[-5%] top-[92%] z-10 w-[24%] bg-background blur-[10px]
          max-[1460px]:hidden min-[2200px]:hidden"
        ></div>
        <div className="circular-carousel">
          {circularCarouselImages.map((image, index) => (
            <div key={index} className="circular-carousel__item">
              <div className="image--wrapper">
                <Image src={image} alt="image" />
              </div>
              <div className="image--wrapper">
                <Image src={image} alt="image" className="rotate-[180deg]" />
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
