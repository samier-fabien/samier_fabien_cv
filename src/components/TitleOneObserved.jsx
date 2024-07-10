import React, { forwardRef } from "react";

const TitleOneObserved = forwardRef(function TitleOneObserved(props, ref) {
  return (
    <h2
      ref={ref}
      style={{ borderLeft: `0.3rem solid ${props.borderColor}` }}
      className={`display-6 ps-3 transition-duration-800 opacity-0 ${
        props.cssClasses ? props.cssClasses : ""
      }`}
    >
      {props.children}
    </h2>
  );
});

export default TitleOneObserved;
