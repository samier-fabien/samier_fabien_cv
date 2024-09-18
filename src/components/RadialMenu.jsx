import React, { useState, useRef, useEffect } from "react";
import "../css/radialMenu.css";

/**
 * Displays a menu with links around a central button.
 * @param {Number} firstItemAngleInRadians - Starting angle in radians.
 * @param {Number} lastItemAngleInRadians - Ending angle in radians.
 * @param {Number} menuRadius - Radius between elements and button.
 * @param {string} menuClasses - CSS classes added to the nav.
 * @param {string} button - The html button tag contained inside the `<a>...</a>` link that triggers the `OffcanvasMenu`.
 * @param {string} buttonHyperlinkClasses - CSS classes added to the `<a>...</a>` link.
 * @param {Number} buttonRadius - The radius of the button.
 * @param {string} elements - For each React component inside this components's children, a ref to `RadialMenu` is added to automatically hide `Offcanvas` after click.
 * @param {Number} listElementRadius - Radius of every ListElement displayed.
 * @param {string} listElementClasses - Classes added to each `<li>...</li>` of the RadialMenu.
 * @param {Number} duration - CSS transitionDuration of the animation in ms.
 * @param {Number} delay - CSS transitionDelay of the animation in ms.
 */
export default function RadialMenu({
  firstItemAngleInRadians = Math.PI,
  lastItemAngleInRadians = 0,
  menuRadius = 150,
  menuClasses = "",
  button,
  buttonHyperlinkClasses = "",
  buttonRadius = 128,
  elements,
  listElementRadius = 40,
  listElementClasses = "",
  duration = 500,
  delay = 200,
}) {
  const listRef = useRef(null);
  const [listElements, setListElements] = useState(null);

  /**
   * After each click on the central button, manages if the links are shown or not and to calculate each element's position.
   */
  function handleClick() {
    const liS = listRef.current.querySelectorAll("li");

    const angle = (lastItemAngleInRadians - firstItemAngleInRadians) / (listElements.length - 1);

    liS.forEach((li, index) => {
      if (li.classList.contains("radial-menu-visible")) {
        li.style.transform = `translateY(0px)`;
        li.classList.remove("radial-menu-visible");
        li.classList.add("radial-menu-hidden");
      } else if (li.classList.contains("radial-menu-hidden")) {
        let liAngle = firstItemAngleInRadians + angle * index; // angle en radians de l'élément

        // x y calculation based on angle
        let x = menuRadius * Math.cos(liAngle);
        let y = menuRadius * Math.sin(liAngle);

        li.style.transform = `translateX(${x}px) translateY(${y}px)`;
        li.style.transitionDelay = `${delay * index}ms`;
        li.style.transitionDuration = `${duration}ms`;
        li.classList.remove("radial-menu-hidden");
        li.classList.add("radial-menu-visible");
      }
    });
  }

  useEffect(() => {
    // Adding menu items
    setListElements(elements);
  }, []);

  return (
    <nav id="radial-menu" className={`d-inline-block position-relative ${menuClasses}`}>
      {button ? (
        <a
          href="#"
          className={buttonHyperlinkClasses}
          onClick={handleClick}
          style={{ width: `${buttonRadius * 2}px`, height: `${buttonRadius * 2}px` }}
        >
          {button}
        </a>
      ) : (
        <a href="#" onClick={handleClick}>
          Menu
        </a>
      )}
      <ul ref={listRef}>
        {listElements
          ? listElements.map((listElement, index) => (
              <li
                key={index}
                className={`radial-menu-hidden ${listElementClasses}`}
                style={{
                  top: buttonRadius - listElementRadius,
                  left: buttonRadius - listElementRadius,
                  width: listElementRadius * 2,
                  height: listElementRadius * 2,
                }}
              >
                {/* Radius transmission to menu items */}
                {React.cloneElement(listElement, { radius: listElementRadius })}
              </li>
            ))
          : ""}
      </ul>
    </nav>
  );
}
