import React from "react";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import Transition from "../components/Transition";
import "../css/skills.css";
import RadialTextDisplay from "../components/RadialTextDisplay";

export default function Skills() {
  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Compétences</h1>
      </div>
      <Transition
        transitionPathOnTop="true"
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="transition-background-1"
        transitionFillColor="#202428"
      />
      <div className="sticky-top z-n1 bg-transparent mb-5">
        <div className="parallax-container bg-parallax-1 sticky-top">
          <div className="container">
            <div className="row position-absolute">
              <h1>Lorem ipsum</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center vh-100">
              <RadialTextDisplay
                textElements={[
                  "lorem",
                  "ipsum",
                  "dolor",
                  "sit",
                  "amet",
                  "consectetur",
                  "adipisicing",
                  "elit",
                ]}
                menuRadiusVariation={50}
                elementClasses="badge rounded-pill text-bg-light p-3"
              />
            </div>
          </div>
        </div>
      </div>
      <Transition
        transitionPathOnTop={0}
        transitionContainerClasses="bg-transparent"
        transitionFillColor="rgb(208, 208, 255)"
      />
      <div className="sticky-top z-n1 bg-transparent mb-5">
        <div className="parallax-container bg-parallax-2 sticky-top">
          <div className="container">
            <div className="row position-absolute">
              <h1>Lorem ipsum</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center vh-100">
              <RadialTextDisplay
                textElements={[
                  "lorem",
                  "ipsum",
                  "dolor",
                  "sit",
                  "amet",
                  "consectetur",
                  "adipisicing",
                  "elit",
                ]}
                menuRadiusVariation={50}
                elementClasses="badge rounded-pill text-bg-light p-3"
              />
            </div>
          </div>
        </div>
      </div>

      <Transition
        transitionPathOnTop={0}
        transitionContainerClasses="bg-transparent"
        transitionFillColor="rgb(248, 222, 255)"
      />
      <div className="sticky-top z-n1 bg-transparent mb-5">
        <div className="parallax-container bg-parallax-3 sticky-top">
          <div className="container">
            <div className="row position-absolute">
              <h1>Lorem ipsum</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center vh-100">
              <RadialTextDisplay
                textElements={[
                  "lorem",
                  "ipsum",
                  "dolor",
                  "sit",
                  "amet",
                  "consectetur",
                  "adipisicing",
                  "elit",
                ]}
                menuRadiusVariation={50}
                elementClasses="badge rounded-pill text-bg-light p-3"
              />
            </div>
          </div>
        </div>
      </div>

      <FooterTransition />
    </>
  );
}
