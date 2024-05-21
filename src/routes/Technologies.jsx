import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";

export default function Technologies() {
  const divRef = useRef(null);

  return (
    <>
      <HeaderTransition title="Technologies Employées" />
      <div className="container bg-white">
        <div className="row">
          <div className="col p-0" ref={divRef}>
            <BubblesContainer
              parentRef={divRef}
              h={600}
              framerate={40}
              speed={1.1}
              minRadius={30}
              maxRadius={80}
              number={9}
              bubblesText={["Vite", "JS", "React", "CSS", "HTML", "PHP", "Sf", "Docker", "Git"]}
              bubblesColorOne="rgba(255, 255, 255, 0.3)"
              bubblesColorTwo="rgba(240, 240, 255, 0.1)"
              bubblesColorThree="rgba(100, 100, 180, 0.2)"
              bubblesColorOneStop="0"
              bubblesColorTwoStop="0.8"
              bubblesColorThreeStop="1"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-10 text-dark">
            <h2 className="display-6 pt-5">
              <span className="px-4 border-start border-5 border-primary">Front-end.</span>
            </h2>
            <p>
              Je travaille le plus couramment avec
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>Npm</li>
              </ul>
              Dans le cadre d'une application web "traditionnelle" dans laquelle le front et le back
              sont gérés de manière monolithique, j'utilise
              <ul>
                <li>Twig</li>
                <li>JQuery</li>
                <li>htmx</li>
              </ul>
            </p>
            <h2 className="display-6 pt-5">
              <span className="px-4 border-start border-5 border-primary">Back-end.</span>
            </h2>
            <p>
              Pour le back-end, j'utilise
              <ul>
                <li>PHP</li>
                <li>Composer</li>
                <li>Symfony</li>
                <li>Api Platform</li>
              </ul>
            </p>
            <h2 className="display-6 pt-5">
              <span className="px-4 border-start border-5 border-primary">Outils.</span>
            </h2>
            <p>
              C'est avec Trello que je m'organise. Dans la conception je m'appuie sur Draw.io pour
              l'UML, Looping-mcd pour la base de données (merise) et Figma pour le maquettage.
              <br />
              Je me sers de VSCode en guise d'éditeur de code. Avec l'aide de Docker et Docker
              Compose je conteneurise mes applications qui sont versionnées avec Git.
              <br />
              Quand il m'arrive de tester des parties de code simples, j'utilise en fonction des cas
              l'extension LiveServer de VSCode, Laragon sur Windows ou un serveur web interne PHP
              sur Linux. Pour tester mes API Rest et GraphQL, j'utilise Insomnia ou Postman.
              <br />
              Mes éléments graphiques sont principalement produits avec Inkscape, et Gimp (qui ont
              remplacé Photoshop et Illustrator) ainsi que de générateurs en ligne.
              <br />
              Enfin, en guise de base de connaissances, j'ai utilisé OneNote dans un contexte
              professionnel. J'utilise pour ma part Obsidian.
            </p>
            <h2 className="display-6 pt-5">
              <span className="px-4 border-start border-5 border-primary">Brèves incursions.</span>
            </h2>
            <p>
              Python me permet de gérer certaines tâches répétitives. C++ et Qt pour un programme de
              calcul de balourd notamment. Java que j'affectionne particulièrement.
            </p>
            <h2 className="display-6 pt-5">
              <span className="px-4 border-start border-5 border-primary">
                Au fait, c'est quoi cette animation ?
              </span>
            </h2>
            <p>
              C'est un algorithme que j'ai créé et qui utilise une balise canvas pour dessiner des
              sortes de "bulles" qui se collisionnent. J'avais juste une idée en tête et après
              m'être beaucoup documenté j'ai traduit les équations vers le code.
              <br />
              On appelle cela des "collisions élastiques", l'energie et la vitesse sont conservées.
              Les "bulles" ont toutes un diamètre et une vitesse de base aléatoirement attribués
              (dans une certaine plage). Cela leur confère un poids et une inertie différents en
              fonction de leur vitesse.
            </p>
          </div>
        </div>
      </div>
      <FooterTransition />
    </>
  );
}
