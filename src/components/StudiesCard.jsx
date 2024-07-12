import React, { useEffect, useRef } from "react";
import "../css/studiesCard.css";

export default function StudiesCard({
  children,
  title,
  period,
  place,
  classToAdd,
  classToRemove,
  cssClasses,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 1) {
            displayElement(ref);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  function displayElement(elementToObserve) {
    const element = elementToObserve.current;
    if (element.classList.contains(classToRemove)) {
      element.classList.remove(classToRemove);
      element.classList.add(classToAdd);
    }
  }

  return (
    <>
      <div
        ref={ref}
        className={`studies-card transition-duration-800 opacity-0 ${cssClasses ? cssClasses : ""}`}
      >
        {title ? <h2 className="pb-4 text-white">{title}</h2> : ""}
        {period ? (
          <p className="text-end pb-4">
            <em>{period}</em>
          </p>
        ) : (
          ""
        )}
        <p className="pb-1">{children}</p>
        {place ? <p className="fw-semibold">{place}</p> : ""}
      </div>
    </>
  );
}
