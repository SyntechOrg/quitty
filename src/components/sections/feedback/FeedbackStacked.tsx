"use client";
import {
  ResponsiveContainer,
  StackedCarousel,
  StackedCarouselSlideProps,
} from "react-stacked-center-carousel";
import React from "react";
import "./FeedbackStacked.css";
import Image from "next/image";
import FeedbackBackground from "../../../../public/assets/images/feedback-background.png";
import { Icon, IconType } from "@/components/shared";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";

const COLORS = [
  { color: "#323CD2", text: "1111" },
  { color: "#00C9A5", text: "2222" },
  { color: "#3F7CF3", text: "3333" },
];

export const ResponsiveCarousel = () => {
  const ref = React.useRef<>();
  const isLargeScreen = useIsLargeScreen();

  const slideWidth = isLargeScreen ? 420 : 300;
  const slideFadeDistance = isLargeScreen ? 0.8 : 0.2;

  return (
    <div className="relative my-[80px] flex items-center justify-center py-[80px] lg:my-[150px] lg:py-[120px]">
      <div className="absolute z-[-1] mx-auto h-full w-screen max-w-[1660px] overflow-clip">
        <div className="h-full w-full bg-black/5 blur-sm">
          <Image
            src={FeedbackBackground}
            alt="background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="h-full w-full">
        <div className="mx-auto max-w-[650px]">
          <p className="text-center text-[18px] font-medium leading-[1.5] text-primary">
            Erfolgsgeschichten
          </p>
          <h6 className="leading:text-[48px] mt-5 text-center text-[32px] font-medium leading-[1.5] text-text">
            Sehen Sie, wie wir führenden Einzelhändlern zum Erfolg verholfen
            haben.
          </h6>
        </div>
        <div className="relative mx-auto mt-12 h-full w-full max-w-[800px]">
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Slide}
                  slideWidth={slideWidth}
                  carouselWidth={width}
                  data={COLORS}
                  disableSwipe
                  height={340}
                  maxVisibleSlide={3}
                  customScales={[1, 0.75, 0.25]}
                  fadeDistance={slideFadeDistance}
                  transitionTime={500}
                />
              );
            }}
          />
          <button
            className="absolute left-[-25px] top-1/2 z-[200] flex size-[40px] translate-y-[-50%] items-center justify-center rounded-full border
           border-[#7a8889] hover:opacity-70 active:opacity-100 lg:size-[50px]"
            onClick={() => ref.current?.goBack()}
          >
            <Icon
              icon={IconType.CAROUSEL_RIGHT}
              className="h-full w-full max-w-[11px] object-contain"
            />
          </button>
          <button
            className="absolute right-[-25px] top-1/2 z-[200] flex size-[40px] translate-y-[-50%] items-center justify-center rounded-full border
           border-[#7a8889] hover:opacity-70 active:opacity-100 lg:size-[50px]"
            onClick={() => ref.current?.goNext()}
          >
            <Icon
              icon={IconType.CAROUSEL_LEFT}
              className="h-full w-full max-w-[11px] object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Slide = React.memo(function (props: StackedCarouselSlideProps) {
  const { dataIndex, isCenterSlide, swipeTo, slideIndex } = props;
  const [loadDelay, setLoadDelay] = React.useState<any>();
  const [removeDelay, setRemoveDelay] = React.useState<any>();
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (isCenterSlide) {
      clearTimeout(removeDelay);
      setLoadDelay(setTimeout(() => setLoaded(true), 1));
    } else {
      clearTimeout(loadDelay);
      if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 1));
    }
  }, [isCenterSlide]);

  React.useEffect(() => () => {
    clearTimeout(removeDelay);
    clearTimeout(loadDelay);
  });

  const card = COLORS[dataIndex];

  return (
    <div
      className="twitch-card overflow-clip rounded-[52px]"
      draggable={false}
      style={{
        backgroundColor: card.color,
      }}
    >
      <div
        className={`cover h-full w-full ${isCenterSlide && loaded ? "off" : "on"}`}
      >
        <div
          className="card-overlay h-full w-full"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      {loaded && (
        <div className="h-full w-full">
          <p>test</p>
        </div>
      )}
    </div>
  );
});

export default ResponsiveCarousel;
