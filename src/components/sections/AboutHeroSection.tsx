import React from "react";

const AboutHeroSection = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1920px]">
      <video
        src="/videos/syntech-about-video.mp4"
        className="max-h-[780px] w-full max-w-[1300px] mix-blend-lighten lg:absolute lg:right-0 lg:top-0 lg:z-[-1] lg:mt-[-114px] lg:w-[70%]"
        loop
        muted
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
        controls={false}

      />
      <div
        data-aos="fade-up"
        className="container relative flex max-h-[850px] items-center max-lg:my-32 lg:h-[calc(100vh-114px)]"
      >
        <div className="w-full max-w-[520px] max-lg:mx-auto max-lg:text-center lg:w-1/2">
          <p className="category-text max-sm:text-[12px]">
            WHERE INNOVATION MEETS CREATIVITY
          </p>
          <h1 className="mt-3 w-10/12 max-w-[500px] text-[30px] leading-[1.666] text-white max-lg:mx-auto lg:mt-4 lg:text-[52px] lg:leading-[1.16]">
            We are more than just a team
          </h1>
          <p className="mt-6 leading-[1.666] tracking-[0.02em] max-sm:text-[15px] lg:mt-8 lg:text-[18px]">
            We are visionaries, strategists, and digital artisans. At Syntech,
            we believe in building lasting partnerships as innovative as the
            solutions we create. Our team thrives on the synergy of
            collaboration, pushing boundaries to deliver impactful digital
            experiences. We are not just a team but your trusted allies in the
            digital realm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
