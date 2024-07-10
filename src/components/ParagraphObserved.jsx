import React, { forwardRef } from "react";

const ParagraphObserved = forwardRef(function ParagraphObserved(props, ref) {
  return (
    <p ref={ref} className={`transition-duration-800 ${props.cssClasses ? props.cssClasses : ""}`}>
      {props.children}
    </p>
  );
});

export default ParagraphObserved;
