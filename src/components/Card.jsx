import React from "react";

export default function Card({ headerTitle = "", cardTitle, cardText = "" }) {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 text-dark my-3 d-flex">
      <div className="card flex-fill">
        <div className="h4 card-header">{headerTitle}</div>
        <div className="card-body">
          {cardTitle ? <h5 className="card-title">{cardTitle}</h5> : ""}
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </div>
  );
}
