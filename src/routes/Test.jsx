import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";

const BubblesContainerWithRef = React.forwardRef((props, ref) => (
  <BubblesContainer {...props} forwardedRef={ref} />
));

export default function Test() {
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

    window.addEventListener("resize", handleResize);

    // Nettoyage du gestionnaire d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Utilisation d'une dépendance vide pour s'assurer que le gestionnaire est ajouté et retiré uniquement lors du montage et du démontage du composant

  return (
    <div className="container-fluid bg-dark full-page instantOutsideAnim">
      <div className="row">
        <div className="col text-center text-light">
          <h1 className="h1 mt-3">Test Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col p-0" ref={colRef}>
          <BubblesContainerWithRef
            ref={bubblesContainerRef}
            w={width || 1000}
            h={1000}
            number={7}
            speed={2}
            minRadius={100}
            maxRadius={140}
            framerate={30}
            bubblesText={["Vite", "JS", "React", "CSS", "HTML", "PHP", "Sf"]}
          />
        </div>
      </div>
    </div>
  );
}
