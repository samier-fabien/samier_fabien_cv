import React from "react";
import CarouselCard from "./CarouselCard";

export default function Carousel({ slides }) {
  return (
    <div id="carouselTechnologies" className="carousel slide" data-bs-theme="dark">
      <div className="carousel-indicators">
        {slides
          ? slides.map((slide, index) =>
              index === 0 ? (
                <button
                  type="button"
                  data-bs-target="#carouselTechnologies"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
              ) : (
                <button
                  type="button"
                  data-bs-target="#carouselTechnologies"
                  data-bs-slide-to={index}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              )
            )
          : ""}
      </div>
      <div className="carousel-inner">
        {slides
          ? slides.map((slide, index) =>
              index === 0 ? (
                <div key={index} className="carousel-item active w-100">
                  {slide}
                </div>
              ) : (
                <div key={index} className="carousel-item w-100">
                  {slide}
                </div>
              )
            )
          : ""}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselTechnologies"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselTechnologies"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
