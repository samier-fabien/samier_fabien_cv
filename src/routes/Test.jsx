import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/BubblesContainer";

export default function Test() {
  const componentRef = useRef(null);
  const [rowWidth, setRowWidth] = useState(0);

  useEffect(() => {
    setRowWidth(componentRef.current.offsetWidth);
  }, []);

  return (
    <div className="container-fluid bg-primary full-page instantOutsideAnim">
      <div className="row">
        <div className="col text-center text-light">
          <h1 className="h1 mt-3">Test Page</h1>
        </div>
      </div>
      <div className="row" ref={componentRef}>
        <div className="col p-0">
          <BubblesContainer w={rowWidth} h={500} />
        </div>
      </div>
    </div>
  );
}
