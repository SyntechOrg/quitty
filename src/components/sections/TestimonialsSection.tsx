"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import TestimonialCard from "@/components/cards/TestimonialCard";

const cards = [
  {
    quote:
      "“Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, values, " +
      "and visual elements, such as logos and color schemes, to leave a lasting impression on the audience”.",
    author: "Jan Muster1",
    authorPosition: "Custom Production",
  },
  {
    quote:
      "“Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, values, " +
      "and visual elements, such as logos and color schemes, to leave a lasting impression on the audience”;",
    author: "Jan Muster2",
    authorPosition: "Custom Production",
  },
  {
    quote:
      "“Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, values, " +
      "and visual elements, such as logos and color schemes, to leave a lasting impression on the audience”",
    author: "Jan Muster3",
    authorPosition: "Custom Production",
  },
  {
    quote:
      "“Strategic process of creating a unique identity for businesses. It involves defining a brand's personality, values, " +
      "and visual elements, such as logos and color schemes, to leave a lasting impression on the audience”...",
    author: "Jan Muster4",
    authorPosition: "Custom Production",
  },
];

const TestimonialsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);

  return (
    <section
      ref={targetRef}
      className="relative mx-auto flex h-[250vh] max-w-[2100px] flex-col"
    >
      <div data-aos="fade-up" className="container mb-[-20vh] w-fit">
        <h5 className="w-fit text-center text-[20px] leading-[1.25] tracking-[0.02em] sm:text-[32px] lg:text-[40px]">
          What clients says about us
        </h5>
      </div>
      <div
        className="sticky top-0 flex h-screen items-center overflow-hidden"
      >
        <motion.div style={{ x }} className="flex gap-7">
          {cards.map((card) => (
            <TestimonialCard
              key={card.quote}
              quote={card.quote}
              author={card.author}
              authorPosition={card.authorPosition}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
