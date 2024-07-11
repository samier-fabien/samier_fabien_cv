import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import CarouselCard from "../components/CarouselCard";
import Carousel from "../components/Carousel";

export default function Technologies() {
  const divRef = useRef(null);

  return (
    <>
      <HeaderTransition title="Technologies Employées" />
      <div className="col p-0 sticky-top z-n1 mb-5" ref={divRef}>
        <BubblesContainer
          parentRef={divRef}
          h={window.innerHeight}
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
      <div className="container-fluid bg-transparent vh-100">
        <div className="row">
          <Carousel
            slides={[
              <CarouselCard headerTitle="Front-end" cardClasses="bg-orange-300 text-gray-700">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">HTML</li>
                  <li className="list-group-item">CSS</li>
                  <li className="list-group-item">Bootstrap</li>
                  <li className="list-group-item">JavaScript</li>
                  <li className="list-group-item">Node.js / npm</li>
                  <li className="list-group-item">React.js</li>
                  <li className="list-group-item">Vite.js</li>
                  <li className="list-group-item">htmx</li>
                  <li className="list-group-item">JQuery</li>
                </ul>
              </CarouselCard>,
              <CarouselCard headerTitle="Back-end" cardClasses="bg-indigo-300 text-gray-700">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">PHP</li>
                  <li className="list-group-item">Composer</li>
                  <li className="list-group-item">Symfony</li>
                  <li className="list-group-item">Twig</li>
                  <li className="list-group-item">Api Platform</li>
                </ul>
              </CarouselCard>,
              <CarouselCard
                headerTitle="Outils de conception"
                cardClasses="bg-pink-300 text-gray-700"
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Trello</li>
                  <li className="list-group-item">Figma</li>
                  <li className="list-group-item">Draw.io (UML)</li>
                  <li className="list-group-item">Looping-MCD (Merise)</li>
                </ul>
              </CarouselCard>,
              <CarouselCard headerTitle="Développement" cardClasses="bg-teal-300 text-gray-700">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">VSCode</li>
                  <li className="list-group-item">Docker</li>
                  <li className="list-group-item">Docker compose</li>
                  <li className="list-group-item">Git</li>
                  <li className="list-group-item">Laragon / serveur PHP (selon l'OS)</li>
                  <li className="list-group-item">Insomnia</li>
                  <li className="list-group-item">Postman</li>
                  <li className="list-group-item">Obsidian</li>
                  <li className="list-group-item">Onenote</li>
                </ul>
              </CarouselCard>,
              <CarouselCard headerTitle="Design" cardClasses="bg-cyan-300 text-gray-700">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Illustrator</li>
                  <li className="list-group-item">Inkscape</li>
                  <li className="list-group-item">Gimp</li>
                  <li className="list-group-item">Photoshop</li>
                  <li className="list-group-item">Générateurs en ligne</li>
                </ul>
              </CarouselCard>,
            ]}
          />
        </div>
      </div>
      <FooterTransition />
    </>
  );
}
