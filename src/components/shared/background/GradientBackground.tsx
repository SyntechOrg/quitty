import React from "react";
import BGGradients from "../../../../public/assets/images/bg-gradients.png";
import Image from "next/image";
import styles from "./GradientBackground.module.css";

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Image
        src={BGGradients}
        alt="ch-flag"
        className={`${styles.background} background h-full w-full rounded-md object-contain duration-500 ease-in-out`}
      />
    </div>
  );
};

export default GradientBackground;
