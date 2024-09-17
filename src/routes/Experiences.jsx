import React from "react";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import DoubleSidedCard from "../components/DoubleSidedCard";
import SingleColContainer from "../components/SingleColContainer";
import ListGroupFlush from "../components/ListGroupFlush";
import ListGroupItem from "../components/ListGroupItem";

export default function Experiences() {
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
      <SingleColContainer minHeight="38rem">
        <DoubleSidedCard
          otherSide={
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h2 className="card-title p-3 text-white">Extérieurstock</h2>
              <ListGroupFlush>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Modifications d'APIs existantes
                </ListGroupItem>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Conception de bases de données
                </ListGroupItem>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Dialogue avec le personnel en vue de la réalisation d'algorithmes pour
                  l'élaboration d'applications en lien avec leur travail
                </ListGroupItem>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Conception et développement d'APIs REST et GraphQL avec Symfony et Api Platform
                </ListGroupItem>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Développement front avec React, Jquery et Htmx
                </ListGroupItem>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Modification et développement de modules pour Prestashop
                </ListGroupItem>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Écriture de scripts en Bash et Python
                </ListGroupItem>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Documentation des applications créées
                </ListGroupItem>
                <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                  Rédaction d'articles sur les diverses technologies rencontrées et employées avec
                  Onenote en guise de base de connaissances
                </ListGroupItem>
              </ListGroupFlush>
            </div>
          }
          cardClasses="bg-orange-300 border-5 border-gray-200"
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
      </SingleColContainer>
      <SingleColContainer minHeight="38rem">
        <DoubleSidedCard
          otherSide={
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h2 className="card-title p-3 text-white">
                Collectivité territoriale d'Auchonvillers
              </h2>
              <ListGroupFlush>
                <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                  Développement d'une application web pour la commune
                </ListGroupItem>
                <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                  Choix des technologies: Symfony 5, Bootstrap, JQuery, Docker
                </ListGroupItem>
                <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                  Conception de la base de données relationnelle (méthode merise)
                </ListGroupItem>
                <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                  Maquettage avec Figma
                </ListGroupItem>
                <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                  Modélisation UML
                </ListGroupItem>
                <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                  Tests unitaires
                </ListGroupItem>
              </ListGroupFlush>
            </div>
          }
          cardClasses="bg-indigo-200 border-5 border-gray-200"
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
      </SingleColContainer>
      <FooterTransition />
    </>
  );
}
