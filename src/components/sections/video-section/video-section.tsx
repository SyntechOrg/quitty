import React, { FC } from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";

const VideoSection = () => {
  return (
    <FadeIn className="mt-32 lg:mt-52">
      <iframe
        className="z-10 mx-auto aspect-video w-full rounded-[40px] lg:w-10/12"
        src="https://www.youtube.com/embed/7s8O3zC3clo?si=T3-fHd7lSktjBBYV"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </FadeIn>
  );
};

export default VideoSection;
