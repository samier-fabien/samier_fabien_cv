import React from "react";

export default function ImageFromAssets({ src, alt, height = "3rem" }) {
  return (
    <img
      src={src ? `../../src/assets${src}` : ""}
      alt={alt ? `${alt}` : ""}
      style={{ height: height }}
    />
  );
}
