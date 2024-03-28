import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";

export default function Test() {
  const rowRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div className="container-fluid bg-primary full-page instantOutsideAnim">
      <div className="row">
        <div className="col text-center text-light">
          <h1 className="h1 mt-3">Test Page</h1>
        </div>
      </div>
      <div className="row" ref={rowRef}>
        <div className="col p-0">
          <BubblesContainer w={1000} h={500} />
        </div>
      </div>
    </div>
  );
}
