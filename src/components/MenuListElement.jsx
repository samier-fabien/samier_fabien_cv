import React, { useRef } from "react";
import Tooltip from "./Tooltip";
import "../css/menuListElement.css";
import { Link } from "react-router-dom";

export default function MenuListElement({
  iconName = "",
  iconSize = "1rem",
  tooltipText = "default",
  tooltipTextClasses = "",
  hyperlink = "#",
  hyperlinkClasses = "",
}) {
  const hyperlinkRef = useRef(null);

  return (
    <>
      <Link to={hyperlink} ref={hyperlinkRef} className={`menu-list-element ${hyperlinkClasses}`}>
        <i className={`${iconName}`} style={{ fontSize: iconSize }}></i>
      </Link>
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
