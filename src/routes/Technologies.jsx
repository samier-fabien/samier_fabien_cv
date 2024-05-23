import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import TitleOne from "../components/TitleOne";
import Card from "../components/Card";
import "../css/technologies.css";

export default function Technologies() {
  const divRef = useRef(null);

  return (
    <>
      <HeaderTransition title="Technologies Employées" />
      <div className="col p-0 sticky-top z-n1" ref={divRef}>
        <BubblesContainer
          parentRef={divRef}
          h={600}
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
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-10 text-dark">
            <TitleOne title="Par type d'utilisation" titleBorderColor="var(--bs-primary)" />
          </div>
        </div>
        <div className="row d-flex align-items-stretch">
          <Card
            headerTitle="Front-end"
            cardText={
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>Npm</li>
              </ul>
            }
          />
          <Card
            headerTitle="Back-end"
            cardText={
              <ul>
                <li>PHP</li>
                <li>Composer</li>
                <li>Symfony</li>
                <li>Api Platform</li>
              </ul>
            }
          />
          <Card
            headerTitle="Appli traditionnelle"
            cardText={
              <ul>
                <li>Twig</li>
                <li>JQuery</li>
                <li>htmx</li>
              </ul>
            }
          />
          <Card
            headerTitle="Outils de conception"
            cardText={
              <ul>
                <li>Trello</li>
                <li>Figma</li>
                <li>Draw.io (UML)</li>
                <li>Looping-MCD (Merise)</li>
              </ul>
            }
          />
          <Card
            headerTitle="Développement"
            cardText={
              <ul>
                <li>VSCode</li>
                <li>Docker</li>
                <li>Docker compose</li>
                <li>Git</li>
                <li>Laragon / serveur PHP</li>
                <li>Insomnia / Postman</li>
                <li>Obsidian / Onenote</li>
              </ul>
            }
          />
          <Card
            headerTitle="Design"
            cardText={
              <ul>
                <li>Inkscape /Illustrator</li>
                <li>Gimp / Photoshop</li>
                <li>Générateurs en ligne</li>
              </ul>
            }
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-10 text-dark">
            <TitleOne title="Au fait, c'est quoi cette animation ?" />
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
