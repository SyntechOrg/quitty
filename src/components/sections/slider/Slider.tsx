"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import image1 from "public/assets/images/sliderPic1.png";
import image2 from "public/assets/images/slidePic2.png";
import image3 from "public/assets/images/slidePic3.png";

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const slides = slider.getElementsByClassName("slide-image");

        const totalWidth = Array.from(slides).reduce(
          (acc, slide) => acc + (slide as HTMLElement).offsetWidth,
          0
        );

        const totalGap = 40 * slides.length;

        slider.style.width = `${totalWidth + totalGap}px`;

        slider.style.animation = `scroll 5s linear infinite`;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-x-hidden w-full h-[300px] lg:h-[500px] lg:mt-[120px] mt-[90px] relative">
      <div ref={sliderRef} className="flex items-center gap-[40px]">
        <Image
          src={image1}
          alt="Slide 1"
          className="slide-image h-[300px] lg:h-[500px] w-[auto] rounded-2xl"
          quality={100}
        />
        <Image
          src={image2}
          alt="Slide 2"
          className="slide-image h-[300px] lg:h-[500px] w-[auto] rounded-2xl"
        />
        <Image
          src={image3}
          alt="Slide 3"
          className="slide-image h-[300px] lg:h-[500px] w-[auto] rounded-2xl"
        />
        <Image
          src={image1}
          alt="Slide 1"
          className="slide-image h-[300px] lg:h-[500px] w-[auto] rounded-2xl"
        />
        <Image
          src={image2}
          alt="Slide 2"
          className="slide-image h-[300px] lg:h-[500px] w-[auto] rounded-2xl"
        />
        <Image
          src={image3}
          alt="Slide 3"
          className="slide-image h-[300px] lg:h-[500px] w-[auto] rounded-2xl"
        />
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
