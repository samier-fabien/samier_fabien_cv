import React from "react";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import DoubleSidedCard from "../components/DoubleSidedCard";

export default function Experiences() {
  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Expériences</h1>
      </div>
      <Transition
        transitionPathOnTop="true"
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="bg-white"
        transitionFillColor="#202428"
      />
      <div className="container">
        <div className="row" style={{ height: "35rem" }}>
          <div className="col">
            <DoubleSidedCard
              otherFace={
                <div class="d-flex align-items-center h-100">
                  <ul className="card-text">
                    <li>Développement d'une application web pour la commune</li>
                    <li>Choix des technologies: Symfony 5, Bootstrap, JQuery, Docker</li>
                    <li>Conception de la base de données relationnelle (méthode merise)</li>
                    <li>Maquettage avec Figma</li>
                    <li>Modélisation UML</li>
                    <li>Tests unitaires</li>
                  </ul>
                </div>
              }
            >
              <div class="d-flex flex-column align-items-center justify-content-center h-100">
                <h5 className="card-title">Collectivité territoriale d'Auchonvillers</h5>
                <p className="card-text">Stage de développement web</p>
              </div>
            </DoubleSidedCard>
          </div>
          <div className="col">
            <DoubleSidedCard
              otherFace={
                <div class="d-flex align-items-center h-100">
                  <ul className="card-text">
                    <li>Modifications d'APIs existantes</li>
                    <li>Conception de bases de données</li>
                    <li>
                      Dialogue avec le personnel en vue de la réalisation d'algorithmes pour
                      l'élaboration d'applications en lien avec leur travail
                    </li>
                    <li>
                      Conception et développement d'APIs REST et GraphQL avec Symfony et Api
                      Platform
                    </li>
                    <li>Développement front avec React, Jquery et Htmx</li>
                    <li>Modification et développement de modules pour Prestashop</li>
                    <li>Écriture de scripts en Bash et Python</li>
                    <li>Documentation des applications créées</li>
                    <li>
                      Rédaction d'articles sur les diverses technologies rencontrées et employées
                      avec Onenote en guise de base de connaissances
                    </li>
                  </ul>
                </div>
              }
            >
              <div class="d-flex flex-column align-items-center justify-content-center h-100">
                <h5 className="card-title">Extérieurstock</h5>
                <p className="card-text">Développement web</p>
              </div>
            </DoubleSidedCard>
          </div>
        </div>
      </div>
      <FooterTransition />
    </>
  );
}
