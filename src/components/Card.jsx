import React from "react";

export default function Card({
  headerTitle = "",
  cardTitle,
  cardText = "",
  columnClasses = "col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4",
  theme = "light",
}) {
  return (
    <div className={columnClasses}>
      <div className={`card border-light shadow h-100 text-bg-${theme} p-0`}>
        <div className="card-header h4">{headerTitle}</div>
        {cardTitle ? <h5 className="card-title">{cardTitle}</h5> : ""}
        <div className="card-body">
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </div>
  );
}
