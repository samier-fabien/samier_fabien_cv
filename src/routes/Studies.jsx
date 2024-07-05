import React, { useRef } from "react";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import IntersectionObserverComponent from "../components/IntersectionObserverComponent";
import SingleColContainer from "../components/SingleColContainer";
import StudiesCard from "../components/StudiesCard";

export default function Studies() {
  // const firstRef = useRef(null);
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

      <SingleColContainer>
        <IntersectionObserverComponent classToAdd="opacity-100" classToRemove="opacity-0">
          <StudiesCard title="Baccalauréat" period="Juin 2005" place="Lycée Baudimont, Arras">
            Économique et social. Option mathématiques.
          </StudiesCard>
        </IntersectionObserverComponent>

        <IntersectionObserverComponent classToAdd="opacity-100" classToRemove="opacity-0">
          <StudiesCard
            title="Techniques de Base du Développement d'Applications"
            period="Avril 2021 ➜ Mai 2021"
            place="AFPA, Amiens"
          >
            Mise à niveau sur HTML, CSS, Bootstrap, algorithmie, pseudo-code, javascript, bases de
            données relationnelles, php.
          </StudiesCard>
        </IntersectionObserverComponent>

        <IntersectionObserverComponent classToAdd="opacity-100" classToRemove="opacity-0">
          <StudiesCard
            title="Concepteur, Développeur d’Applications"
            period="Juin 2021 ➜ Février 2022"
            place="AFPA, Amiens"
          >
            Formation diplômante de niveau licence. Utilisation avancée de bases de données,
            conception de BDD, méthode merise, UML, maquettage, méthodes agile et scrum,
            programmation orientée objet, framework PHP: Symfony, applications desktop avec Java,
            Swing et JavaFX.
          </StudiesCard>
        </IntersectionObserverComponent>
      </SingleColContainer>

      <FooterTransition />
    </>
  );
}
