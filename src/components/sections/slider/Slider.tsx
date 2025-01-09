"use client";
import React from "react";
import Image from "next/image";
import image1 from "public/assets/images/sliderPic1.png";
import image2 from "public/assets/images/sliderPic2.png";
import image3 from "public/assets/images/sliderPic3.png";
import { FadeIn } from "@/components/fade-in/FadeIn";
import "./Slider.css";

const images = [image1, image2, image3, image1];

const duplicatedImages = [...images, ...images];

const Slider = () => {
  return (
    <div className="mx-auto my-32 ml-[calc(-50vw+50%)] w-screen overflow-hidden lg:my-52">
      <div className="mx-auto max-w-[2200px] overflow-hidden">
        <FadeIn className="animate-slide">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-[60px] pr-4"
            >
              <Image
                key={index}
                src={image}
                alt="image"
                loading="eager"
                className="mx-auto h-full max-h-[250px] w-full rounded-[60px] object-contain lg:max-h-[500px] lg:rounded-[80px]"
              />
            </div>
          ))}
        </FadeIn>
      </div>
    </div>
  );
};

export default Slider;
