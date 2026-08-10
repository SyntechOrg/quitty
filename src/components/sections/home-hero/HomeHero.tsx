"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/shared";
import AppleLogoWhite from "../../../../public/assets/images/apple-logo-white.png";
import GooglePlayLogoWhite from "../../../../public/assets/images/google-play-logo-white.png";
import IphoneMockupEN from "../../../../public/assets/images/iPhoneMockup2.png";
import IphoneMockupDE from "../../../../public/assets/images/iPhoneMockup.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/fade-in/FadeIn";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";
import { useLocale, useTranslations } from "next-intl";

const HomeHero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
  });
  const isLargeScreen = useIsLargeScreen();

  const mainY = useTransform(scrollY, [0, 500], ["0%", "-20%"]);
  const mainScale = useTransform(scrollY, [0, 700], [1, 0.5]);
  const mainOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const mockUpScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [1, 0.85, 1, 1.15]
  );
  const mockUpTranslateY = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    ["0%", "0%", "-125%"]
  );

  const t = useTranslations("Home");
  const locale = useLocale() as "en" | "de";

  const images = {
    en: IphoneMockupEN,
    de: IphoneMockupDE,
  };

  const imageSrc = images[locale] || IphoneMockupEN;
  return (
    <div ref={targetRef}>
      <FadeIn>
        <div>
          <motion.div
            style={{ y: mainY, scale: mainScale, opacity: mainOpacity }}
            className="mx-auto flex max-w-[400px] flex-col items-center pt-16 lg:max-w-[640px] lg:pt-20"
          >
            <h1 className="text-center text-[44px] font-medium leading-[1.2] text-white lg:text-[60px]">
              {t("HeroSectionTitle")}
            </h1>
            <p className="mt-5 text-center text-[16px] leading-[1.6] text-white lg:text-[17px]">
              {t("HeroSectionUndertitle")}
            </p>
            <div className="mt-5 flex justify-center gap-5 max-lg:flex-col max-lg:items-center">
              <Button
                to={"https://apps.apple.com/us/app/quitty/id6740874619"}
                variant="primary"
                className="w-[250px]"
              >
                <Image
                  src={AppleLogoWhite}
                  alt="Apple logo"
                  className="h-full max-h-[30px] w-full max-w-[30px] object-contain"
                />
                App Store
              </Button>
              <Button
                to={
                  "https://play.google.com/store/apps/details?id=com.syntech.quitty"
                }
                variant="primary"
                className="w-[250px]"
              >
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
        <div className="relative flex h-[200vh] w-full justify-center">
          <motion.div
            style={{
              top: isLargeScreen ? "20px" : "80px",
            }}
            className="sticky h-fit"
          >
            <motion.div
              style={{ scale: mockUpScale, translateY: mockUpTranslateY }}
              className="relative mx-auto h-[calc(100vh-110px)] max-h-[700px] w-full max-w-[300px] lg:max-w-[360px]"
            >
              <Image
                src={imageSrc}
                alt="background image"
                style={{ marginTop: isLargeScreen ? "80px" : "20px" }}
                className="h-full w-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </FadeIn>
    </div>
  );
};

export default HomeHero;
