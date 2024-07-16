import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import CarouselCard from "../components/CarouselCard";
import Carousel from "../components/Carousel";
import ListGroupFlush from "../components/ListGroupFlush";
import ListGroupItem from "../components/ListGroupItem";
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
                <ListGroupFlush>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/html-5-logo-coloured-no-text.svg"
                      height="1.5rem"
                    />{" "}
                    HTML
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/css-3-logo-coloured-no-text.svg"
                      height="1.5rem"
                    />{" "}
                    CSS
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/bootstrap-fill-svgrepo-com.svg"
                      height="1.5rem"
                    />{" "}
                    Bootstrap
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets src="/vectors/js-logo-coloured.svg" height="1.5rem" />{" "}
                    JavaScript
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/node-logo-coloured-no-text.svg"
                      height="1.5rem"
                    />{" "}
                    Node.js / npm
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/react-logo-coloured-no-text.svg"
                      height="1.5rem"
                    />{" "}
                    React.js
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets src="/vectors/vite-svgrepo-com.svg" height="1.5rem" /> Vite.js
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets src="/vectors/code-svgrepo-com.svg" height="1.5rem" /> Htmx
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets src="/vectors/jquery-svgrepo-com.svg" height="1.5rem" /> JQuery
                  </ListGroupItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Back-end" cardClasses="bg-indigo-200 text-gray-700">
                <ListGroupFlush>
                  <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/vectors/php-svgrepo-com.svg" height="1.5rem" /> PHP
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/vectors/composer-svgrepo-com.svg" height="1.5rem" />{" "}
                    Composer
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/vectors/symfony-logo.svg" height="1.5rem" /> Symfony
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/vectors/twig-svgrepo-com.svg" height="1.5rem" /> Twig
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/bitmaps/Logo_Api_Patform.png" height="1.5rem" /> Api
                    Platform
                  </ListGroupItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard
                headerTitle="Outils de conception"
                cardClasses="bg-pink-300 text-gray-700"
              >
                <ListGroupFlush>
                  <ListGroupItem cssClasses="border-pink-100 text-gray-800">
                    <ImageFromAssets src="/vectors/drawio-svgrepo-com.svg" height="1.5rem" />{" "}
                    Draw.io (UML)
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-pink-100 text-gray-800">
                    <ImageFromAssets src="/bitmaps/looping_mcd.webp" height="1.5rem" /> Looping-MCD
                    (Merise)
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-pink-100 text-gray-800">
                    <ImageFromAssets src="/vectors/trello-color-svgrepo-com.svg" height="1.5rem" />{" "}
                    Trello
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-pink-100 text-gray-800">
                    <ImageFromAssets src="/vectors/figma-svgrepo-com.svg" height="1.5rem" /> Figma
                  </ListGroupItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Développement" cardClasses="bg-teal-300 text-gray-700">
                <ListGroupFlush>
                  <ListGroupItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/vscode-svgrepo-com.svg" height="1.5rem" /> VSCode
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/docker-svgrepo-com.svg" height="1.5rem" /> Docker
                    / Docker compose
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/git-svgrepo-com.svg" height="1.5rem" /> Git
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/laragon-svgrepo-com.svg" height="1.5rem" />{" "}
                    Laragon / serveur PHP (selon l'OS)
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/insomnia-svgrepo-com.svg" height="1.5rem" />{" "}
                    Insomnia
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/postman-icon-svgrepo-com.svg" height="1.5rem" />{" "}
                    Postman
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/obsidian-svgrepo-com.svg" height="1.5rem" />{" "}
                    Obsidian
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/ms-onenote-svgrepo-com.svg" height="1.5rem" />{" "}
                    Onenote
                  </ListGroupItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Design" cardClasses="bg-cyan-300 text-gray-700">
                <ListGroupFlush>
                  <ListGroupItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets src="/vectors/illustrator-svgrepo-com.svg" height="1.5rem" />{" "}
                    Illustrator
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets src="/vectors/inkscape-svgrepo-com.svg" height="1.5rem" />{" "}
                    Inkscape
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets src="/vectors/gimp-svgrepo-com.svg" height="1.5rem" /> Gimp
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/photoshop-color-svgrepo-com.svg"
                      height="1.5rem"
                    />{" "}
                    Photoshop
                  </ListGroupItem>
                  <ListGroupItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets src="/vectors/" height="1.5rem" /> Générateurs en ligne
                  </ListGroupItem>
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
