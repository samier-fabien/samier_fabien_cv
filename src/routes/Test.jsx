import React, { useState, useRef, useEffect } from "react";
import BubblesWrapper from "../components/bubbles/BubblesWrapper";

export default function Test() {
  return (
    <div className="container-fluid bg-dark full-page instantOutsideAnim">
      <div className="row">
        <div className="col text-center text-light">
          <h1 className="h1 mt-3">Test Page</h1>
        </div>
      </div>
      <div className="row">
        <BubblesWrapper />
      </div>
    </div>
  );
}
