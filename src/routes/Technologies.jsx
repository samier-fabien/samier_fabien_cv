import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import CarouselCard from "../components/CarouselCard";
import Carousel from "../components/Carousel";
import ListGroupFlush from "../components/ListGroupFlush";
import ListGroupFlushItem from "../components/ListGroupFlushItem";
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
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/html-5-logo-coloured-no-text.svg"
                      height="1.5rem"
                    />{" "}
                    HTML
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/css-3-logo-coloured-no-text.svg"
                      height="1.5rem"
                    />{" "}
                    CSS
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/bootstrap-fill-svgrepo-com.svg"
                      height="1.5rem"
                    />{" "}
                    Bootstrap
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets src="/vectors/js-logo-coloured.svg" height="1.5rem" />{" "}
                    JavaScript
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/node-logo-coloured-no-text.svg"
                      height="1.5rem"
                    />{" "}
                    Node.js / npm
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/react-logo-coloured-no-text.svg"
                      height="1.5rem"
                    />{" "}
                    React.js
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets src="/vectors/vite-svgrepo-com.svg" height="1.5rem" /> Vite.js
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets src="/vectors/code-svgrepo-com.svg" height="1.5rem" /> Htmx
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-orange-100 text-gray-800">
                    <ImageFromAssets src="/vectors/jquery-svgrepo-com.svg" height="1.5rem" /> JQuery
                  </ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Back-end" cardClasses="bg-indigo-300 text-gray-700">
                <ListGroupFlush>
                  <ListGroupFlushItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/vectors/php-svgrepo-com.svg" height="1.5rem" /> PHP
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/vectors/composer-svgrepo-com.svg" height="1.5rem" />{" "}
                    Composer
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/vectors/symfony-logo.svg" height="1.5rem" /> Symfony
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/vectors/twig-svgrepo-com.svg" height="1.5rem" /> Twig
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-indigo-100 text-gray-800">
                    <ImageFromAssets src="/bitmaps/Logo_Api_Patform.png" height="1.5rem" /> Api
                    Platform
                  </ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard
                headerTitle="Outils de conception"
                cardClasses="bg-pink-300 text-gray-700"
              >
                <ListGroupFlush>
                  <ListGroupFlushItem cssClasses="border-pink-100 text-gray-800">
                    <ImageFromAssets src="/vectors/drawio-svgrepo-com.svg" height="1.5rem" />{" "}
                    Draw.io (UML)
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-pink-100 text-gray-800">
                    <ImageFromAssets src="/bitmaps/looping_mcd.webp" height="1.5rem" /> Looping-MCD
                    (Merise)
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-pink-100 text-gray-800">
                    <ImageFromAssets src="/vectors/trello-color-svgrepo-com.svg" height="1.5rem" />{" "}
                    Trello
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-pink-100 text-gray-800">
                    <ImageFromAssets src="/vectors/figma-svgrepo-com.svg" height="1.5rem" /> Figma
                  </ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Développement" cardClasses="bg-teal-300 text-gray-700">
                <ListGroupFlush>
                  <ListGroupFlushItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/vscode-svgrepo-com.svg" height="1.5rem" /> VSCode
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/docker-svgrepo-com.svg" height="1.5rem" /> Docker
                    / Docker compose
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/git-svgrepo-com.svg" height="1.5rem" /> Git
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/laragon-svgrepo-com.svg" height="1.5rem" />{" "}
                    Laragon / serveur PHP (selon l'OS)
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/insomnia-svgrepo-com.svg" height="1.5rem" />{" "}
                    Insomnia
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/postman-icon-svgrepo-com.svg" height="1.5rem" />{" "}
                    Postman
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/obsidian-svgrepo-com.svg" height="1.5rem" />{" "}
                    Obsidian
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-teal-100 text-gray-800">
                    <ImageFromAssets src="/vectors/ms-onenote-svgrepo-com.svg" height="1.5rem" />{" "}
                    Onenote
                  </ListGroupFlushItem>
                </ListGroupFlush>
              </CarouselCard>,
              <CarouselCard headerTitle="Design" cardClasses="bg-cyan-300 text-gray-700">
                <ListGroupFlush>
                  <ListGroupFlushItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets src="/vectors/illustrator-svgrepo-com.svg" height="1.5rem" />{" "}
                    Illustrator
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets src="/vectors/inkscape-svgrepo-com.svg" height="1.5rem" />{" "}
                    Inkscape
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets src="/vectors/gimp-svgrepo-com.svg" height="1.5rem" /> Gimp
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets
                      src="/vectors/photoshop-color-svgrepo-com.svg"
                      height="1.5rem"
                    />{" "}
                    Photoshop
                  </ListGroupFlushItem>
                  <ListGroupFlushItem cssClasses="border-cyan-100 text-gray-800">
                    <ImageFromAssets src="/vectors/" height="1.5rem" /> Générateurs en ligne
                  </ListGroupFlushItem>
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
