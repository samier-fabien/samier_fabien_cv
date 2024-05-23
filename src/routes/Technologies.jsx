import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import TitleOne from "../components/TitleOne";
import Card from "../components/Card";

export default function Technologies() {
  const divRef = useRef(null);

  return (
    <>
      <HeaderTransition title="Technologies Employées" />
      <div className="col p-0 sticky-top z-n1 mb-5" ref={divRef}>
        <BubblesContainer
          parentRef={divRef}
          h={800}
          framerate={40}
          speed={1.1}
          minRadius={30}
          maxRadius={80}
          number={9}
          containerClasses=""
          bubblesText={["Vite", "JS", "React", "CSS", "HTML", "PHP", "Sf", "Docker", "Git"]}
          bubblesColorOne="rgba(255, 255, 255, 0.3)"
          bubblesColorTwo="rgba(240, 240, 255, 0.1)"
          bubblesColorThree="rgba(100, 100, 180, 0.2)"
          bubblesColorOneStop="0"
          bubblesColorTwoStop="0.8"
          bubblesColorThreeStop="1"
        />
      </div>
      <div className="container bg-transparent">
        <div className="row g-4">
          <Card
            headerTitle="Front-end"
            cardText={
              <p>
                HTML
                <br />
                CSS
                <br />
                JavaScript
                <br />
                Bootstrap
                <br />
                React.js
                <br />
                Npm
                <br />
              </p>
            }
            theme="light"
          />
          <Card
            headerTitle="Back-end"
            cardText={
              <p>
                <li className="list-group-item">PHP</li>
                <li className="list-group-item">Composer</li>
                <li className="list-group-item">Symfony</li>
                <li className="list-group-item">Api Platform</li>
              </p>
            }
            theme="light"
          />
          <Card
            headerTitle="Appli traditionnelle"
            cardText={
              <p>
                <li className="list-group-item">Twig</li>
                <li className="list-group-item">JQuery</li>
                <li className="list-group-item">htmx</li>
              </p>
            }
            theme="light"
          />
          <Card
            headerTitle="Outils de conception"
            cardText={
              <p>
                <li className="list-group-item">Trello</li>
                <li className="list-group-item">Figma</li>
                <li className="list-group-item">Draw.io (UML)</li>
                <li className="list-group-item">Looping-MCD (Merise)</li>
              </p>
            }
            theme="light"
          />
          <Card
            headerTitle="Développement"
            cardText={
              <p>
                <li className="list-group-item">VSCode</li>
                <li className="list-group-item">Docker</li>
                <li className="list-group-item">Docker compose</li>
                <li className="list-group-item">Git</li>
                <li className="list-group-item">Laragon / serveur PHP (selon l'OS)</li>
                <li className="list-group-item">Insomnia / Postman</li>
                <li className="list-group-item">Obsidian / Onenote</li>
              </p>
            }
            theme="light"
          />
          <Card
            headerTitle="Design"
            cardText={
              <p>
                <li className="list-group-item">Inkscape /Illustrator</li>
                <li className="list-group-item">Gimp / Photoshop</li>
                <li className="list-group-item">Générateurs en ligne</li>
              </p>
            }
            theme="light"
          />
        </div>
        <div className="row justify-content-center mt-4">
          <Card
            headerTitle="Au fait, c'est quoi cette animation ?"
            cardText={
              <p>
                C'est un algorithme que j'ai créé et qui utilise une balise canvas pour dessiner des
                sortes de "bulles" qui se collisionnent. J'avais juste une idée en tête et après
                m'être beaucoup documenté j'ai traduit les équations vers le code.
                <br />
                On appelle cela des "collisions élastiques", l'energie et la vitesse sont
                conservées. Les "bulles" ont toutes un diamètre et une vitesse de base aléatoirement
                attribués (dans une certaine plage). Cela leur confère un poids et une inertie
                différents en fonction de leur vitesse.
              </p>
            }
            columnClasses="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
            theme="light"
          />
        </div>
      </div>
      <FooterTransition />
    </>
  );
}
