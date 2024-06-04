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
    description: "About card-description-1",
  },
  {
    increment: "02",
    title: "About card-title-2",
    description: "About card-description-2",
  },
  {
    increment: "03",
    title: "About card-title-3",
    description: "About card-description-3",
  },
  {
    increment: "04",
    title: "About card-title-4",
    description: "About card-description-4",
  },
];

const WhatWeDoSection = () => {
  const t = useTranslations("About Us");
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-76%"]);

  return (
    <FadeIn>
      <section
        ref={targetRef}
        className="relative mx-auto flex h-[300vh] max-w-[1600px] flex-col"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-7">
            <div className="relative self-center">
              <p className="w-[150px] text-[28px] leading-[1.5] tracking-[0.02em] md:w-[220px] lg:text-[38px]">
                {t("About second-title")}
              </p>
            </div>
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
