"use client";
import React, { useRef } from "react";

import Image from "next/image";
import image1 from "public/assets/images/sliderPic1.png";
import image2 from "public/assets/images/sliderPic2.png";
import image3 from "public/assets/images/sliderPic3.png";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";

const images = [image1, image2, image3, image1];

const Slider = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const isLargeScreen = useIsLargeScreen();

  const totalWidth = isLargeScreen ? (645 * 3) : (250 * 4) + (28 * 5.5);
  const x = useTransform(scrollYProgress, [0, 1], ["10%", `-${totalWidth}px`]);

  return (
    <FadeIn>
      <section
        ref={targetRef}
        className="relative left-[50%] mx-auto flex h-[250vh] w-screen max-w-[3200px] translate-x-[-50%] flex-col"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ translateX: x }} className="flex gap-7">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="image"
                className="mx-auto h-full max-h-[250px] w-auto rounded-[80px] object-contain lg:max-h-[500px]"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Slider;
