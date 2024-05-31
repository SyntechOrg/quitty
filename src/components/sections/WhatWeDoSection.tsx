"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import InformativeCard from "@/components/cards/InformativeCard";
import { FadeIn } from "../fade-in/FadeIn";

const cards = [
  {
    increment: "01",
    title: "Innovative Solutions",
    description:
      "As visionaries and digital artisans, we specialize in crafting innovative solutions tailored to your unique " +
      "needs and goals. Leveraging cutting-edge technologies and creative thinking, we develop bespoke strategies and digital " +
      "products that set you apart from the competition and drive tangible results.",
  },
  {
    increment: "02",
    title: "Strategic Partnerships",
    description:
      "We believe in building lasting partnerships based on trust and collaboration, working hand in hand to achieve success " +
      "together. By deeply understanding your business objectives and challenges, we align our strategies and efforts with " +
      "your long-term goals, ensuring mutual growth and prosperity.",
  },
  {
    increment: "03",
    title: "Boundary-Pushing Collaboration",
    description:
      "Our team thrives on collaboration, pushing boundaries to deliver impactful digital experiences that exceed expectations. " +
      "Through seamless communication and synergy, we harness the collective expertise of our team to tackle complex challenges " +
      "and innovate at every turn, delivering solutions that make a meaningful difference.",
  },
  {
    increment: "04",
    title: "Trusted Allies",
    description:
      "We're more than just a team – we're your trusted allies in the digital realm, dedicated to your success every step of " +
      "the way. With a commitment to transparency, reliability, and excellence, we strive to be your go-to partner for all your digital needs, " +
      "providing unwavering support and guidance to help you navigate the ever-evolving digital landscape.",
  },
];

const WhatWeDoSection = () => {
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
            What we can do
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

export default WhatWeDoSection;
