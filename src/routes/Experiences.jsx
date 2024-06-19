import React from "react";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import DoubleSidedCard from "../components/DoubleSidedCard";
import DoubleSidedCardContainer from "../components/DoubleSidedCardContainer";

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
      <DoubleSidedCardContainer>
        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11 col-sm-11 col-xs-12">
          <DoubleSidedCard
            otherFace={
              <div className="d-flex align-items-center justify-content-center h-100">
                <ul className="card-text list-group list-group-flush border-color-white">
                  <li className="bg-orange-300 list-group-item  border-orange-100 text-gray-800">
                    Développement d'une application web pour la commune
                  </li>
                  <li className="bg-orange-300 list-group-item border-orange-100 text-gray-800">
                    Choix des technologies: Symfony 5, Bootstrap, JQuery, Docker
                  </li>
                  <li className="bg-orange-300 list-group-item border-orange-100 text-gray-800">
                    Conception de la base de données relationnelle (méthode merise)
                  </li>
                  <li className="bg-orange-300 list-group-item border-orange-100 text-gray-800">
                    Maquettage avec Figma
                  </li>
                  <li className="bg-orange-300 list-group-item border-orange-100 text-gray-800">
                    Modélisation UML
                  </li>
                  <li className="bg-orange-300 list-group-item border-orange-100 text-gray-800">
                    Tests unitaires
                  </li>
                </ul>
              </div>
            }
            cardClasses="bg-orange-300 border-5 border-orange-100"
          >
            <div className="card-body">
              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <h2 className="card-title text-white">Collectivité territoriale d'Auchonvillers</h2>
                <p className=" text-gray-700 mb-5">
                  <em>
                    <small>Novembre 2021 ꭫ Janvier 2022</small>
                  </em>
                </p>
                <p className="card-text text-gray-800 lead fw-bold">Stage de développement web</p>
              </div>
            </div>
          </DoubleSidedCard>
        </div>
      </DoubleSidedCardContainer>
      <DoubleSidedCardContainer>
        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11 col-sm-11 col-xs-12">
          <DoubleSidedCard
            otherFace={
              <div className="d-flex align-items-center justify-content-center h-100">
                <ul className="card-text list-group list-group-flush">
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Modifications d'APIs existantes
                  </li>
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Conception de bases de données
                  </li>
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Dialogue avec le personnel en vue de la réalisation d'algorithmes pour
                    l'élaboration d'applications en lien avec leur travail
                  </li>
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Conception et développement d'APIs REST et GraphQL avec Symfony et Api Platform
                  </li>
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Développement front avec React, Jquery et Htmx
                  </li>
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Modification et développement de modules pour Prestashop
                  </li>
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Écriture de scripts en Bash et Python
                  </li>
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Documentation des applications créées
                  </li>
                  <li className="bg-indigo-200 list-group-item border-indigo-100 text-gray-800">
                    Rédaction d'articles sur les diverses technologies rencontrées et employées avec
                    Onenote en guise de base de connaissances
                  </li>
                </ul>
              </div>
            }
            cardClasses="bg-indigo-200 border-5 border-indigo-100"
          >
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h2 className="card-title text-white">Extérieurstock</h2>
              <p className=" text-gray-700 mb-5">
                <em>
                  <small>Septembre 2022 ꭫ Septembre 2023</small>
                </em>
              </p>
              <p className="card-text text-gray-800 lead fw-bold">Développement web</p>
            </div>
          </DoubleSidedCard>
        </div>
      </DoubleSidedCardContainer>
      <FooterTransition />
    </>
  );
}
