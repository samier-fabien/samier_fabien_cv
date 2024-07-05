import React, { forwardRef, useEffect } from "react";
import "../css/studiesCard.css";

const StudiesCard = forwardRef(function StudiesCard(props, ref) {
  return (
    <div ref={ref} className="studies-card transition-duration-800 my-5 opacity-0">
      {props.title ? <h2>{props.title}</h2> : ""}
      {props.period ? <p className="d-inline float-end pt-4 ps-3">{props.period}</p> : ""}
      <p className="pt-4 pb-1">{props.children}</p>
      {props.place ? (
        <p>
          <em>{props.place}</em>
        </p>
      ) : (
        ""
      )}
    </div>
  );
});

export default StudiesCard;
