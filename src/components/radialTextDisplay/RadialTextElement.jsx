import React from "react";

export default function RadialTextElement({ index, text, cssClasses, xPosition, yPosition }) {
  return (
    <span
      //   key={index}
      className={`${cssClasses}`}
      style={{
        position: "absolute",
        left: `calc(50% + ${xPosition}px)`,
        top: `calc(50% - ${yPosition}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </span>
  );
}
