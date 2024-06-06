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
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      exit={{ scale: 0 }}
      transition={{ duration: 1.2 }}
      className={classNames(className)}
      id={id}
    >
      {children}
    </motion.div>
  );
};
