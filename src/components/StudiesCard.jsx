import React, { forwardRef, useEffect } from "react";
import "../css/studiesCard.css";

const StudiesCard = forwardRef(function StudiesCard(props, ref) {
  return (
    <div
      ref={ref}
      className={`studies-card transition-duration-800 my-5 opacity-0 ${
        props.cssClasses ? props.cssClasses : ""
      }`}
    >
      {props.title ? <h2 className="pb-4">{props.title}</h2> : ""}
      {props.period ? <p className="text-end pb-4">{props.period}</p> : ""}
      <p className="pb-1">{props.children}</p>
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
