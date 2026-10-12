"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from "./AppJourney.module.css";

export type AppJourneyStep = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

type AppJourneyProps = {
  locale: "de" | "en";
  steps: readonly AppJourneyStep[];
};

const labels = {
  de: {
    eyebrow: "FUNKTIONEN IM ÜBERBLICK",
    title: "Quitty im Überblick",
    keyboardHint:
      "Fokussiere die Funktionsübersicht und nutze die Pfeiltasten links und rechts. Pos1 springt zum Anfang, Ende zur letzten Funktion.",
    carousel: "Karussell",
    previous: "Vorherige Funktion",
    next: "Nächste Funktion",
    visible: "Sichtbare Funktionen:",
  },
  en: {
    eyebrow: "FEATURE OVERVIEW",
    title: "Quitty at a glance",
    keyboardHint:
      "Focus the feature overview and use the left and right arrow keys. Home jumps to the start, End to the last feature.",
    carousel: "carousel",
    previous: "Previous feature",
    next: "Next feature",
    visible: "Visible features:",
  },
};

const AppJourney = ({ locale, steps }: AppJourneyProps) => {
  const t = labels[locale];
  const id = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    first: 1,
    last: 1,
    canPrevious: false,
    canNext: steps.length > 1,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const measure = () => {
      const start = track.scrollLeft;
      const end = start + track.clientWidth;
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>("[data-journey-step]"),
      );
      const visible = cards.flatMap((card, index) => {
        const overlap =
          Math.min(end, card.offsetLeft + card.offsetWidth) -
          Math.max(start, card.offsetLeft);
        return overlap >= card.offsetWidth / 2 ? [index + 1] : [];
      });
      const fallback = cards.reduce(
        (best, card, index) => {
          const overlap = Math.max(
            0,
            Math.min(end, card.offsetLeft + card.offsetWidth) -
              Math.max(start, card.offsetLeft),
          );
          return overlap > best.overlap ? { number: index + 1, overlap } : best;
        },
        { number: 1, overlap: 0 },
      );
      const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
      const next = {
        first: visible[0] ?? fallback.number,
        last: visible[visible.length - 1] ?? fallback.number,
        canPrevious: start > 2,
        canNext: start < maximum - 2,
      };

      setPosition((current) =>
        current.first === next.first &&
        current.last === next.last &&
        current.canPrevious === next.canPrevious &&
        current.canNext === next.canNext
          ? current
          : next,
      );
    };
    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    track.addEventListener("scroll", scheduleMeasure, { passive: true });
    const resizeObserver = new ResizeObserver(scheduleMeasure);
    resizeObserver.observe(track);
    if (track.firstElementChild) {
      resizeObserver.observe(track.firstElementChild);
    }

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", scheduleMeasure);
      resizeObserver.disconnect();
    };
  }, [steps.length]);

  const move = (direction: "previous" | "next" | "first" | "last") => {
    const track = trackRef.current;
    if (!track) return;

    const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
    const offsets = Array.from(
      track.querySelectorAll<HTMLElement>("[data-journey-step]"),
      (card) => card.offsetLeft,
    );
    let left = direction === "last" ? maximum : 0;

    if (direction === "next") {
      left = offsets.find((offset) => offset > track.scrollLeft + 2) ?? maximum;
    } else if (direction === "previous") {
      left =
        offsets.reverse().find((offset) => offset < track.scrollLeft - 2) ?? 0;
    }

    track.scrollTo({
      left: Math.min(maximum, Math.max(0, left)),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    const direction = {
      ArrowLeft: "previous",
      ArrowRight: "next",
      Home: "first",
      End: "last",
    }[event.key] as "previous" | "next" | "first" | "last" | undefined;

    if (direction) {
      event.preventDefault();
      move(direction);
    }
  };

  if (steps.length === 0) return null;

  const visibleTitles = steps
    .slice(position.first - 1, position.last)
    .map((feature) => feature.title)
    .join(", ");

  return (
    <section
      className={styles.journey}
      id="app-journey"
      aria-labelledby={id + "-title"}
    >
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 id={id + "-title"}>{t.title}</h2>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.navigation}>
          <button
            type="button"
            className={styles.arrow}
            aria-label={t.previous}
            aria-controls={id + "-track"}
            disabled={!position.canPrevious}
            onClick={() => move("previous")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M19 12H5m0 0 6-6m-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label={t.next}
            aria-controls={id + "-track"}
            disabled={!position.canNext}
            onClick={() => move("next")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M5 12h14m0 0-6-6m6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <p
        className={styles.visuallyHidden}
        aria-live="polite"
        aria-atomic="true"
      >
        {t.visible} {visibleTitles}
      </p>
      <p id={id + "-keys"} className={styles.visuallyHidden}>
        {t.keyboardHint}
      </p>
      <div
        id={id + "-track"}
        ref={trackRef}
        className={styles.track}
        role="region"
        aria-roledescription={t.carousel}
        aria-labelledby={id + "-title"}
        aria-describedby={id + "-keys"}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        data-lenis-prevent
      >
        <ul className={styles.cards} role="list">
          {steps.map((step) => (
            <li className={styles.card} key={step.title} data-journey-step>
              <div className={styles.copy}>
                <h3>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
              <div className={styles.screen}>
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 767px) 150px, 180px"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AppJourney;
