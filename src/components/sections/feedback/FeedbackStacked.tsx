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
import AvatarPlaceholder from "../../../../public/assets/images/avatar-placeholder.png";
import { useTranslations } from "next-intl";

const CONTENT = [
  {
    bgColor: "#323CD2",
    avatar: AvatarPlaceholder,
    name: "Maximilian L.",
    city: "FeedbackCardCountry1",
    stars: 5,
    review: "FeedbackCardContent1",
    date: "2025",
  },
  {
    bgColor: "#00C9A5",
    avatar: AvatarPlaceholder,
    name: "Sophie M.",
    city: "FeedbackCardCountry2",
    stars: 5,
    review: "FeedbackCardContent2",
    date: "2025",
  },
  {
    bgColor: "#3F7CF3",
    avatar: AvatarPlaceholder,
    name: "Daniel K.",
    city: "FeedbackCardCountry3",
    stars: 5,
    review: "FeedbackCardContent3",
    date: "2025",
  },
];

export const FeedbackStacked = () => {
  const ref = React.useRef<any>();
  const isLargeScreen = useIsLargeScreen();

  const slideWidth = isLargeScreen ? 420 : 295;
  const slideFadeDistance = isLargeScreen ? 0.85 : 0.55;

  const t = useTranslations("Home");
  return (
    <div className="relative my-[80px] flex items-center justify-center py-[80px] lg:my-[150px] lg:py-[120px]">
      <div className="absolute z-[-1] mx-auto h-full w-screen overflow-clip">
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
            {t("FeedbackUndertitle")}
          </p>
          <h6 className="leading:text-[48px] mt-5 text-center text-[32px] font-medium leading-[1.5] text-text">
            {t("FeedbackTitle")}
          </h6>
        </div>
        <div className="relative mx-auto mt-12 h-full min-h-[300px] w-full max-w-[800px] select-none">
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Slide}
                  slideWidth={slideWidth}
                  carouselWidth={width}
                  data={CONTENT}
                  height={440}
                  maxVisibleSlide={5}
                  customScales={[1, 0.95, 0.85, 0]}
                  fadeDistance={slideFadeDistance}
                  transitionTime={350}
                  disableSwipe
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

// eslint-disable-next-line react/display-name
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

  const card = CONTENT[dataIndex];

  const t = useTranslations("Home");

  return (
    <div
      className="twitch-card overflow-clip rounded-[52px] !h-[fit-content]"
      draggable={false}
      style={{
        backgroundColor: card.bgColor,
      }}
    >
      <div
        className={`cover h-full w-full ${isCenterSlide && loaded ? "off" : "on"}`}
      >
        <div
          className="card-overlay h-full w-full"
          onClick={() => {
            if (!isCenterSlide) {
              if (slideIndex < 0) swipeTo(-1);
              else swipeTo(1);
            }
          }}
        />
      </div>
      {/*{loaded && (*/}
      <div className="h-full w-full p-6 lg:p-7">
        <div className="flex items-center gap-4">
          <div className="h-full max-h-[55px] w-full max-w-[55px]">
            <Image
              src={card.avatar}
              alt="avatar image"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-[20px] font-medium leading-[1.3] text-white lg:text-[24px]">
              {card.name}
            </p>
            <p className="text-[15px] font-medium leading-[1.4] text-white lg:text-[16px]">
              {t(card.city)}
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-2 lg:mt-5">
          {Array.from({ length: card.stars }).map((_, index) => (
            <Icon
              key={index}
              icon={IconType.STAR}
              className="h-full w-full max-w-[24px] object-contain lg:max-w-[32px]"
            />
          ))}
          {Array.from({ length: 5 - card.stars }).map((_, index) => (
            <Icon
              key={index}
              icon={IconType.STAR}
              className="h-full w-full max-w-[24px] object-contain opacity-50 lg:max-w-[32px]"
            />
          ))}
        </div>
        <div className="mt-4 lg:mt-5">
          <p className="text-[16px] font-medium leading-[1.4] text-white">
            {t(card.review)}
          </p>
          <p className="mt-2 text-[15px] font-medium leading-[1.4] text-white lg:mt-3 lg:text-[16px]">
            {card.date}
          </p>
        </div>
      </div>
      {/*)}*/}
    </div>
  );
});

export default FeedbackStacked;
