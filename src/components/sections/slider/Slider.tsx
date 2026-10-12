"use client";
import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import image1 from "public/assets/images/product-carousel-current/slide-1.png";
import image2 from "public/assets/images/product-carousel-current/slide-2.png";
import image3 from "public/assets/images/product-carousel-current/slide-3.png";
import image4 from "public/assets/images/sliderPic4.png";
import image5 from "public/assets/images/product-carousel-current/slide-5.png";
import { FadeIn } from "@/components/fade-in/FadeIn";
import "./Slider.css";

const images = [image1, image4, image3, image2, image5];

const duplicatedImages = [...images, ...images];

const Slider = () => {
  const locale = useLocale();
  const descriptions = locale === "de"
    ? ["Aktuelle Quitty-Belegübersicht", "Zwei Personen mit Smartphones und QR-Code", "Garantie in Quitty hinzufügen", "Originale Quitty-Spesenansicht", "Originaler Quitty-QR-Scanner"]
    : ["Current Quitty receipt overview", "Two people with smartphones and a QR code", "Add a warranty in Quitty", "Original Quitty expenses screen", "Original Quitty QR scanner"];
  return (
    <div id="product-photo-carousel" className="mx-auto my-12 ml-[calc(-50vw+50%)] w-screen overflow-hidden lg:my-24">
      <FadeIn className="mx-auto max-w-[2200px] overflow-hidden">
        <div className="animate-slide">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-[60px] pr-4"
            >
              <Image
                key={index}
                src={image}
                alt={descriptions[index % descriptions.length]}
                loading="eager"
                unoptimized={index % images.length !== 1}
                className={index % images.length === 1
                  ? "mx-auto h-full max-h-[261px] w-full rounded-[60px] object-contain lg:max-h-[500px] lg:rounded-[80px]"
                  : "mx-auto h-full max-h-[420px] w-full object-contain lg:max-h-[500px]"}
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default Slider;
