import React from "react";
import Transition from "./Transition";

export default function HeaderTransition({
  title = "",
  titleContainerClasses = "bg-dark text-light",
  svgContainerClasses = "bg-dark",
  svgFillColor = "#ffffff",
}) {
  return (
    <>
      <div className={`container-fluid py-4 text-center ${titleContainerClasses}`}>
        <h1 className="display-4 m-0 p-0">{title}</h1>
      </div>
      <Transition transitionShape="custom" transitionValues={[50, 100, 100, 349, -50, 50]} />
    </>
  );
}
