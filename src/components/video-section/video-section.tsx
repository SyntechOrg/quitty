import React, { FC } from "react";

interface VideoSectionProps {
  url: string;
}

const VideoSection: FC<VideoSectionProps> = (props) => {
  return (
    <div>
      <iframe
        className="z-10 mx-auto aspect-video w-full rounded-[40px] lg:w-10/12"
        src={props.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
