import React, { useState, useRef } from "react";
import "../css/doubleSidedCard.css";

export default function DoubleSidedCard({ children, otherFace }) {
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
      if (otherFace) {
        setTimeout(() => {
          setContent(otherFace);
        }, 250);
      }
    }
  }

  return (
    <div ref={cardRef} className="card doubleSidedCard" onClick={handleMouseClick}>
      <div className="card-body">{content ? content : ""}</div>
    </div>
  );
}
