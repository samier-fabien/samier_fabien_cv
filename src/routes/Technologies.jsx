import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";

export default function Technologies() {
  const divRef = useRef(null);

  return (
    <div className="container-fluid bg-white">
      <div className="row">
        <div className="col text-center text-dark">
          <h1 className="display-5 pb-5 text-center">Les technologies que je pratique</h1>
        </div>
      </div>
      <div className="row">
        <div className="col p-0" ref={divRef}>
          <BubblesContainer
            parentRef={divRef}
            h={700}
            framerate={40}
            speed={1.1}
            minRadius={30}
            maxRadius={80}
            number={9}
            bubblesText={["Vite", "JS", "React", "CSS", "HTML", "PHP", "Sf", "Docker", "Git"]}
            bubblesColorOne="rgba(255, 255, 255, 0.3)"
            bubblesColorTwo="rgba(240, 240, 255, 0.1)"
            bubblesColorThree="rgba(100, 100, 180, 0.2)"
            bubblesColorOneStop="0"
            bubblesColorTwoStop="0.8"
            bubblesColorThreeStop="1"
          />
        </div>
      </div>
    </div>
  );
}
