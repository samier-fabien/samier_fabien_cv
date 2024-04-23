import React, { useState, useRef, useEffect } from "react";
import "../css/menu.css";

export default function RadialMenu({
  elements,
  button,
  buttonClass,
  buttonRadius = 128,
  menuAngle = 90,
  menuRadius = 150,
  menuOrientation = 2,
  liRadius = 40,
  duration = 500,
  addedStyle,
}) {
  const menuRef = useRef(null);
  const [listElements, setListElements] = useState(null);

  function handleClick() {
    const liS = menuRef.current.querySelectorAll("li");
    let angle; // angle en radians max 180 degrés
    switch (menuAngle) {
      case 90:
        angle = Math.PI / 2 / (listElements.length - 1);
        break;
      case 180:
        angle = Math.PI / (listElements.length - 1);
        break;
      default:
        angle = Math.PI / (listElements.length + 1);
        break;
    }

    liS.forEach((li, index) => {
      if (li.classList.contains("radial-menu-displayed")) {
        li.style.transform = `translateY(0px)`;
        li.classList.remove("radial-menu-displayed");
        li.classList.add("radial-menu-hidden");
      } else if (li.classList.contains("radial-menu-hidden")) {
        let liAngle = angle * index; // angle en radians de l'élément

        // calcul x y en fonction de l'angle
        let x = menuRadius * Math.cos(liAngle);
        let y = menuRadius * Math.sin(liAngle);

        if (menuOrientation === 1) {
          li.style.transform = `translateX(${x}px) translateY(${-y}px)`;
        } else if (menuOrientation === 2) {
          li.style.transform = `translateX(${x}px) translateY(${y}px)`;
        } else if (menuOrientation === 3) {
          li.style.transform = `translateX(${-x}px) translateY(${y}px)`;
        } else {
          li.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
        }
        li.style.transitionDelay = `${200 * index}ms`;
        li.style.transitionDuration = `${duration}ms`;
        li.classList.remove("radial-menu-hidden");
        li.classList.add("radial-menu-displayed");
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
    root.style.setProperty("--radial-menu-li-radius", `${liRadius}px`);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--radial-menu-button-radius", `${buttonRadius}px`);
  }, [buttonRadius]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--radial-menu-li-radius", `${liRadius}px`);
  }, [liRadius]);

  return (
    <ul
      id="radial-menu"
      className="d-inline-block position-relative"
      ref={menuRef}
      onClick={button ? null : handleClick}
      style={addedStyle ? addedStyle : {}}
    >
      {button ? (
        <a
          href="#"
          className={buttonClass ? buttonClass + " menu-button" : "menu-button"}
          onClick={handleClick}
        >
          {button ? button : ""}
        </a>
      ) : (
        <a href="#" onClick={handleClick}></a>
      )}
      {listElements
        ? listElements.map((listElement, index) => (
            <li
              key={index}
              className="radial-menu-hidden d-inline-flex justify-content-center align-items-center"
            >
              {listElement}
            </li>
          ))
        : ""}
    </ul>
  );
}
