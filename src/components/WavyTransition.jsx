import React, { useEffect, useState } from "react";
import "../css/wavyTransition.css";

export default function WavyTransition({
  transitionHeight = 100,
  backgroundRGBA,
  topRGB,
  bottomRGB,
}) {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    if (window.innerWidth >= 992) {
      setHeight(transitionHeight);
    } else if (window.innerWidth >= 768) {
      setHeight(transitionHeight * 0.8);
    } else if (window.innerWidth >= 576) {
      setHeight(transitionHeight * 0.6);
    } else {
      setHeight(transitionHeight * 0.4);
    }
  }

  return (
    <div
      className="p-0 mb-0"
      style={{
        backgroundColor: backgroundRGBA,
      }}
    >
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : transitionHeight}
        viewBox="0 0 150 80"
        preserveAspectRatio="none"
        shapeRendering="auto"
        style={{
          marginBottom: "-1px", // marginBottom fix artifact on mobile
        }}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 50c30 0 60-54 88-54s58 54 88 54 58-54 88-54 58 54 88 54 v24h-352z"
          />
          <linearGradient id="gradient-one" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor={topRGB} stopOpacity={0.6} />
            <stop offset="100%" stopColor={bottomRGB} stopOpacity={1} />
          </linearGradient>
          <linearGradient id="gradient-two" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor={topRGB} stopOpacity={0.4} />
            <stop offset="100%" stopColor={bottomRGB} stopOpacity={1} />
          </linearGradient>
          <linearGradient id="gradient-three" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor={topRGB} stopOpacity={0.3} />
            <stop offset="100%" stopColor={bottomRGB} stopOpacity={1} />
          </linearGradient>
          <linearGradient id="gradient-four" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor={topRGB} stopOpacity={0.1} />
            <stop offset="100%" stopColor={bottomRGB} stopOpacity={1} />
          </linearGradient>
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="6" fill="url(#gradient-one)" />
          <use href="#gentle-wave" x="48" y="6" fill="url(#gradient-two)" />
          <use href="#gentle-wave" x="48" y="6" fill="url(#gradient-three)" />
          <use href="#gentle-wave" x="48" y="6" fill="url(#gradient-four)" />
        </g>
      </svg>
    </div>
  );
}
