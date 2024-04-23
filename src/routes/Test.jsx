import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import RadialMenu from "../components/RadialMenu";

export default function Test() {
  const divRef = useRef(null);

  // J'essaie de centrer ma photo (<img/>) dans le menu (<ul>)

  return (
    <div className="container-fluid bg-white full-page instantOutsideAnim">
      <div className="row">
        <div className="col bg-primary text-center text-dark">
          <h1 className="h1 mt-3">Test Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-dark d-block">
          <RadialMenu
            elements={[
              <span className="text-center align-middle d-inline">t 1</span>,
              <span className="text-center align-middle d-inline">t 2</span>,
              <span className="text-center align-middle d-inline">t 3</span>,
              <span className="text-center align-middle d-inline">t 4</span>,
              <span className="text-center align-middle d-inline">t 5</span>,
            ]}
            menuRadius={250}
            menuAngle={90}
            menuOrientation={2}
            liRadius={40}
            buttonRadius={150}
            buttonClass="d-inline-flex justify-content-center align-items-center"
            // buttonClass="d-flex justify-content-center align-items-stretch position-relative"
            // addedStyle={{ position: "relative", top: "0px", left: "0px" }}
            button={
              // <img
              //   src="../../src/assets/bitmaps/head-square.jpg"
              //   className="rounded-circle shadow anim-translate-bounce"
              //   alt="Une photo de moi"
              // />
              <i className="bi bi-list text-dark" style={{ fontSize: "3rem" }}></i>
            }
          />
        </div>
      </div>
    </div>
  );
}
