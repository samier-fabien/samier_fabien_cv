import React, { useRef } from "react";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import IntersectionObserverComponent from "../components/IntersectionObserverComponent";
import "../css/studies.css";

export default function Studies() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Études et formations</h1>
      </div>
      <Transition
        transitionPathOnTop="true"
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="bg-white"
        transitionFillColor="#202428"
      />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11 col-sm-11 col-xs-12">
            <IntersectionObserverComponent
              elementToObserve={firstRef}
              classToAdd="opacity-100"
              classToRemove="opacity-0"
            >
              <div ref={firstRef} className="transition-duration-800 my-5 opacity-0">
                <h2>Baccalauréat</h2>
                <p className="d-inline float-end pt-4 ps-3">Juin 2005</p>
                <p className="pt-4 pb-1">Économique et social.</p>
                <p>
                  <em>Lycée Baudimont, Arras</em>
                </p>
              </div>
            </IntersectionObserverComponent>

            <IntersectionObserverComponent
              elementToObserve={secondRef}
              classToAdd="opacity-100"
              classToRemove="opacity-0"
            >
              <div ref={secondRef} className="transition-duration-800 my-5 opacity-0">
                <h2>Techniques de Base du Développement d'Applications</h2>
                <p className="d-inline float-end pt-4 ps-3">Avril 2021 ➜ Mai 2021</p>
                <p className="pt-4 pb-1">
                  Mise à niveau sur HTML, CSS, Bootstrap, algorithmie, pseudo-code, javascript,
                  bases de données relationnelles, php.
                </p>
                <p>
                  <em>AFPA, Amiens</em>
                </p>
              </div>
            </IntersectionObserverComponent>

            <IntersectionObserverComponent
              elementToObserve={thirdRef}
              classToAdd="opacity-100"
              classToRemove="opacity-0"
            >
              <div ref={thirdRef} className="transition-duration-800 my-5 opacity-0">
                <h2>Concepteur, Développeur d’Applications</h2>
                <p className="d-inline float-end pt-4 ps-3">Juin 2021 ➜ Février 2022</p>
                <p className="pt-4 pb-1">
                  Formation diplômante de niveau licence. Utilisation avancée de bases de données,
                  conception de BDD, méthode merise, UML, maquettage, méthodes agile et scrum,
                  programmation orientée objet, framework PHP: Symfony, applications desktop avec
                  Java, Swing et JavaFX.
                </p>
                <p>
                  <em>AFPA, Amiens</em>
                </p>
              </div>
            </IntersectionObserverComponent>
          </div>
        </div>
      </div>

      <FooterTransition />
    </>
  );
}
