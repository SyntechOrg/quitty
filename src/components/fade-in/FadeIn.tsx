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
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 75 }}
      transition={{ duration: 1 }}
      className={classNames(className)}
      id={id}
    >
      {children}
    </motion.div>
  );
};
