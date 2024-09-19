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
                      <ImageFromAssets
                        src="/vectors/css-3-logo-coloured-no-text.svg"
                        imgClasses="carousel-icon-resize"
                      />{" "}
                      CSS
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/bootstrap-fill-svgrepo-com.svg"
                        imgClasses="carousel-icon-resize"
                      />{" "}
                      Bootstrap
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/js-logo-coloured.svg" imgClasses="carousel-icon-resize" />{" "}
                      JavaScript
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/node-logo-coloured-no-text.svg"
                        imgClasses="carousel-icon-resize"
                      />{" "}
                      Node.js / npm
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/react-logo-coloured-no-text.svg"
                        imgClasses="carousel-icon-resize"
                      />{" "}
                      React.js
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/vite-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Vite.js
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/code-svgrepo-com.svg" imgClasses="carousel-icon-resize" /> Htmx
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/jquery-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
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
                      <ImageFromAssets src="/vectors/php-svgrepo-com.svg" imgClasses="carousel-icon-resize" /> PHP
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/composer-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Composer
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/symfony-logo.svg" imgClasses="carousel-icon-resize" /> Symfony
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/twig-svgrepo-com.svg" imgClasses="carousel-icon-resize" /> Twig
                    </>,
                    <>
                      <ImageFromAssets src="/bitmaps/Logo_Api_Patform.png" imgClasses="carousel-icon-resize" /> Api
                      Platform
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
                      <ImageFromAssets src="/vectors/drawio-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Draw.io (UML)
                    </>,
                    <>
                      <ImageFromAssets src="/bitmaps/looping_mcd.webp" imgClasses="carousel-icon-resize" />{" "}
                      Looping-MCD (Merise)
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/trello-color-svgrepo-com.svg"
                        imgClasses="carousel-icon-resize"
                      />{" "}
                      Trello
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/figma-svgrepo-com.svg" imgClasses="carousel-icon-resize" /> Figma
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
                      <ImageFromAssets src="/vectors/vscode-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      VSCode
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/docker-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Docker / Docker compose
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/git-svgrepo-com.svg" imgClasses="carousel-icon-resize" /> Git
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/laragon-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Laragon / serveur PHP (selon l'OS)
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/insomnia-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Insomnia
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/postman-icon-svgrepo-com.svg"
                        imgClasses="carousel-icon-resize"
                      />{" "}
                      Postman
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/obsidian-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Obsidian
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/ms-onenote-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
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
                      <ImageFromAssets src="/vectors/illustrator-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Illustrator
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/inkscape-svgrepo-com.svg" imgClasses="carousel-icon-resize" />{" "}
                      Inkscape
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/gimp-svgrepo-com.svg" imgClasses="carousel-icon-resize" /> Gimp
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/photoshop-color-svgrepo-com.svg"
                        imgClasses="carousel-icon-resize"
                      />{" "}
                      Photoshop
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/" imgClasses="carousel-icon-resize" /> Générateurs en ligne
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
