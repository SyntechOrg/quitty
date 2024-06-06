"use client";
import { ReactNode, useEffect, useRef, useState, type FC } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export const ScaleUp: FC<FadeInProps> = ({ children, className, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
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
  }, [hasAnimated]);

  return (
    <motion.div
      ref={ref}
      animate={{ scale: isVisible ? 1 : 0.25 }}
      transition={{ duration: 1 }}
      className={classNames(className)}
      id={id}
    >
      {children}
    </motion.div>
  );
};
