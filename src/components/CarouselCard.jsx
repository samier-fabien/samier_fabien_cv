import React from "react";

export default function CarouselCard({
  headerTitle = "",
  cardTitle,
  cardText = "",
  columnClasses = "col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-8 col-xs-9",
  cardClasses = "",
}) {
  return (
    <div className={`row justify-content-center my-5`} style={{ height: "50vh" }}>
      <div className={columnClasses}>
        <div className={`card shadow h-100 ${cardClasses}`}>
          <div className="card-header h2 text-white">{headerTitle}</div>
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            {cardTitle ? <h5 className="card-title">{cardTitle}</h5> : ""}
            {cardText}
          </div>
        </div>
      </div>
    </div>
  );
}
