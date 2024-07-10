import React, { forwardRef } from "react";

const TitleOneObserved = forwardRef(function TitleOneObserved({ props, ref }) {
  return (
    <h2
      ref={ref}
      className={`display-6 pt-3 text-center transition-duration-800 ${
        props.cssClasses ? props.cssClasses : ""
      }`}
    >
      <span className="px-4" style={{ borderLeft: `0.3rem solid ${props.titleBorderColor}` }}>
        {title}
      </span>
    </h2>
  );
});

export default TitleOneObserved;
