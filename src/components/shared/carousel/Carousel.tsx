"use client";
import React, { Children, ReactNode, type FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import classNames from "classnames";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";

export type CarouselOptions = {
  containerClassName?: string;
  slideClassName?: string;
  autoplayOptions?: Partial<AutoplayOptionsType>;
} & Partial<EmblaOptionsType>;

const defaultOptions: CarouselOptions = {
  loop: true,
  slideClassName:
    "flex-0 flex-shrink-0 flex-grow-0 min-w-0 w-1/2 md:w-1/4 lg:w-1/5",
  containerClassName: "w-full overflow-hidden",
};

type CarouselProps = {
  children: ReactNode;
  options?: CarouselOptions;
};

export const Carousel: FC<CarouselProps> = ({ children, options }) => {
  const carouselOptions = {
    ...defaultOptions,
    ...options,
  };

  const {
    containerClassName,
    slideClassName,
    autoplayOptions,
    ...otherOptions
  } = carouselOptions;

  const [emblaRef] = useEmblaCarousel({ ...otherOptions }, [
    Autoplay({ playOnInit: true, delay: 3000, ...autoplayOptions }),
  ]);

  return (
    <div className={classNames(containerClassName)}>
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom w-full">
          {Children.map(children, (child, index) => (
            <div className={classNames(slideClassName)} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
