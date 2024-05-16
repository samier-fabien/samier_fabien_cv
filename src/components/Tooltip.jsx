import React, { useEffect, useRef, useState } from "react";
import "../css/tooltip.css";

export default function Tooltip({
  targetRef,
  textToDisplay = "",
  top = "0%",
  left = "0%",
  firstItemAngleInRadians = Math.PI,
  lastItemAngleInRadians = 2 * Math.PI,
  tooltipRadius = 40,
  tooltipClasses = "",
}) {
  const tooltipRef = useRef(null);
  const [curvedText, setCurvedText] = useState(null);

  useEffect(() => {
    const letters = textToDisplay.split("");
    const angle = (lastItemAngleInRadians - firstItemAngleInRadians) / (letters.length - 1);

    let nextCurvedText = [];
    textToDisplay.split("").forEach((letter, index) => {
      const spanAngle = firstItemAngleInRadians + angle * index;

      let x = tooltipRadius * Math.cos(spanAngle);
      let y = tooltipRadius * Math.sin(spanAngle);

      nextCurvedText.push({
        elementContent: letter,
        elementStyle: {
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          transform: `rotate(${spanAngle + Math.PI / 2}rad)`,
        },
      });
    });

    console.log(nextCurvedText);
    setCurvedText(nextCurvedText);

    tooltipRef.current.style.top = top;
    tooltipRef.current.style.left = left;

    targetRef.current.addEventListener("mouseover", () => {
      tooltipRef.current.classList.remove("tooltip-hidden");
      tooltipRef.current.classList.add("tooltip-visible");
    });
    targetRef.current.addEventListener("mouseout", () => {
      tooltipRef.current.classList.remove("tooltip-visible");
      tooltipRef.current.classList.add("tooltip-hidden");
    });
  }, []);

  return (
    <span ref={tooltipRef} className={`tooltip-text ${tooltipClasses}`}>
      {curvedText
        ? curvedText.map((listElement, index) => (
            <span key={index} style={listElement.elementStyle}>
              {listElement.elementContent}
            </span>
          ))
        : ""}
    </span>
  );
}
