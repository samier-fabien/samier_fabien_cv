import React from "react";

export default function ParallaxContainer({
  children,
  containerClasses = "",
  innerContainerClasses = "",
}) {
  return (
    <div className={`sticky-top z-n1 bg-transparent mb-5 ${containerClasses}`}>
      <div className={`parallax-container sticky-top ${innerContainerClasses}`}>
        <div className="container p-0 d-flex flex-column vh-100 align-items-center justify-content-center">
          {children}
        </div>
      </div>
    </div>
  );
}
