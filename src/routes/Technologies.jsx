import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";

export default function Technologies() {
  const divRef = useRef(null);

  return (
    <div className="container-fluid bg-danger full-page instantOutsideAnim">
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
          />
        </div>
      </div>
    </div>
  );
}
