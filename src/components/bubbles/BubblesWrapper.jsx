import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "./BubblesContainer";

const BubblesContainerWithRef = React.forwardRef((props, ref) => (
  <BubblesContainer {...props} forwardedRef={ref} />
));

export default function BubblesWrapper() {
  const [width, setWidth] = useState(null);
  const colRef = useRef(null);
  const bubblesContainerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      const colWidth = colRef.current.getBoundingClientRect().width;
      setWidth(colWidth);
      console.log(colRef.current.getBoundingClientRect().width);

      if (bubblesContainerRef.current) {
        bubblesContainerRef.current.updateCanvasWidth(colWidth);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="col p-0" ref={colRef}>
      <BubblesContainerWithRef
        ref={bubblesContainerRef}
        w={width || 1000}
        h={800}
        number={7}
        speed={2}
        minRadius={50}
        maxRadius={140}
        framerate={30}
        bubblesText={["Vite", "JS", "React", "CSS", "HTML", "PHP", "Sf"]}
      />
    </div>
  );
}
