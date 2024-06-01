"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import InformativeCard from "@/components/cards/InformativeCard";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";

const cards = [
  {
    increment: "01",
    title: "About card-title-1",
    description:
    "About card-description-1",
  },
  {
    increment: "02",
    title: "About card-title-2",
    description:
    "About card-description-2",
  },
  {
    increment: "03",
    title: "About card-title-3",
    description:
    "About card-description-3",
  },
  {
    increment: "04",
    title: "About card-title-4",
    description:
    "About card-description-4",
  },
];

const WhatWeDoSection = () => {
  const t = useTranslations("About Us");
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-75%"]);

  return (
    <FadeIn>
      <section
        ref={targetRef}
        className="relative mx-auto flex h-[300vh] max-w-[1600px] flex-col lg:translate-x-[10%] lg:flex-row lg:gap-[5%]"
      >
        <div className="relative top-[12vh] flex  max-lg:mx-auto max-lg:text-center  lg:sticky lg:top-0 lg:h-screen lg:items-center lg:justify-end">
          <p className="w-[220px] text-[28px] leading-[1.5] tracking-[0.02em] lg:text-[38px]">
            {t("About second-title")}
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="sticky top-0 flex h-screen items-center overflow-hidden"
        >
          <motion.div style={{ x }} className="flex gap-7">
            {cards.map((card) => (
              <InformativeCard
                key={card.increment}
                increment={card.increment}
                title={t(card.title)}
                description={t(card.description)}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
};

export default WhatWeDoSection;
