import React, { useRef } from "react";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import SingleColContainer from "../components/SingleColContainer";
import StudiesCard from "../components/StudiesCard";

export default function Studies() {
  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Études et formations</h1>
      </div>
      <Transition
        transitionPathOnTop={1}
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="bg-white"
        transitionFillColor="#202428"
      />

      <SingleColContainer>
        <StudiesCard
          title="Concepteur, Développeur d’Applications"
          period={
            <>
              Juin 2021 <i className="bi bi-arrow-right-short"></i> Février 2022
            </>
          }
          place="AFPA, Amiens"
          cssClasses="bg-orange-300"
          classToAdd="opacity-100"
          classToRemove="opacity-0"
        >
          Formation diplômante de niveau licence. Utilisation avancée de bases de données,
          conception de BDD, méthode merise, UML, maquettage, méthodes agile et scrum, programmation
          orientée objet, framework PHP: Symfony, applications desktop avec Java, Swing et JavaFX.
        </StudiesCard>

        <StudiesCard
          title="Techniques de Base du Développement d'Applications"
          period={
            <>
              Avril 2021 <i className="bi bi-arrow-right-short"></i> Mai 2021
            </>
          }
          place="AFPA, Amiens"
          cssClasses="bg-indigo-200"
          classToAdd="opacity-100"
          classToRemove="opacity-0"
        >
          Mise à niveau sur HTML, CSS, Bootstrap, algorithmie, pseudo-code, javascript, bases de
          données relationnelles, php.
        </StudiesCard>

        <StudiesCard
          title="Baccalauréat"
          period="Juin 2005"
          place="Lycée Baudimont, Arras"
          cssClasses="bg-pink-300"
          classToAdd="opacity-100"
          classToRemove="opacity-0"
        >
          Économique et social. Option mathématiques.
        </StudiesCard>
      </SingleColContainer>

      <FooterTransition />
    </>
  );
}
