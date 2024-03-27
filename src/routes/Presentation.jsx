import React, { useState } from "react";
import TransitionWrapper from "../components/TransitionWrapper";

export default function Presentation() {
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <div className="bg-primary">
      <TransitionWrapper
        path={"/accueil"}
        isInTransit={hasClicked}
        transitionClass="anim-fade-out"
        transitionTime="500"
        // wrapperClass="container-fluid bg-primary full-page transition-opacity"
        wrapperClass="container-fluid bg-primary full-page"
      >
        <header className="container m-3 p-5">
          <div className="row">
            <div className="col text-center text-light">
              <img
                src="../../src/assets/bitmaps/head-square.jpg"
                className="rounded-circle shadow anim-translate-bounce"
                alt="Une photo de moi"
              />
              <h1 className="h1 mt-3 anim-left-inside">Samier Fabien</h1>
              <h2 className="h5 mb-5 anim-right-inside">Concepteur, développeur d'applications</h2>
            </div>
          </div>
        </header>
        <section className="container bg-white"></section>
        <footer className="container bg-white"></footer>
      </TransitionWrapper>
    </div>
  );
}
