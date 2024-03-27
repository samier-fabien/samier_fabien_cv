import React, { useState, useEffect } from "react";
import TransitionWrapper from "../components/TransitionWrapper";

export default function Root() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="bg-primary">
      <TransitionWrapper
        path={"/test"}
        isInTransit={hasClicked}
        transitionClass="anim-fade-out"
        transitionTime="500"
        // wrapperClass="container-fluid bg-primary full-page transition-opacity"
        wrapperClass="container-fluid bg-primary full-page"
      >
        <div className="row">
          <div className="col position-absolute top-50 start-50 translate-middle text-center text-light">
            <img
              src="../../src/assets/bitmaps/head-square.jpg"
              className="rounded-circle shadow anim-rotate-translate"
              alt="Une photo de moi"
            />
            <h1 className="h1 mt-3 anim-fade-in">Samier Fabien</h1>
            <h2 className="h5 mb-5 anim-fade-in">Concepteur, développeur d'applications</h2>
            <button
              onClick={(e) => setHasClicked(true)}
              type="button"
              className={pageLoaded ? "btn btn-light anim-jig" : "btn btn-light anim-right-inside"}
            >
              Jeter un œil
            </button>
          </div>
        </div>
      </TransitionWrapper>
    </div>
  );
}
