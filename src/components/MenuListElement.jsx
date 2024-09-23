import React, { useRef } from "react";
import Tooltip from "./Tooltip";
import { Link } from "react-router-dom";

/**
 * Displays an element rounded menu element. Use it with RadialMenu.
 * @param {String} iconName - The css class name of the icon to display. Example of use: `<i class="iconName"></i>`.
 * @param {String} iconSize - radius
 * @param {String} tooltipText - The tooltip text displayed around the `MenuListElement`. If none, no Tooltip displayed.
 * @param {String} tooltipClasses - CSS classes added to Tooltip.
 * @param {String} uri - Link's URI. Example `/pagename`.
 * @param {String} hyperlinkClasses - CSS classes added to `react-router-dom` `Link`.
 * @param {Number} radius - Radius of the element.
 */
export default function MenuListElement({
  iconName = "",
  iconSize = "1rem",
  tooltipText,
  tooltipClasses = "",
  uri = "#",
  hyperlinkClasses = "",
  radius = 128,
}) {
  // Given to the `Tooltip` to attach `EventListener` on it
  const hyperlinkRef = useRef(null);

  return (
    <>
      <Link
        to={uri}
        ref={hyperlinkRef}
        className={`text-decoration-none ${hyperlinkClasses}`}
        style={{ height: `${radius * 2}px` }}
      >
        <i className={`${iconName}`} style={{ fontSize: iconSize }}></i>
      </Link>
      {tooltipText ? (
        <Tooltip
          targetRef={hyperlinkRef}
          textToDisplay={tooltipText}
          left="-6%"
          top="-90%"
          tooltipRadius={radius}
          tooltipClasses={tooltipClasses}
        />
      ) : (
        ""
      )}
    </>
  );
}
