import React, { useEffect, useRef } from "react";

export default function TitleTwoObserved({ children, classToAdd, classToRemove, cssClasses = "" }) {
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
      <h3
        ref={ref}
        className={`h4 pt-4 transition-duration-800 opacity-0 ${cssClasses ? cssClasses : ""}`}
      >
        {children}
      </h3>
    </>
  );
}
