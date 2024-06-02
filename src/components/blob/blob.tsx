"use client";
import React, {useEffect, useRef, useState} from "react";

const Blob = () => {
  const [blobPosition, setBlobPosition] = useState({ left: 0, top: 0 });
  const [opacity, setOpacity] = useState(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent | TouchEvent) => {
      let clientX: number;
      let clientY: number;

      if ("touches" in event) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }

      setBlobPosition({ left: clientX, top: clientY });
      setOpacity(1);

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      // Set a timeout to reset opacity
      timeoutId.current = setTimeout(() => {
        setOpacity(0);
      }, 5000);
    };

    document.body.addEventListener("pointermove", handlePointerMove);
    document.body.addEventListener("touchmove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
      document.body.addEventListener("touchmove", handlePointerMove);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <div
      id="blob"
      style={{
        position: "fixed",
        left: blobPosition.left,
        top: blobPosition.top,
        opacity: opacity,
        transition: "opacity 2s",
      }}
    />
  );
};

export default Blob;
