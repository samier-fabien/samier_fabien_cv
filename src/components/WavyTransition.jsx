import React from "react";
import "../css/wavyTransition.css";

export default function WavyTransition({ backgroundRGBA, topRGB, bottomRGB }) {
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
        height="120"
        viewBox="0 0 150 80"
        preserveAspectRatio="none"
        shapeRendering="auto"
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
