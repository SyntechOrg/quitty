import React, { FC } from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";

const VideoSection = () => {
  return (
    <FadeIn className="mt-32 lg:mt-52">
      <iframe
        className="z-10 mx-auto aspect-video w-full rounded-[40px] lg:w-full"
        src="https://player.vimeo.com/video/1168835735?badge=0&autopause=0&player_id=0&app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="quitty draft 7(1)"
      ></iframe>
    </FadeIn>
  );
};

export default VideoSection;
