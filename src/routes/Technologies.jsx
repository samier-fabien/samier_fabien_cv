import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import CarouselCard from "../components/CarouselCard";
import Carousel from "../components/Carousel";
import ListGroup from "../components/ListGroup";
import ImageFromAssets from "../components/ImageFromAssets";
import "../css/technologies.css";

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
          number={13}
          containerClasses=""
          bubblesText={[
            "Vite",
            "JS",
            "React",
            "CSS",
            "HTML",
            "PHP",
            "Sf",
            "Docker",
            "Git",
            "Node",
            "htmx",
            "Twig",
            "VSCode",
          ]}
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
                <ListGroup
                  listElements={[
                    <>
                      <img
                        src="../assets/vectors/css-3-logo-coloured-no-text.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      CSS
                    </>,
                    <>
                      <img
                        src="../assets/vectors/bootstrap-fill-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Bootstrap
                    </>,
                    <>
                      <img
                        src="../assets/vectors/js-logo-coloured.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      JavaScript
                    </>,
                    <>
                      <img
                        src="../assets/vectors/node-logo-coloured-no-text.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Node.js / npm
                    </>,
                    <>
                      <img
                        src="../assets/vectors/react-logo-coloured-no-text.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      React.js
                    </>,
                    <>
                      <img
                        src="../assets/vectors/vite-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Vite.js
                    </>,
                    <>
                      <img
                        src="../assets/vectors/code-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Htmx
                    </>,
                    <>
                      <img
                        src="../assets/vectors/jquery-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      JQuery
                    </>,
                  ]}
                  listElementsCssClasses="border-orange-100 text-gray-800 carousel-card-text-resize"
                  listCssClasses="list-group-flush"
                />
              </CarouselCard>,
              <CarouselCard headerTitle="Back-end" cardClasses="bg-indigo-200 text-gray-700">
                <ListGroup
                  listElements={[
                    <>
                      <img
                        src="../assets/vectors/php-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      PHP
                    </>,
                    <>
                      <img
                        src="../assets/vectors/composer-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Composer
                    </>,
                    <>
                      <img
                        src="../assets/vectors/symfony-logo.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Symfony
                    </>,
                    <>
                      <img
                        src="../assets/vectors/twig-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Twig
                    </>,
                    <>
                      <img
                        src="../assets/bitmaps/Logo_Api_Patform.png"
                        className="carousel-icon-resize"
                      />{" "}
                      Api Platform
                    </>,
                  ]}
                  listElementsCssClasses="border-indigo-100 text-gray-800 carousel-card-text-resize"
                  listCssClasses="list-group-flush"
                />
              </CarouselCard>,
              <CarouselCard
                headerTitle="Outils de conception"
                cardClasses="bg-pink-300 text-gray-700"
              >
                <ListGroup
                  listElements={[
                    <>
                      <img
                        src="../assets/vectors/drawio-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Draw.io (UML)
                    </>,
                    <>
                      <img
                        src="../assets/bitmaps/looping_mcd.webp"
                        className="carousel-icon-resize"
                      />{" "}
                      Looping-MCD (Merise)
                    </>,
                    <>
                      <img
                        src="../assets/vectors/trello-color-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Trello
                    </>,
                    <>
                      <img
                        src="../assets/vectors/figma-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Figma
                    </>,
                  ]}
                  listElementsCssClasses="border-indigo-100 text-gray-800 carousel-card-text-resize"
                  listCssClasses="list-group-flush"
                />
              </CarouselCard>,
              <CarouselCard headerTitle="Développement" cardClasses="bg-teal-300 text-gray-700">
                <ListGroup
                  listElements={[
                    <>
                      <img
                        src="../assets/vectors/vscode-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      VSCode
                    </>,
                    <>
                      <img
                        src="../assets/vectors/docker-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Docker / Docker compose
                    </>,
                    <>
                      <img
                        src="../assets/vectors/git-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Git
                    </>,
                    <>
                      <img
                        src="../assets/vectors/laragon-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Laragon / serveur PHP (selon l'OS)
                    </>,
                    <>
                      <img
                        src="../assets/vectors/insomnia-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Insomnia
                    </>,
                    <>
                      <img
                        src="../assets/vectors/postman-icon-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Postman
                    </>,
                    <>
                      <img
                        src="../assets/vectors/obsidian-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Obsidian
                    </>,
                    <>
                      <img
                        src="../assets/vectors/ms-onenote-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Onenote
                    </>,
                  ]}
                  listElementsCssClasses="border-indigo-100 text-gray-800 carousel-card-text-resize"
                  listCssClasses="list-group-flush"
                />
              </CarouselCard>,
              <CarouselCard headerTitle="Design" cardClasses="bg-cyan-300 text-gray-700">
                <ListGroup
                  listElements={[
                    <>
                      <img
                        src="../assets/vectors/illustrator-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Illustrator
                    </>,
                    <>
                      <img
                        src="../assets/vectors/inkscape-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Inkscape
                    </>,
                    <>
                      <img
                        src="../assets/vectors/gimp-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Gimp
                    </>,
                    <>
                      <img
                        src="../assets/vectors/photoshop-color-svgrepo-com.svg"
                        className="carousel-icon-resize"
                      />{" "}
                      Photoshop
                    </>,
                    <>
                      <img src="../assets/vectors/" className="carousel-icon-resize" /> Générateurs
                      en ligne
                    </>,
                  ]}
                  listElementsCssClasses="border-indigo-100 text-gray-800 carousel-card-text-resize"
                  listCssClasses="list-group-flush"
                />
              </CarouselCard>,
            ]}
          />
        </div>
      </div>
      <FooterTransition />
    </>
  );
}
