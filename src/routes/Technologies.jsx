import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import CarouselCard from "../components/CarouselCard";
import Carousel from "../components/Carousel";
import ListGroupFlush from "../components/ListGroupFlush";
import ListGroupFlushItem from "../components/ListGroupFlushItem";

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
                <ListGroupFlush>
                  <ListGroupFlushItem>HTML</ListGroupFlushItem>
                  <ListGroupFlushItem>CSS</ListGroupFlushItem>
                  <ListGroupFlushItem>Bootstrap</ListGroupFlushItem>
                  <ListGroupFlushItem>JavaScript</ListGroupFlushItem>
                  <ListGroupFlushItem>Node.js / npm</ListGroupFlushItem>
                  <ListGroupFlushItem>React.js</ListGroupFlushItem>
                  <ListGroupFlushItem>Vite.js</ListGroupFlushItem>
                  <ListGroupFlushItem>htmx</ListGroupFlushItem>
                  <ListGroupFlushItem>JQuery</ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Back-end" cardClasses="bg-indigo-300 text-gray-700">
                <ListGroupFlush>
                  <ListGroupFlushItem>PHP</ListGroupFlushItem>
                  <ListGroupFlushItem>Composer</ListGroupFlushItem>
                  <ListGroupFlushItem>Symfony</ListGroupFlushItem>
                  <ListGroupFlushItem>Twig</ListGroupFlushItem>
                  <ListGroupFlushItem>Api Platform</ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard
                headerTitle="Outils de conception"
                cardClasses="bg-pink-300 text-gray-700"
              >
                <ListGroupFlush>
                  <ListGroupFlushItem>Trello</ListGroupFlushItem>
                  <ListGroupFlushItem>Figma</ListGroupFlushItem>
                  <ListGroupFlushItem>Draw.io (UML)</ListGroupFlushItem>
                  <ListGroupFlushItem>Looping-MCD (Merise)</ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Développement" cardClasses="bg-teal-300 text-gray-700">
                <ListGroupFlush>
                  <ListGroupFlushItem>VSCode</ListGroupFlushItem>
                  <ListGroupFlushItem>Docker</ListGroupFlushItem>
                  <ListGroupFlushItem>Docker compose</ListGroupFlushItem>
                  <ListGroupFlushItem>Git</ListGroupFlushItem>
                  <ListGroupFlushItem>Laragon / serveur PHP (selon l'OS)</ListGroupFlushItem>
                  <ListGroupFlushItem>Insomnia</ListGroupFlushItem>
                  <ListGroupFlushItem>Postman</ListGroupFlushItem>
                  <ListGroupFlushItem>Obsidian</ListGroupFlushItem>
                  <ListGroupFlushItem>Onenote</ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Design" cardClasses="bg-cyan-300 text-gray-700">
                <ListGroupFlush>
                  <ListGroupFlushItem>Illustrator</ListGroupFlushItem>
                  <ListGroupFlushItem>Inkscape</ListGroupFlushItem>
                  <ListGroupFlushItem>Gimp</ListGroupFlushItem>
                  <ListGroupFlushItem>Photoshop</ListGroupFlushItem>
                  <ListGroupFlushItem>Générateurs en ligne</ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
            ]}
          />
        </div>
      </div>
      <FooterTransition />
    </>
  );
}
