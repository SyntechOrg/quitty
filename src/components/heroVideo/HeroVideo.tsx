import React from "react";

const HeroVideo = () => {
  return (
    <video
      src="/videos/syntech-about-video.mp4"
      className="pointer-events-none max-h-[780px] w-full max-w-[1300px] pt-[90px] mix-blend-lighten lg:absolute lg:right-0 lg:top-0 lg:z-[-1] lg:w-[70%]"
      loop
      muted
      autoPlay
      disablePictureInPicture
      disableRemotePlayback
      controls={false}
      playsInline
      preload="auto"
      poster="../../../public/assets/images/video-background-poster-image.jpg"
    />
  );
};

export default HeroVideo;
