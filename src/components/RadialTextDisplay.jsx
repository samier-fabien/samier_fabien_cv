import React, { useEffect, useState } from "react";

export default function RadialTextDisplay({
  textElements = [],
  firstTextAngleInRadians = Math.PI / 2,
  menuRadius = 200,
  menuRadiusVariation = 0,
  elementClasses = "",
}) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    calculatePositions();
  }, [textElements]);

  function calculatePositions() {
    const elementsNumber = textElements.length;
    if (elementsNumber > 0) {
      const angleBetweenTextElements = (2 * Math.PI) / elementsNumber;
      console.log(`angleBetweenTextElements: ${angleBetweenTextElements}`);

      const newElements = textElements.map((element, index) => {
        let elementAngle = firstTextAngleInRadians + index * angleBetweenTextElements;
        let elementRadius = menuRadius + Math.random() * menuRadiusVariation;
        let x = elementRadius * Math.cos(elementAngle);
        let y = elementRadius * Math.sin(elementAngle);
        console.log(`${element} elementAngle: ${elementAngle} [x: ${x} | y: ${y}]`);
        return { element, x, y };
      });

      setElements(newElements);
    }
    console.log(elements);
  }

  return (
    <div
      style={{ position: "relative", width: `${menuRadius * 2}px`, height: `${menuRadius * 2}px` }}
    >
      {elements.map((listElement, index) => (
        <span
          key={index}
          className={elementClasses}
          style={{
            position: "absolute",
            left: `calc(50% + ${listElement.x}px)`,
            top: `calc(50% - ${listElement.y}px)`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {listElement.element}
        </span>
      ))}
    </div>
  );
}
