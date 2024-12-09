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
  slideClassName: "",
  containerClassName: "w-full overflow-x-hidden",
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
    <div className={classNames(containerClassName as never)}>
      <div className="w-full overflow-x-hidden" ref={emblaRef}>
        <div className="flex w-full touch-pan-y touch-pinch-zoom">
          {Children.map(children, (child, index) => (
            <div className={classNames(slideClassName as never)} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
