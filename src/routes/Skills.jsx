import React, { useRef } from "react";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import Transition from "../components/Transition";
import "../css/skills.css";
import RadialTextDisplay from "../components/radialTextDisplay/RadialTextDisplay";
import ParallaxContainer from "../components/ParallaxContainer";

export default function Skills() {
  const firstParallaxColRef = useRef(null);
  const secondParallaxColRef = useRef(null);
  const thirdParallaxColRef = useRef(null);
  const menuRadiusVariation = [320, 600, 30, -50];

  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Compétences</h1>
      </div>
      <Transition
        transitionPathOnTop={1}
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="parallax-bg-color-orange"
        transitionFillColor="#202428"
      />
      <ParallaxContainer containerClasses="parallax-bg-color-orange">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="h1 parallax-title">Des besoins au concept</h2>
        </div>
        <div
          ref={firstParallaxColRef}
          className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center"
        >
          <RadialTextDisplay
            textElements={[
              "Etre à l'écoute",
              "Analyser les besoins",
              "Synthétiser",
              "Evaluer la faisablité",
              "Conceptualiser",
            ]}
            menuRadius={250}
            menuRadiusVariation={menuRadiusVariation}
            elementClasses="badge rounded-4 bg-orange-400"
            containerClasses="bg-light parallax-image-resize parallax-bg-image bg-image-needs"
            parentRef={firstParallaxColRef}
          />
        </div>
      </ParallaxContainer>
      <Transition
        transitionPathOnTop={0}
        transitionContainerClasses="bg-transparent"
        transitionFillColor="rgb(208, 208, 255)"
      />
      <ParallaxContainer containerClasses="parallax-bg-color-purple">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="h1 parallax-title">Conception</h2>
        </div>
        <div
          ref={secondParallaxColRef}
          className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center"
        >
          <RadialTextDisplay
            textElements={[
              "Choisir les technologies",
              "S'aider de l'UML",
              "Modéliser une BDD",
              "Concevoir le design",
              "Maquetter",
              "Planifier les étapes",
              "Présenter les projet",
            ]}
            menuRadius={250}
            menuRadiusVariation={menuRadiusVariation}
            elementClasses="badge rounded-4 bg-indigo-300"
            containerClasses="bg-light parallax-image-resize parallax-bg-image bg-image-concept"
            parentRef={secondParallaxColRef}
          />
        </div>
      </ParallaxContainer>
      <Transition
        transitionPathOnTop={0}
        transitionContainerClasses="bg-transparent"
        transitionFillColor="rgb(253, 207, 255)"
      />
      <ParallaxContainer containerClasses="parallax-bg-color-pink">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="h1 parallax-title">Développement</h2>
        </div>
        <div
          ref={thirdParallaxColRef}
          className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center"
        >
          <RadialTextDisplay
            textElements={[
              "Travailler en équipe",
              "Contexte agile",
              "Conteneurisation",
              "Tests unitaires",
              "Versionner son code",
              "Ecrire un code propre",
              "Savoir d'adapter",
              "Documenter son code",
            ]}
            menuRadius={250}
            menuRadiusVariation={menuRadiusVariation}
            elementClasses="badge rounded-4 bg-pink-300"
            containerClasses="bg-light parallax-image-resize parallax-bg-image bg-image-dev"
            parentRef={thirdParallaxColRef}
          />
        </div>
      </ParallaxContainer>
      <FooterTransition />
    </>
  );
}
