import React, { useEffect } from "react";

/**
 * Displays an <ul> list in wich every entry of listElements will take place as a <li>
 * @param {array} listElements = [],
 * @param {string} listElementsCssClasses - Css classes added to each <li>
 * @param {string} listCssClasses - Css classes added to the <ul>
 */
export default function ListGroup({
  listElements = [],
  listElementsCssClasses = "",
  listCssClasses = "",
}) {
  useEffect(() => {
  }, [listElements]);

  return (
    <ul className={`list-group ${listCssClasses}`}>
      {listElements.map((listElement, index) => (
        <li key={index} className={`list-group-item bg-transparent ${listElementsCssClasses}`}>
          {listElement}
        </li>
      ))}
    </ul>
  );
}
