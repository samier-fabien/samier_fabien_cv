import React, { useEffect, useState, useRef } from "react";
import RadialTextElement from "../radialTextDisplay/RadialTextElement";
import "../../css/radialTextDisplay.css";
/**
 * Displays a container in wich are placed textElements on the perimeter of a circle (whose center is the container center). The elements are arranged at regular angles according to their number. First angle can be changed. A radius variation can be applied.
 * @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
 * @param {array[string...]} textElements -
 * @param {Number} firstTextAngleInRadians - First angle in radian where the first textElement is going to be shown. Default Math.PI / 2,
 * @param {Number} menuRadius - Radius of the perimeter on which the elements are arranged. Default 200
 * @param {Number, array[Number, Number, Number, Number]} menuRadiusVariation - Random variation of the radius for each element. If number, constant variation. If an array of four integers [minWidth, maxWidth, minVariation, maxVariation], then the variation will be equal to miniVariation below miniWidth, equal to maxVariation above maxWidth, or a variation between mini and maxi proportional to the parentRef.current.offsetWidth.
 * @param {string} elementClasses - CSS classes added to each textElement
 * @param {string} containerClasses - CSS classes added to container
 * @param {useRef} parentRef
 */
export default function RadialTextDisplay({
  textElements = [],
  firstTextAngleInRadians = Math.PI / 2,
  menuRadius = 200,
  menuRadiusVariation = 0, // [largeurMini, largeurMaxi, variationMini, variationMaxi]
  elementClasses = "",
  containerClasses = "",
  parentRef,
}) {
  const [elements, setElements] = useState(null);
  const containerRef = useRef(null);
  const [minHeight, setMinHeight] = useState(0); // Stocke la hauteur minimale
  const [trueContainerHeight, setTrueContainerHeight] = useState(0);

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
    if (containerRef.current) {
      setMinHeight(containerRef.current.offsetWidth);
      setTrueContainerHeight(containerRef.current.offsetWidth - convertRemToPx(1));
    }

    if (parentRef && parentRef.current) {
      const parentWidth = parentRef.current.offsetWidth;
      const remValue = convertRemToPx(9);
      const width = remValue + menuRadius * 2;
      let radiusVariation = null;

      if (typeof menuRadiusVariation === "number") {
        radiusVariation = menuRadiusVariation;
      } else if (Array.isArray(menuRadiusVariation)) {
        if (menuRadiusVariation) {
          if (menuRadiusVariation.length === 4) {
            // Vérifie si les entrées du tableau sont des integer
            if (menuRadiusVariation.every((x) => Number.isInteger(x) === true)) {
              let minWidth = menuRadiusVariation[0];
              let maxWidth = menuRadiusVariation[1];
              let minVariation = menuRadiusVariation[2];
              let maxVariation = menuRadiusVariation[3];
              if (parentWidth < minWidth) {
                radiusVariation = minVariation;
              } else if (parentWidth >= minWidth && parentWidth <= maxWidth) {
                // Si minVariation < maxVariation,
                // radiusVariation = minVariation + variation totale / rapport de plage de contrôle sur largeur du conteneur parent
                // Sinon,
                // radiusVariation = minVariation - variation totale / rapport de plage de contrôle sur largeur du conteneur parent
                radiusVariation =
                  minVariation < maxVariation
                    ? minVariation +
                      (Math.abs(minVariation) + Math.abs(maxVariation)) /
                        ((maxWidth - minWidth) / (parentWidth - minWidth))
                    : minVariation -
                      (Math.abs(minVariation) + Math.abs(maxVariation)) /
                        ((maxWidth - minWidth) / (parentWidth - minWidth));
              } else {
                radiusVariation = maxVariation;
              }
            }
          }
        }
      }

      if (width > parentWidth) {
        createElements((parentWidth - remValue) / 2, radiusVariation);
      } else {
        createElements(menuRadius, radiusVariation);
      }
    }
  }

  function createElements(newRadius, radiusVariation) {
    const elementsNumber = textElements.length;
    if (elementsNumber > 0) {
      const angleBetweenTextElements = (2 * Math.PI) / elementsNumber;

      const newElements = textElements.map((element, index) => {
        let elementAngle = firstTextAngleInRadians - index * angleBetweenTextElements;
        let elementRadius = newRadius + Math.random() * radiusVariation;
        let x = elementRadius * Math.cos(elementAngle);
        let y = elementRadius * Math.sin(elementAngle);
        let cssClasses = `${elementClasses} radial-text-hidden`;

        return { element, x, y, cssClasses };
      });

      setElements(newElements);
    }
  }

  function displayElements() {
    const spans = containerRef.current.querySelectorAll("span");

    spans.forEach((element, index) => {
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
    <div
      ref={containerRef}
      className="radial-text-first-container"
      style={{ height: `${minHeight}px` }} // Utilise la hauteur calculée
    >
      <div
        className={`radial-text-true-container ${containerClasses}`}
        style={{ height: `${trueContainerHeight}px` }}
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
    </div>
  );
}
