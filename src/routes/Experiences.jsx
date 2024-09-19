import React, { useState, useEffect } from "react";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import DoubleSidedCard from "../components/DoubleSidedCard";
import SingleColContainer from "../components/SingleColContainer";
import ListGroup from "../components/ListGroup";
import "../css/experiences.css";

export default function Experiences() {
  const [singleColContainerHeight, setSingleColContainerHeight] = useState("initial");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    if (window.innerWidth <= 576) {
      setSingleColContainerHeight("28rem");
    } else {
      setSingleColContainerHeight("38rem");
    }
  }

  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Expériences</h1>
      </div>
      <Transition
        transitionPathOnTop={1}
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="bg-white"
        transitionFillColor="#202428"
      />
      <SingleColContainer minHeight={singleColContainerHeight}>
        <DoubleSidedCard
          otherSide={
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h2 className="card-title p-3 text-white">Extérieurstock</h2>
              <ListGroup
                listElements={[
                  "Modifications d'APIs existantes",
                  "Conception de bases de données",
                  "Dialogue avec le personnel en vue de la réalisation d'algorithmes pour",
                  "l'élaboration d'applications en lien avec leur travail",
                  "Conception et développement d'APIs REST et GraphQL avec Symfony et Api Platform",
                  "Développement front avec React, Jquery et Htmx",
                  "Modification et développement de modules pour Prestashop",
                  "Écriture de scripts en Bash et Python",
                  "Documentation des applications créées",
                  "Rédaction d'articles sur les diverses technologies rencontrées et employées avec",
                  "Onenote en guise de base de connaissances",
                ]}
                listElementsCssClasses="border-indigo-100 text-gray-800 list-elements-resize"
                listCssClasses="list-group-flush"
              />
            </div>
          }
          cardClasses="bg-orange-300 border-5 border-gray-200"
        >
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h2 className="card-title text-white">Extérieurstock</h2>
            <p className=" text-gray-700 mb-5">
              <em>
                <small>
                  Septembre 2022 <i className="bi bi-arrow-right-short"></i> Septembre 2023
                </small>
              </em>
            </p>
            <p className="card-text text-gray-800 lead fw-bold">Développement web</p>
            <i className="bi bi-hand-index thumb-icon text-gray-800">
              <span className="ripple"></span>
            </i>
          </div>
        </DoubleSidedCard>
      </SingleColContainer>
      <SingleColContainer minHeight={singleColContainerHeight}>
        <DoubleSidedCard
          otherSide={
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h2 className="card-title p-3 text-white">
                Collectivité territoriale d'Auchonvillers
              </h2>
              <ListGroup
                listElements={[
                  "Développement d'une application web pour la commune",
                  "Choix des technologies: Symfony 5, Bootstrap, JQuery, Docker",
                  "Conception de la base de données relationnelle (méthode merise)",
                  "Maquettage avec Figma",
                  "Modélisation UML",
                  "Tests unitaires",
                ]}
                listElementsCssClasses="border-indigo-100 text-gray-800 list-elements-resize"
                listCssClasses="list-group-flush"
              />
            </div>
          }
          cardClasses="bg-indigo-200 border-5 border-gray-200"
        >
          <div className="card-body">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h2 className="card-title text-white">Collectivité territoriale d'Auchonvillers</h2>
              <p className=" text-gray-700 mb-5">
                <em>
                  <small>
                    Novembre 2021 <i className="bi bi-arrow-right-short"></i> Janvier 2022
                  </small>
                </em>
              </p>
              <p className="card-text text-gray-800 lead fw-bold">Stage de développement web</p>
              <i className="bi bi-hand-index thumb-icon text-gray-800">
                <span className="ripple"></span>
              </i>
            </div>
          </div>
        </DoubleSidedCard>
      </SingleColContainer>
      <FooterTransition />
    </>
  );
}
