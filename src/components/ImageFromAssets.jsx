import React from "react";

export default function ImageFromAssets({ src, alt, height = "3rem", imgClasses = null }) {
  return (
    <img
      src={src ? `../../src/assets${src}` : ""}
      alt={alt ? `${alt}` : ""}
      className={imgClasses}
      style={{ height: height }}
    />
  );
}
