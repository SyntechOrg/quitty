"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FadeIn } from "../fade-in/FadeIn";
import StepCard from "@/components/cards/StepCard";
import { useTranslations } from "next-intl";

const cards = [
  {
    title: "Card1.Title",
    description: "Card1.Description",
  },
  {
    title: "Card2.Title",
    description: "Card2.Description",
  },
  {
    title: "Card3.Title",
    description: "Card3.Description",
  },
  {
    title: "Card4.Title",
    description: "Card4.Description",
  },
];

const ProcessSection = () => {
  const t = useTranslations("StepCards.ProcessHeader");
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);

  return (
    <FadeIn>
      <section
        ref={targetRef}
        className="relative mx-auto flex h-[250vh] max-w-[2100px] flex-col"
      >
        <div data-aos="fade-up" className="container mb-[-20vh] w-fit">
          <h5 className="w-fit text-center text-[20px] leading-[1.25] tracking-[0.02em] sm:text-[32px] lg:text-[40px]">
            {t("Title")}
          </h5>
        </div>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-7">
            {cards.map((card) => (
              <StepCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
};

export default ProcessSection;
