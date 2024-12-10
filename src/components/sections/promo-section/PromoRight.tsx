"use client";
import React, { FC } from "react";
import PromoImage1 from "../../../../public/assets/images/promo-image-1.png";
import PromoImage2 from "../../../../public/assets/images/promo-image-2.png";
import PromoImage3 from "../../../../public/assets/images/promo-image-3.png";
import PromoImage4 from "../../../../public/assets/images/promo-image-4.png";
import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";

interface PromoRightProps {
  scrollYProgress: MotionValue<number>;
}

const PromoRight: FC<PromoRightProps> = (props) => {
  const imageOneTop = useTransform(
    props.scrollYProgress,
    [0, 0.25],
    ["60%", "-60%"],
  );

  const imageTwoTop = useTransform(
    props.scrollYProgress,
    [0, 0.25, 0.5],
    ["60%", "60%", "-60%"],
  );

  const imageTreeTop = useTransform(
    props.scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    ["60%", "60%", "60%", "-60%"],
  );

  const imageFourTop = useTransform(
    props.scrollYProgress,
    [0, 0.75, 1],
    ["60%", "60%", "-60%"],
  );

  const imageOneOpacity = useTransform(
    props.scrollYProgress,
    [0, 0.05, 0.2, 0.25],
    [0, 1, 1, 0],
  );

  const imageTwoOpacity = useTransform(
    props.scrollYProgress,
    [0.25, 0.3, 0.45, 0.5],
    [0, 1, 1, 0],
  );

  const imageTreeOpacity = useTransform(
    props.scrollYProgress,
    [0.5, 0.55, 0.7, 0.75],
    [0, 1, 1, 0],
  );

  const imageFourOpacity = useTransform(
    props.scrollYProgress,
    [0.75, 0.8, 0.95, 1],
    [0, 1, 1, 0],
  );

  const imageOneRotate = useTransform(
    props.scrollYProgress,
    [0, 0.25],
    ["-15deg", "15deg"],
  );

  const imageTwoRotate = useTransform(
    props.scrollYProgress,
    [0.25, 0.5],
    ["-15deg", "15deg"],
  );

  const imageTreeRotate = useTransform(
    props.scrollYProgress,
    [0.5, 0.75],
    ["-15deg", "15deg"],
  );

  const imageFourRotate = useTransform(
    props.scrollYProgress,
    [0.75, 1],
    ["-15deg", "15deg"],
  );

  const imageOneScale = useTransform(
    props.scrollYProgress,
    [0, 0.125, 0.25],
    [0.9, 1, 0.9],
  );

  const imageTwoScale = useTransform(
    props.scrollYProgress,
    [0.25, 0.375, 0.5],
    [0.9, 1, 0.9],
  );

  const imageTreeScale = useTransform(
    props.scrollYProgress,
    [0.5, 0.625, 0.75],
    [0.9, 1, 0.9],
  );

  const imageFourScale = useTransform(
    props.scrollYProgress,
    [0.75, 0.875, 1],
    [0.9, 1, 0.9],
  );

  const images = [
    {
      image: PromoImage1,
      top: imageOneTop,
      opacity: imageOneOpacity,
      rotate: imageOneRotate,
      scale: imageOneScale,
    },
    {
      image: PromoImage2,
      top: imageTwoTop,
      opacity: imageTwoOpacity,
      rotate: imageTwoRotate,
      scale: imageTwoScale,
    },
    {
      image: PromoImage3,
      top: imageTreeTop,
      opacity: imageTreeOpacity,
      rotate: imageTreeRotate,
      scale: imageTreeScale,
    },
    {
      image: PromoImage4,
      top: imageFourTop,
      opacity: imageFourOpacity,
      rotate: imageFourRotate,
      scale: imageFourScale,
    },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center max-lg:mx-auto max-lg:max-w-[380px]">
      {images.map((config, index) => (
        <motion.div
          key={index}
          style={{
            top: config.top,
            opacity: config.opacity,
            rotate: config.rotate,
            scale: config.scale,
          }}
          className="absolute flex h-full w-full items-center"
        >
          <div>
            <Image
              src={config.image}
              alt={`Promo Image ${index + 1}`}
              className="relative h-full max-h-[520px] w-full max-w-[520px] rounded-[80px] object-contain"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PromoRight;
