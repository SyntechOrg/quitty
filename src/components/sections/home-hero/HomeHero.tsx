"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/shared";
import HomeHeroImage from "../../../../public/assets/images/home-hero-image.png";
import AppleLogoWhite from "../../../../public/assets/images/apple-logo-white.png";
import GooglePlayLogoWhite from "../../../../public/assets/images/google-play-logo-white.png";
import IphoneMockup from "../../../../public/assets/images/iphone-mockup.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/fade-in/FadeIn";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";

const HomeHero = () => {
  const { scrollYProgress } = useScroll();
  const isLargeScreen = useIsLargeScreen();

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const mainY = useTransform(scrollYProgress, [0, 1.2], ["0%", "100%"]);
  const mainScale = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mockUpScale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.2, 0.25, 0.3],
    [1, 0.85, 1, 1, 1.2],
  );

  return (
    <FadeIn>
      <div>
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 z-[-1] max-h-[100vh] min-h-[600px] lg:min-h-[680px]"
        >
          <Image
            src={HomeHeroImage}
            alt="background image"
            className="min-h-[600px] rounded-[45px] object-cover"
          />
        </motion.div>
        <motion.div
          style={{ y: mainY, scale: mainScale }}
          className="mx-auto flex max-w-[400px] flex-col items-center pt-16 lg:max-w-[580px] lg:pt-20"
        >
          <h1 className="text-center text-[44px] font-medium leading-[1.2] text-white lg:text-[64px]">
            The future of Digital Receipts
          </h1>
          <p className="mt-5 text-center text-[16px] leading-[1.6] text-white lg:text-[18px]">
            Say goodbye to paper receipts and hello to real-time digital
            solutions that drive customer engagement and operational efficiency.
          </p>
          <div className="mt-5 flex justify-center gap-5 max-lg:flex-col max-lg:items-center">
            <Button to={"/"} variant="primary" className="w-[250px]">
              <Image
                src={AppleLogoWhite}
                alt="Apple logo"
                className="h-full max-h-[30px] w-full max-w-[30px] object-contain"
              />
              App Store
            </Button>
            <Button to={"/"} variant="primary" className="w-[250px]">
              <Image
                src={GooglePlayLogoWhite}
                alt="Google Play logo"
                className="h-full max-h-[30px] w-full max-w-[30px] object-contain"
              />
              Google Play
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="relative flex h-[400vh] w-full justify-center">
        <motion.div
          style={{
            top: isLargeScreen ? "20px" : "80px",
          }}
          className="sticky h-fit"
        >
          <motion.div
            style={{ scale: mockUpScale }}
            className="relative mx-auto h-[calc(100vh-110px)] max-h-[950px] w-full max-w-[300px] lg:max-w-[360px]"
          >
            <Image
              src={IphoneMockup}
              alt="background image"
              style={{ marginTop: isLargeScreen ? "80px" : "20px" }}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </FadeIn>
  );
};

export default HomeHero;
