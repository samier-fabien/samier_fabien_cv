import React, { useRef } from "react";
import Tooltip from "./Tooltip";
import "../css/menuListElement.css";

export default function MenuListElement({
  iconName = "",
  iconSize = "1rem",
  tooltipText = "default",
  tooltipTextClasses = "",
  hyperlinkClasses = "",
}) {
  const hyperlinkRef = useRef(null);

  return (
    <>
      <a href="#" ref={hyperlinkRef} className={`menu-list-element ${hyperlinkClasses}`}>
        <i className={`${iconName}`} style={{ fontSize: iconSize }}></i>
      </a>
      <Tooltip
        targetRef={hyperlinkRef}
        textToDisplay={tooltipText}
        left="-6%"
        top="-90%"
        tooltipRadius="50"
        tooltipClasses={tooltipTextClasses}
      />
    </>
  );
}
