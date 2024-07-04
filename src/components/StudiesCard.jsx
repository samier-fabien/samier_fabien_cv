import React, { forwardRef, useEffect } from "react";

const StudiesCard = forwardRef(function StudiesCard(props, ref) {
  useEffect(() => {
    if (props) {
      console.log(props);
      console.log(props.children);
    }
  }, [props]);

  return (
    <div ref={ref} className="transition-duration-800 my-5 opacity-0">
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
