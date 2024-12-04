"use client";
import { ReactNode, useEffect, useRef, useState, type FC } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export const FadeIn: FC<FadeInProps> = ({ children, className, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(className)}
      id={id}
    >
      {children}
    </motion.div>
  );
};
