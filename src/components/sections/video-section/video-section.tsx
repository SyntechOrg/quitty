import React, { FC } from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";

const VideoSection = () => {
  return (
    <FadeIn className="mt-32 lg:mt-52">
      <div style={{ padding: "55.6% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/1168773089?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          className="rounded-[40px]"
          title="quitty draft 3(1)"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </FadeIn>
  );
};

export default VideoSection;
