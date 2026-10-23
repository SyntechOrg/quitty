"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent, ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import styles from "./AssistantSlider.module.css";

type AssistantSliderProps = {
  alt: string;
  locale: "de" | "en";
  children: ReactNode;
};

const labels = {
  de: {
    carousel: "Karussell",
    slide: "Folie",
    image: "Text und Bild anzeigen",
    video: "Motion-Video anzeigen",
    previous: "Vorherige Ansicht",
    next: "Nächste Ansicht",
    pause: "Automatischen Wechsel und Video pausieren",
    resume: "Automatischen Wechsel starten",
    playVideo: "Video abspielen",
    pauseVideo: "Video pausieren",
    videoLabel: "Quitty Motion-Video, 14 Sekunden, ohne Ton",
    videoLink: "Video öffnen",
  },
  en: {
    carousel: "carousel",
    slide: "slide",
    image: "Show text and image",
    video: "Show motion video",
    previous: "Previous view",
    next: "Next view",
    pause: "Pause automatic rotation and video",
    resume: "Start automatic rotation",
    playVideo: "Play video",
    pauseVideo: "Pause video",
    videoLabel: "Quitty motion video, 14 seconds, without sound",
    videoLink: "Open video",
  },
};

const alphaVideoSrc = "/assets/videos/quitty-motion-transparent-v2.webm";
const fallbackVideoSrc = "/assets/videos/quitty-motion-clean-4k-v2.mp4";
const videoPoster = "/assets/videos/quitty-motion-poster-v2.png";

