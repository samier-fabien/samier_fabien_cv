import React, { useEffect, useRef, useState } from "react";
import "../css/tooltip.css";
/**
 * Displays radial tooltip. Each letter is arranged in a radius around a central element.
 * @param {useRef} targetRef - React `useRef` to the element to which the tooltip is attached.
 * @param {string} textToDisplay - Text to display as a tooltip.
 * @param {string} top - Position of the tooltip compared to the top.
 * @param {string} left - Position of the tooltip compared to the left.
 * @param {number} firstItemAngleInRadians - Starting angle in radians.
 * @param {number} lastItemAngleInRadians - Ending angle in radians.
 * @param {number} tooltipRadius - Radius between element to which the tooltip is attached and the tooltip letters.
 * @param {string} tooltipClasses - CSS classes added to the tooltip.
 */
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

  /**
   * Manages if the letters are shown or not and to calculates each letter's position.
   */
  useEffect(() => {
    const letters = textToDisplay.split("");
    const angle = (lastItemAngleInRadians - firstItemAngleInRadians) / (letters.length - 1);
    const fontSize = pixelsToNumber(window.getComputedStyle(tooltipRef.current).fontSize);

    let nextCurvedText = [];
    textToDisplay.split("").forEach((letter, index) => {
      const spanAngle = firstItemAngleInRadians + angle * index;

      let x = (tooltipRadius + fontSize) * Math.cos(spanAngle);
      let y = (tooltipRadius + fontSize) * Math.sin(spanAngle);

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

  /**
   * Converts a css unit of measurement into a number.
   * @param {string} pixels - CSS  without the unit of measurement.
   * @return {number} The number without the unit of measurement.
   */
  function pixelsToNumber(pixels) {
    const regex = /(\d+)\D*/gm;
    const subst = `$1`;
    const result = pixels.replace(regex, subst);

    return Number(result);
  }

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
