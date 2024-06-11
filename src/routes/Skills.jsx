import React from "react";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import Transition from "../components/Transition";
import "../css/skills.css";
import RadialTextDisplay from "../components/radialTextDisplay/RadialTextDisplay";
import ParallaxContainer from "../components/ParallaxContainer";

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
      <ParallaxContainer containerClasses="bg-color-parallax-1">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="h1 parallax-title">Lorem ipsum</h2>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center">
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
            menuRadius={250}
            menuRadiusVariation={-30}
            elementClasses="badge rounded-pill bg-color-badge-1 p-3"
            containerClasses="bg-light bg-image-parallax-1 parallax-container-border"
          />
        </div>
      </ParallaxContainer>
      <Transition
        transitionPathOnTop={0}
        transitionContainerClasses="bg-transparent"
        transitionFillColor="rgb(208, 208, 255)"
      />
      <ParallaxContainer containerClasses="bg-color-parallax-2">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="h1 parallax-title">Lorem ipsum</h2>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center">
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
            menuRadius={250}
            menuRadiusVariation={-30}
            elementClasses="badge rounded-pill bg-color-badge-2 p-3"
            containerClasses="bg-light bg-image-parallax-2"
          />
        </div>
      </ParallaxContainer>
      <Transition
        transitionPathOnTop={0}
        transitionContainerClasses="bg-transparent"
        transitionFillColor="rgb(253, 207, 255)"
      />
      <ParallaxContainer containerClasses="bg-color-parallax-3">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="h1 parallax-title">Lorem ipsum</h2>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center">
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
            menuRadius={250}
            menuRadiusVariation={-30}
            elementClasses="badge rounded-pill bg-color-badge-3 p-3"
            containerClasses="bg-light bg-image-parallax-3"
          />
        </div>
      </ParallaxContainer>
      <FooterTransition />
    </>
  );
}
