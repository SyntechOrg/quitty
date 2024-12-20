import React from "react";
import BGGradients from "../../../../public/assets/images/bg-gradients.png";
import Image from "next/image";
import styles from "./GradientBackground.module.css";
import { FadeIn } from "@/components/fade-in/FadeIn";

const GradientBackground = () => {
  return (
    <FadeIn className="fixed inset-0 z-[-1] overflow-hidden opacity-80">
      <Image
        src={BGGradients}
        loading="lazy"
        alt="ch-flag"
        className={`${styles.background} background h-full w-full rounded-md object-contain duration-500 ease-in-out`}
      />
    </FadeIn>
  );
};

export default GradientBackground;
