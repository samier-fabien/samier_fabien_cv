import React, { useEffect, useRef } from "react";

export default function IntersectionObserverComponent({
  children,
  elementToObserve,
  classToAdd,
  classToRemove,
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 1) {
            displayElement();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (elementToObserve.current) {
      observer.observe(elementToObserve.current);
    }

    return () => {
      if (elementToObserve.current) {
        observer.unobserve(elementToObserve.current);
      }
    };
  }, [elementToObserve]);

  function displayElement() {
    const element = elementToObserve.current;
    if (element.classList.contains(classToRemove)) {
      element.classList.remove(classToRemove);
      element.classList.add(classToAdd);
    }
  }

  return <>{children}</>;
}
