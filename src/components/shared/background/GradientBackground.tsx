import React from "react";
import BGGradients from "../../../../public/assets/images/bg-gradients.png";
import Image from "next/image";

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Image
        src={BGGradients}
        alt="ch-flag"
        className="h-full w-full rounded-md object-contain"
      />
    </div>
  );
};

export default GradientBackground;
