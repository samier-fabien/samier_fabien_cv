import React, { useEffect, useState, useRef } from "react";
import RadialTextElement from "../radialTextDisplay/RadialTextElement";
import "../../css/radialTextDisplay.css";

export default function RadialTextDisplay({
  textElements = [],
  firstTextAngleInRadians = Math.PI / 2,
  menuRadius = 200,
  menuRadiusVariation = 0,
  elementClasses = "",
}) {
  const [elements, setElements] = useState(null);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    createElements();
    // displayElements();
  }, [textElements]);

  useEffect(() => {
    displayElements();
  }, [elements]);

  function createElements() {
    const elementsNumber = textElements.length;
    if (elementsNumber > 0) {
      const angleBetweenTextElements = (2 * Math.PI) / elementsNumber;
      console.log(`angleBetweenTextElements: ${angleBetweenTextElements}`);

      const newElements = textElements.map((element, index) => {
        let elementAngle = firstTextAngleInRadians + index * angleBetweenTextElements;
        let elementRadius = menuRadius + Math.random() * menuRadiusVariation;
        let x = elementRadius * Math.cos(elementAngle);
        let y = elementRadius * Math.sin(elementAngle);
        let cssClasses = `${elementClasses} radial-text-hidden`;
        console.log(`${element} elementAngle: ${elementAngle} [x: ${x} | y: ${y}]`);

        return { element, x, y, cssClasses };
      });

      setElements(newElements);
    }
    console.log(elements);
  }

  function displayElements() {
    const biloute = containerRef.current.querySelectorAll("span");
    console.log(containerRef.current.querySelectorAll("span"));

    biloute.forEach((element, index) => {
      setTimeout(() => {
        console.log("un element" + index);
        if (element.classList.contains("radial-text-hidden")) {
          console.log("Contient radial-text-hidden");
          element.classList.remove("radial-text-hidden");
          element.classList.add("radial-text-visible");
        } else {
          console.log("Ne contient pas radial-text-hidden");
        }
      }, 200 * index);
    });
  }

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: `${menuRadius * 2}px`, height: `${menuRadius * 2}px` }}
    >
      {elements
        ? elements.map((element, index) => (
            <RadialTextElement
              key={index}
              text={element.element}
              cssClasses={element.cssClasses}
              xPosition={element.x}
              yPosition={element.y}
            />
          ))
        : ""}
    </div>
  );
}
