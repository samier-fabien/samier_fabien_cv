import React, { useEffect, useState, useRef } from "react";
import RadialTextElement from "../radialTextDisplay/RadialTextElement";
import "../../css/radialTextDisplay.css";

export default function RadialTextDisplay({
  textElements = [],
  firstTextAngleInRadians = Math.PI / 2,
  menuRadius = 200,
  menuRadiusVariation = 0,
  elementClasses = "",
  containerClasses = "",
  parentRef,
}) {
  const [elements, setElements] = useState(null);
  const [radius, setRadius] = useState(menuRadius);
  const containerRef = useRef(null);

  useEffect(() => {
    if (parentRef && parentRef.current) {
      handleResize();
    } else {
      createElements(menuRadius);
    }
  }, [textElements]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 1) {
            displayElements();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [parentRef]);

  function handleResize() {
    console.log("reized");
    if (parentRef && parentRef.current) {
      const remValue = convertRemToPx(9);
      const width = remValue + radius * 2;
      console.log(width);
      if (width > parentRef.current.offsetWidth) {
        console.log("plus grand");
        createElements((parentRef.current.offsetWidth - remValue) / 2);
      } else {
        createElements(menuRadius);
      }
    }
  }

  function createElements(newRadius) {
    const elementsNumber = textElements.length;
    if (elementsNumber > 0) {
      const angleBetweenTextElements = (2 * Math.PI) / elementsNumber;

      const newElements = textElements.map((element, index) => {
        let elementAngle = firstTextAngleInRadians - index * angleBetweenTextElements;
        let elementRadius = newRadius + Math.random() * menuRadiusVariation;
        let x = elementRadius * Math.cos(elementAngle);
        let y = elementRadius * Math.sin(elementAngle);
        let cssClasses = `${elementClasses} radial-text-hidden`;

        return { element, x, y, cssClasses };
      });

      setElements(newElements);
    }
  }

  function displayElements() {
    const biloute = containerRef.current.querySelectorAll("span");

    biloute.forEach((element, index) => {
      setTimeout(() => {
        if (element.classList.contains("radial-text-hidden")) {
          element.classList.remove("radial-text-hidden");
          element.classList.add("radial-text-visible");
        }
      }, 200 * index);
    });
  }

  function convertRemToPx(remNumber) {
    return parseFloat(getComputedStyle(document.documentElement).fontSize) * remNumber;
  }

  return (
    <div ref={containerRef} className="radial-text-first-container">
      <div className={`radial-text-true-container ${containerClasses}`}>
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
    </div>
  );
}
