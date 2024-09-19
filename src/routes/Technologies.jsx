import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import CarouselCard from "../components/CarouselCard";
import Carousel from "../components/Carousel";
import ListGroup from "../components/ListGroup";
import ImageFromAssets from "../components/ImageFromAssets";

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
                        height="1.5rem"
                      />{" "}
                      CSS
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/bootstrap-fill-svgrepo-com.svg"
                        height="1.5rem"
                      />{" "}
                      Bootstrap
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/js-logo-coloured.svg" height="1.5rem" />{" "}
                      JavaScript
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/node-logo-coloured-no-text.svg"
                        height="1.5rem"
                      />{" "}
                      Node.js / npm
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/react-logo-coloured-no-text.svg"
                        height="1.5rem"
                      />{" "}
                      React.js
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/vite-svgrepo-com.svg" height="1.5rem" />{" "}
                      Vite.js
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/code-svgrepo-com.svg" height="1.5rem" /> Htmx
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/jquery-svgrepo-com.svg" height="1.5rem" />{" "}
                      JQuery
                    </>,
                  ]}
                  listElementsCssClasses="border-orange-100 text-gray-800"
                  listCssClasses="list-group-flush"
                />
              </CarouselCard>,
              <CarouselCard headerTitle="Back-end" cardClasses="bg-indigo-200 text-gray-700">
                <ListGroup
                  listElements={[
                    <>
                      <ImageFromAssets src="/vectors/php-svgrepo-com.svg" height="1.5rem" /> PHP
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/composer-svgrepo-com.svg" height="1.5rem" />{" "}
                      Composer
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/symfony-logo.svg" height="1.5rem" /> Symfony
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/twig-svgrepo-com.svg" height="1.5rem" /> Twig
                    </>,
                    <>
                      <ImageFromAssets src="/bitmaps/Logo_Api_Patform.png" height="1.5rem" /> Api
                      Platform
                    </>,
                  ]}
                  listElementsCssClasses="border-indigo-100 text-gray-800"
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
                      <ImageFromAssets src="/vectors/drawio-svgrepo-com.svg" height="1.5rem" />{" "}
                      Draw.io (UML)
                    </>,
                    <>
                      <ImageFromAssets src="/bitmaps/looping_mcd.webp" height="1.5rem" />{" "}
                      Looping-MCD (Merise)
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/trello-color-svgrepo-com.svg"
                        height="1.5rem"
                      />{" "}
                      Trello
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/figma-svgrepo-com.svg" height="1.5rem" /> Figma
                    </>,
                  ]}
                  listElementsCssClasses="border-indigo-100 text-gray-800"
                  listCssClasses="list-group-flush"
                />
              </CarouselCard>,
              <CarouselCard headerTitle="Développement" cardClasses="bg-teal-300 text-gray-700">
                <ListGroup
                  listElements={[
                    <>
                      <ImageFromAssets src="/vectors/vscode-svgrepo-com.svg" height="1.5rem" />{" "}
                      VSCode
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/docker-svgrepo-com.svg" height="1.5rem" />{" "}
                      Docker / Docker compose
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/git-svgrepo-com.svg" height="1.5rem" /> Git
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/laragon-svgrepo-com.svg" height="1.5rem" />{" "}
                      Laragon / serveur PHP (selon l'OS)
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/insomnia-svgrepo-com.svg" height="1.5rem" />{" "}
                      Insomnia
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/postman-icon-svgrepo-com.svg"
                        height="1.5rem"
                      />{" "}
                      Postman
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/obsidian-svgrepo-com.svg" height="1.5rem" />{" "}
                      Obsidian
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/ms-onenote-svgrepo-com.svg" height="1.5rem" />{" "}
                      Onenote
                    </>,
                  ]}
                  listElementsCssClasses="border-indigo-100 text-gray-800"
                  listCssClasses="list-group-flush"
                />
              </CarouselCard>,
              <CarouselCard headerTitle="Design" cardClasses="bg-cyan-300 text-gray-700">
                <ListGroup
                  listElements={[
                    <>
                      <ImageFromAssets src="/vectors/illustrator-svgrepo-com.svg" height="1.5rem" />{" "}
                      Illustrator
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/inkscape-svgrepo-com.svg" height="1.5rem" />{" "}
                      Inkscape
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/gimp-svgrepo-com.svg" height="1.5rem" /> Gimp
                    </>,
                    <>
                      <ImageFromAssets
                        src="/vectors/photoshop-color-svgrepo-com.svg"
                        height="1.5rem"
                      />{" "}
                      Photoshop
                    </>,
                    <>
                      <ImageFromAssets src="/vectors/" height="1.5rem" /> Générateurs en ligne
                    </>,
                  ]}
                  listElementsCssClasses="border-indigo-100 text-gray-800"
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
