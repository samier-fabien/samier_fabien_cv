import React from "react";

export default function ParallaxContainer({ children, containerClasses = "" }) {
  return (
    <div className="sticky-top z-n1 bg-transparent mb-5">
      <div className={`parallax-container sticky-top ${containerClasses}`}>
        <div className="container p-0 d-flex flex-column vh-100 align-items-center justify-content-center">
          {children}
        </div>
      </div>
    </div>
  );
}
