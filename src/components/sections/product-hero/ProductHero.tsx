"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/shared";
import AppleLogo from "../../../../public/assets/images/apple-logo.png";
import GooglePlayLogo from "../../../../public/assets/images/google-play-logo.png";
import AppleLogoWhite from "../../../../public/assets/images/apple-logo-white.png";
import GooglePlayLogoWhite from "../../../../public/assets/images/google-play-logo-white.png";
import ProductHeroLeft1 from "../../../../public/assets/images/product-hero/hero-left-1.png";
import ProductHeroLeft2 from "../../../../public/assets/images/product-hero/hero-left-2.png";
import ProductHeroLeft3 from "../../../../public/assets/images/product-hero/hero-left-3.png";
import ProductHeroRight1 from "../../../../public/assets/images/product-hero/hero-right-1.png";
import ProductHeroRight2 from "../../../../public/assets/images/product-hero/hero-right-2.png";
import ProductHeroRight3 from "../../../../public/assets/images/product-hero/hero-right-3.png";
import ProductHeroResponsive from "../../../../public/assets/images/product-hero/product-hero-responsive.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/fade-in/FadeIn";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";

const ProductHero = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
  });
  const isLargeScreen = useIsLargeScreen();

  const left1Top = useTransform(scrollY, [0, 400], ["45vh", "-45vh"]);
  const left2Top = useTransform(scrollY, [0, 600], ["20vh", "15vh"]);
  const left3Top = useTransform(scrollY, [0, 600], ["85vh", "-10vh"]);

  const right1Top = useTransform(scrollY, [0, 400], ["50vh", "-40vh"]);
  const right2Top = useTransform(scrollY, [0, 600], ["25vh", "20vh"]);
  const right3Top = useTransform(scrollY, [0, 600], ["90vh", "-15vh"]);

  return (
    <div ref={targetRef} className="relative min-h-[100vh]">
      <div
        style={{
          position: isLargeScreen ? "sticky" : "relative",
          top: isLargeScreen ? 40 : 0,
        }}
        className="z-10 mx-auto  max-w-[400px] pt-5 md:max-w-[550px] lg:max-w-[640px] lg:pt-20"
      >
        <FadeIn className="flex flex-col items-center">
          <h1 className="text-center text-[32px] font-medium leading-[1.2] text-text md:text-[40px] lg:text-[52px]">
            Die Zukunft von digitalen Belegen, Kundenbindung und Nachhaltigkeit.
          </h1>
          <p className="mt-5 text-center text-[16px] leading-[1.6] text-text lg:text-[19px]">
            Gehe papierlos, binde Kunden ein und wachse mit Quitty’s All-in-One
            Digital-Receipt-Plattform.
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
      <FadeIn className="hidden lg:block">
        <motion.div
          style={{
            top: left1Top,
          }}
          className="absolute left-0 w-full max-w-[250px]"
        >
          <Image
            src={ProductHeroLeft1}
            alt="product hero image"
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          style={{
            top: left2Top,
          }}
          className="absolute left-24 z-[-1] w-full max-w-[250px]"
        >
          <Image
            src={ProductHeroLeft2}
            alt="product hero image"
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          style={{
            top: left3Top,
          }}
          className="absolute left-12 w-full max-w-[250px]"
        >
          <Image
            src={ProductHeroLeft3}
            alt="product hero image"
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          style={{
            top: right1Top,
          }}
          className="absolute right-0 w-full max-w-[250px]"
        >
          <Image
            src={ProductHeroRight1}
            alt="product hero image"
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          style={{
            top: right2Top,
          }}
          className="absolute right-24 z-[-1] w-full max-w-[250px]"
        >
          <Image
            src={ProductHeroRight2}
            alt="product hero image"
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          style={{
            top: right3Top,
          }}
          className="absolute right-10 w-full max-w-[250px]"
        >
          <Image
            src={ProductHeroRight3}
            alt="product hero image"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </FadeIn>
      <FadeIn className="mx-auto mt-10 block max-w-[620px] lg:hidden">
        <Image
          src={ProductHeroResponsive}
          alt="product hero image"
          className="h-full w-full object-cover"
        />
      </FadeIn>
    </div>
  );
};

export default ProductHero;
