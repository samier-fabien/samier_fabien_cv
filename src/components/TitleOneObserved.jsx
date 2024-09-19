import React, { useEffect, useRef } from "react";
import "../css/titleOne.css";

export default function TitleOneObserved({ children, classToAdd, classToRemove, cssClasses = "" }) {
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
      <h2
        ref={ref}
        className={`h1 mt-5 mb-3 ps-3 transition-duration-800 border-left ${cssClasses} ${
          classToRemove ? classToRemove : ""
        }`}
      >
        {children}
      </h2>
    </>
  );
}
