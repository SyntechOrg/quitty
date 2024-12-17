"use client";
import React, { useRef } from "react";
import Image from "next/image";
import HomeHeroImage from "../../../../public/assets/images/home-hero-image.png";
import { motion, useScroll, useTransform } from "framer-motion";
const HomeHeroBg = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
  });
  const imageScale = useTransform(scrollY, [50, 750], [1, 0.6]);

  return (
    <div>
      <motion.div
        ref={targetRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ scale: imageScale }}
        className="absolute inset-0 z-[-1] mx-auto max-h-[100vh] min-h-[600px] w-[95%] max-w-[1440px] lg:min-h-[680px]"
      >
        <Image
          src={HomeHeroImage}
          loading="eager"
          alt="background image"
          className="min-h-[600px] rounded-[45px] object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HomeHeroBg;
