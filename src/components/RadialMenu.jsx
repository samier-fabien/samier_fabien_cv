import React, { useState, useRef, useEffect } from "react";
import "../css/radialMenu.css";

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
  const menuRef = useRef(null);
  const [listElements, setListElements] = useState(null);

  function handleClick() {
    const liS = menuRef.current.querySelectorAll("li");
    const angle = (lastItemAngleInRadians - firstItemAngleInRadians) / (listElements.length - 1);

    liS.forEach((li, index) => {
      if (li.classList.contains("radial-menu-visible")) {
        li.style.transform = `translateY(0px)`;
        li.classList.remove("radial-menu-visible");
        li.classList.add("radial-menu-hidden");
      } else if (li.classList.contains("radial-menu-hidden")) {
        let liAngle = firstItemAngleInRadians + angle * index; // angle en radians de l'élément

        // calcul x y en fonction de l'angle
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
    // Ajout des éléments du menu
    setListElements(elements);
    const liS = menuRef.current.querySelectorAll("li");
    // Ajout de variables css qui "pilotent" les dimensions et position de menu et des radial-menu-element via des calc()
    const root = document.documentElement;
    root.style.setProperty("--radial-menu-button-radius", `${buttonRadius}px`);
    root.style.setProperty("--radial-menu-li-radius", `${listElementRadius}px`);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--radial-menu-button-radius", `${buttonRadius}px`);
  }, [buttonRadius]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--radial-menu-li-radius", `${listElementRadius}px`);
  }, [listElementRadius]);

  return (
    <ul
      id="radial-menu"
      className={`d-inline-block position-relative ${menuClasses}`}
      ref={menuRef}
    >
      {button ? (
        <a href="#" className={buttonHyperlinkClasses} onClick={handleClick}>
          {button ? button : ""}
        </a>
      ) : (
        <a href="#" onClick={handleClick}>
          Menu
        </a>
      )}
      {listElements
        ? listElements.map((listElement, index) => (
            <li key={index} className={`radial-menu-hidden ${listElementClasses}`}>
              {listElement}
            </li>
          ))
        : ""}
    </ul>
  );
}
