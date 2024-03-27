import React, { useState } from "react";
import TransitionWrapper from "../components/TransitionWrapper";

export default function Root() {
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <TransitionWrapper
      path={"/test"}
      isInTransit={hasClicked}
      transitionClass="fade-out"
      transitionTime="300"
      wrapperClass="container-fluid bg-primary full-page transition-opacity"
    >
      <div className="row">
        <div className="col position-absolute top-50 start-50 translate-middle text-center text-light">
          <img
            src="../../src/assets/bitmaps/head-square.jpg"
            className="rounded-circle shadow"
            alt="Une photo de moi"
          />
          <h1 className="h1 mt-3">Samier Fabien</h1>
          <h2 className="h5 mb-5">Concepteur, développeur d'applications</h2>
          <button onClick={(e) => setHasClicked(true)} type="button" className="btn btn btn-light">
            Jeter un œil
          </button>
        </div>
      </div>
    </TransitionWrapper>
  );
}
