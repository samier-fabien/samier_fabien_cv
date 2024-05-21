import React from "react";

export default function FooterTransition() {
  return (
    <div style={{ height: "150px", overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,50.00 C120.20,151.48 269.75,151.48 500.00,50.00 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#202428" }}
        ></path>
      </svg>
    </div>
  );
}