const AssistantSlider = ({ alt, locale, children }: AssistantSliderProps) => {
  const t = labels[locale];
  const id = useId();
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previousActiveRef = useRef(0);
  const [active, setActive] = useState(0);
  const [selectionVersion, setSelectionVersion] = useState(0);
  const [running, setRunning] = useState(true);
  const [manualVideo, setManualVideo] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [inView, setInView] = useState(false);
  const [partlyVisible, setPartlyVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [useMp4, setUseMp4] = useState(false);
  const [alphaVerified, setAlphaVerified] = useState(false);
  const videoSrc = useMp4 ? fallbackVideoSrc : alphaVideoSrc;
  const rotating = running && !reducedMotion;
  const canRotate = rotating && inView && pageVisible;
  const playbackRequested = rotating || manualVideo;

  const handlePlaybackError = useCallback(
    (error: unknown, failedSource: string) => {
      if (error instanceof DOMException && error.name === "AbortError") return;
      if (
        failedSource === alphaVideoSrc &&
        !(error instanceof DOMException && error.name === "NotAllowedError")
      ) {
        // Preserve requested playback when a failed WebM hands over to MP4.
        setUseMp4(true);
        return;
      }
      setRunning(false);
      setManualVideo(false);
    },
    [],
  );

  const verifyAlpha = useCallback(
    (video: HTMLVideoElement) => {
      if (
        useMp4 ||
        alphaVerified ||
        video !== videoRef.current ||
        video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA
      )
        return;
      try {
        // Check decoded pixels, including media loaded before hydration.
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 1;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) {
          setUseMp4(true);
          return;
        }
        context.drawImage(video, 0, 0, 1, 1, 0, 0, 1, 1);
        if (context.getImageData(0, 0, 1, 1).data[3] === 0) {
          setAlphaVerified(true);
        } else {
          setUseMp4(true);
        }
      } catch {
        setUseMp4(true);
      }
    },
    [useMp4, alphaVerified],
  );

  useEffect(() => {
    if (
      !document.createElement("video").canPlayType('video/webm; codecs="vp9"')
    ) {
      setUseMp4(true);
    }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setReducedMotion(media.matches);
      if (media.matches) {
        setRunning(false);
        setManualVideo(false);
      }
    };
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPartlyVisible(entry.isIntersecting && entry.intersectionRatio > 0);
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { threshold: [0, 0.35] },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (active !== 0 || !canRotate) return;
    const timer = window.setTimeout(() => setActive(1), 8000);
    return () => window.clearTimeout(timer);
  }, [active, canRotate, selectionVersion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    verifyAlpha(video);
    const enteringVideo = active === 1 && previousActiveRef.current !== 1;
    previousActiveRef.current = active;
    if (enteringVideo) video.currentTime = 0;
    if (active !== 1 || !partlyVisible || !pageVisible) {
      video.pause();
      return;
    }
    if (canRotate && video.ended && !enteringVideo) {
      setActive(0);
      return;
    }
    if (canRotate || manualVideo) {
      video
        .play()
        .catch((error: unknown) => handlePlaybackError(error, videoSrc));
    } else {
      video.pause();
    }
  }, [
    active,
    partlyVisible,
    pageVisible,
    rotating,
    canRotate,
    manualVideo,
    videoSrc,
    handlePlaybackError,
    verifyAlpha,
  ]);

  const select = (next: number) => {
    setSelectionVersion((version) => version + 1);
    setManualVideo(false);
    if (next === 1 && videoRef.current) {
      videoRef.current.currentTime = 0;
      if (canRotate)
        videoRef.current
          .play()
          .catch((error: unknown) => handlePlaybackError(error, videoSrc));
    }
    setActive(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    // Leave slider button keyboard behaviour untouched.
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      select(1 - active);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      select(event.key === "Home" ? 0 : 1);
    }
  };

  const handlePointerEnter = (event: PointerEvent<HTMLElement>) => {
    if (
      event.pointerType === "mouse" &&
      active === 0 &&
      running &&
      !reducedMotion &&
      window.matchMedia("(any-hover: hover) and (any-pointer: fine)").matches
    ) {
      select(1);
      setManualVideo(true);
    }
  };

  return (
    <section
      ref={rootRef}
      id="app-assistant"
      className={styles.slider}
      role="region"
      aria-label={alt}
      aria-roledescription={t.carousel}
      tabIndex={0}
      data-assistant-slider
      data-active-slide={active}
      onKeyDown={handleKeyDown}
      onPointerEnter={handlePointerEnter}
    >
      <div
        id={`${id}-stage`}
        className={styles.stage}
        data-assistant-stage
        aria-live={rotating ? "off" : "polite"}
      >
        <div
          role="group"
          aria-roledescription={t.slide}
          aria-label={`1 / 2 — ${t.image}`}
          aria-hidden={active !== 0}
          className={styles.imagePanel}
          data-visible={active === 0}
        >
          {children}
        </div>
        <div
          role="group"
          aria-roledescription={t.slide}
          aria-label={`2 / 2 — ${t.video}`}
          aria-hidden={active !== 1}
          className={styles.videoPanel}
          data-visible={active === 1}
        >
          <video
            key={videoSrc}
            ref={videoRef}
            src={videoSrc}
            poster={videoPoster}
            width={1920}
            height={1080}
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            preload="metadata"
            aria-label={t.videoLabel}
            data-video-variant={useMp4 ? "mp4" : "alpha-webm"}
            data-alpha-verified={alphaVerified && !useMp4}
            onLoadedData={(event) => verifyAlpha(event.currentTarget)}
            onEnded={() => {
              setManualVideo(false);
              if (canRotate) setActive(0);
            }}
            onPlay={() => {
              if (!rotating) setManualVideo(true);
            }}
            onPause={(event) => {
              if (
                active !== 1 ||
                event.currentTarget !== videoRef.current ||
                event.currentTarget.error ||
                document.hidden
              )
                return;
              if (
                partlyVisible &&
                pageVisible &&
                !(rotating && !inView) &&
                !videoRef.current?.ended
              ) {
                setRunning(false);
                setManualVideo(false);
              }
            }}
            onError={() => {
              if (!useMp4) {
                setUseMp4(true);
                return;
              }
              setRunning(false);
              setManualVideo(false);
            }}
          >
            <a href={fallbackVideoSrc}>{t.videoLink}</a>
          </video>
        </div>
      </div>
      <div className={styles.controls} data-assistant-controls>
        <button
          type="button"
          aria-label={t.previous}
          aria-controls={`${id}-stage`}
          data-slide-previous
          onClick={() => select(1 - active)}
        >
          <ChevronLeft aria-hidden="true" size={20} />
        </button>
        <div className={styles.indicators}>
          {[t.image, t.video].map((label, index) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              aria-pressed={active === index}
              aria-controls={`${id}-stage`}
              data-slide-select={index}
              className={styles.indicator}
              onClick={() => select(index)}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label={t.next}
          aria-controls={`${id}-stage`}
          data-slide-next
          onClick={() => select(1 - active)}
        >
          <ChevronRight aria-hidden="true" size={20} />
        </button>
        <button
          type="button"
          aria-label={
            reducedMotion && active === 1
              ? manualVideo
                ? t.pauseVideo
                : t.playVideo
              : playbackRequested
                ? t.pause
                : t.resume
          }
          aria-pressed={playbackRequested}
          aria-controls={`${id}-stage`}
          data-rotation-toggle
          disabled={reducedMotion && active === 0}
          onClick={() => {
            const next = !playbackRequested;
            setManualVideo(next && active === 1);
            setRunning(!reducedMotion && next);
            if (next && reducedMotion && videoRef.current?.ended) {
              videoRef.current.currentTime = 0;
            }
            if (next && videoRef.current?.error) videoRef.current.load();
          }}
        >
          {playbackRequested ? (
            <Pause aria-hidden="true" size={17} />
          ) : (
            <Play aria-hidden="true" size={17} />
          )}
        </button>
      </div>
    </section>
  );
};

export default AssistantSlider;
