import React, { useEffect, useRef } from "react";

export default function IntersectionObserverComponent({ children, classToAdd, classToRemove }) {
  const childRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 1) {
            displayElement(childRef);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (childRef.current) {
      console.log(childRef.current);
      observer.observe(childRef.current);
    }

    return () => {
      if (childRef.current) {
        observer.unobserve(childRef.current);
      }
    };
  }, [childRef]);

  function displayElement(elementToObserve) {
    const element = elementToObserve.current;
    if (element.classList.contains(classToRemove)) {
      element.classList.remove(classToRemove);
      element.classList.add(classToAdd);
    }
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ref: childRef,
        });
      })}
    </>
  );
}
