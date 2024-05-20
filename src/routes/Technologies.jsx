import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";

export default function Technologies() {
  const divRef = useRef(null);

  return (
    <div className="container-fluid bg-white full-page instantOutsideAnim">
      <div className="row">
        <div className="col text-center text-light">
          <h1 className="h1 mt-3">Test Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col p-0" ref={divRef}>
          <BubblesContainer
            parentRef={divRef}
            h={800}
            framerate={40}
            speed={1.2}
            minRadius={40}
            maxRadius={100}
            number={7}
            bubblesText={["Vite", "JS", "React", "CSS", "HTML", "PHP", "Sf"]}
            bubblesColorOne="rgba(240, 240, 255, 0.5)"
            bubblesColorTwo="rgba(2, 2, 2, 0.2)"
          />
        </div>
      </div>
    </div>
  );
}
