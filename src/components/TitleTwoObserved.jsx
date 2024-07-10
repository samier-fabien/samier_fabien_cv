import React, { forwardRef } from "react";

const TitleTwoObserved = forwardRef(function TitleTwoObserved(props, ref) {
  return (
    <h3
      ref={ref}
      className={`h4 pt-4 transition-duration-800 opacity-0 ${
        props.cssClasses ? props.cssClasses : ""
      }`}
    >
      {props.children}
    </h3>
  );
});

export default TitleTwoObserved;
