import React, { useState, useRef } from "react";
import "../css/doubleSidedCard.css";

export default function DoubleSidedCard({ children, otherSide, cardClasses = "" }) {
  const [content, setContent] = useState(children);
  const cardRef = useRef(null);

  function handleMouseClick() {
    if (cardRef && cardRef.current) {
      flipTheCard();
    }
  }

  function flipTheCard() {
    if (cardRef.current.classList.contains("card-flip")) {
      cardRef.current.classList.remove("card-flip");
      setTimeout(() => {
        setContent(children);
      }, 250);
    } else {
      cardRef.current.classList.add("card-flip");
      if (otherSide) {
        setTimeout(() => {
          setContent(otherSide);
        }, 250);
      }
    }
  }

  return (
    <div
      ref={cardRef}
      className={`card h-100 double-sided-card pb-4 rounded-5 ${cardClasses}`}
      onClick={handleMouseClick}
    >
      {content ? content : ""}
    </div>
  );
}
