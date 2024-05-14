"use client";
import React, { useEffect, useState } from "react";

const Blob = () => {
  const [blobPosition, setBlobPosition] = useState({ left: '50%', top: '50%' });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handlePointerMove = (event: any) => {
      const { clientX, clientY } = event;
      setBlobPosition({ left: clientX, top: clientY });
      setOpacity(1);
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      id="blob"
      style={{ position: "fixed", left: blobPosition.left, top: blobPosition.top, opacity: opacity, transition: "opacity 0.5s" }}
    />
  );
};

export default Blob;
