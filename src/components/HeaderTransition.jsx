import React from "react";

export default function HeaderTransition({ title = "" }) {
  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">{title}</h1>
      </div>
      <div className="bg-dark">
        <div style={{ height: "100px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,50.00 C100.00,100.00 349.20,-50.00 500.00,50.00 L500.00,100.00 L0.00,100.00 Z"
              style={{ stroke: "none", fill: "#ffffff" }}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
