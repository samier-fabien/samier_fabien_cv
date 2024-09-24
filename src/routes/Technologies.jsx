import React, { useState, useRef, useEffect } from "react";
import BubblesContainer from "../components/bubbles/BubblesContainer";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import CarouselCard from "../components/CarouselCard";
import Carousel from "../components/Carousel";
import ListGroup from "../components/ListGroup";
import "../css/technologies.css";
import iconCss3LogoColouredNoText from "./../assets/vectors/css-3-logo-coloured-no-text.svg";
import iconBootstrapFillSvgrepoCom from "./../assets/vectors/bootstrap-fill-svgrepo-com.svg";
import iconJsLogoColoured from "./../assets/vectors/js-logo-coloured.svg";
import iconNodeLogoColouredNoText from "./../assets/vectors/node-logo-coloured-no-text.svg";
import iconReactLogoColouredNoText from "./../assets/vectors/react-logo-coloured-no-text.svg";
import iconViteSvgrepoCom from "./../assets/vectors/vite-svgrepo-com.svg";
import iconCodeSvgrepoCom from "./../assets/vectors/code-svgrepo-com.svg";
import iconJquerySvgrepoCom from "./../assets/vectors/jquery-svgrepo-com.svg";
import iconPhpSvgrepoCom from "./../assets/vectors/php-svgrepo-com.svg";
import iconComposerSvgrepoCom from "./../assets/vectors/composer-svgrepo-com.svg";
import iconSymfonyLogo from "./../assets/vectors/symfony-logo.svg";
import iconTwigSvgrepoCom from "./../assets/vectors/twig-svgrepo-com.svg";
import iconLogoApiPatform from "./../assets/bitmaps/Logo_Api_Patform.png";
import iconDrawioSvgrepoCom from "./../assets/vectors/drawio-svgrepo-com.svg";
import iconLoopingMcd from "./../assets/bitmaps/looping_mcd.webp";
import iconTrelloColorSvgrepoCom from "./../assets/vectors/trello-color-svgrepo-com.svg";
import iconFigmaSvgrepoCom from "./../assets/vectors/figma-svgrepo-com.svg";
import iconVscodeSvgrepoCom from "./../assets/vectors/vscode-svgrepo-com.svg";
import iconDockerSvgrepoCom from "./../assets/vectors/docker-svgrepo-com.svg";
import iconGitSvgrepoCom from "./../assets/vectors/git-svgrepo-com.svg";
import iconLaragonSvgrepoCom from "./../assets/vectors/laragon-svgrepo-com.svg";
import iconInsomniaSvgrepoCom from "./../assets/vectors/insomnia-svgrepo-com.svg";
import iconPostmanIconSvgrepoCom from "./../assets/vectors/postman-icon-svgrepo-com.svg";
import iconObsidianSvgrepoCom from "./../assets/vectors/obsidian-svgrepo-com.svg";
import iconMsOnenoteSvgrepoCom from "./../assets/vectors/ms-onenote-svgrepo-com.svg";
import iconIllustratorSvgrepoCom from "./../assets/vectors/illustrator-svgrepo-com.svg";
import iconInkscapeSvgrepoCom from "./../assets/vectors/inkscape-svgrepo-com.svg";
import iconGimpSvgrepoCom from "./../assets/vectors/gimp-svgrepo-com.svg";
import iconPhotoshopColorSvgrepoCom from "./../assets/vectors/photoshop-color-svgrepo-com.svg";

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
                      <img src={iconCss3LogoColouredNoText} className="carousel-icon-resize" /> CSS
                    </>,
                    <>
                      <img src={iconBootstrapFillSvgrepoCom} className="carousel-icon-resize" />{" "}
                      Bootstrap
                    </>,
                    <>
                      <img src={iconJsLogoColoured} className="carousel-icon-resize" /> JavaScript
                    </>,
                    <>
                      <img src={iconNodeLogoColouredNoText} className="carousel-icon-resize" />{" "}
                      Node.js / npm
                    </>,
                    <>
                      <img src={iconReactLogoColouredNoText} className="carousel-icon-resize" />{" "}
                      React.js
                    </>,
                    <>
                      <img src={iconViteSvgrepoCom} className="carousel-icon-resize" /> Vite.js
                    </>,
                    <>
                      <img src={iconCodeSvgrepoCom} className="carousel-icon-resize" /> Htmx
                    </>,
                    <>
                      <img src={iconJquerySvgrepoCom} className="carousel-icon-resize" /> JQuery
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
                      <img src={iconPhpSvgrepoCom} className="carousel-icon-resize" /> PHP
                    </>,
                    <>
                      <img src={iconComposerSvgrepoCom} className="carousel-icon-resize" /> Composer
                    </>,
                    <>
                      <img src={iconSymfonyLogo} className="carousel-icon-resize" /> Symfony
                    </>,
                    <>
                      <img src={iconTwigSvgrepoCom} className="carousel-icon-resize" /> Twig
                    </>,
                    <>
                      <img src={iconLogoApiPatform} className="carousel-icon-resize" /> Api Platform
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
                      <img src={iconDrawioSvgrepoCom} className="carousel-icon-resize" /> Draw.io
                      (UML)
                    </>,
                    <>
                      <img src={iconLoopingMcd} className="carousel-icon-resize" /> Looping-MCD
                      (Merise)
                    </>,
                    <>
                      <img src={iconTrelloColorSvgrepoCom} className="carousel-icon-resize" />{" "}
                      Trello
                    </>,
                    <>
                      <img src={iconFigmaSvgrepoCom} className="carousel-icon-resize" /> Figma
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
                      <img src={iconVscodeSvgrepoCom} className="carousel-icon-resize" /> VSCode
                    </>,
                    <>
                      <img src={iconDockerSvgrepoCom} className="carousel-icon-resize" /> Docker /
                      Docker compose
                    </>,
                    <>
                      <img src={iconGitSvgrepoCom} className="carousel-icon-resize" /> Git
                    </>,
                    <>
                      <img src={iconLaragonSvgrepoCom} className="carousel-icon-resize" /> Laragon /
                      serveur PHP (selon l'OS)
                    </>,
                    <>
                      <img src={iconInsomniaSvgrepoCom} className="carousel-icon-resize" /> Insomnia
                    </>,
                    <>
                      <img src={iconPostmanIconSvgrepoCom} className="carousel-icon-resize" />{" "}
                      Postman
                    </>,
                    <>
                      <img src={iconObsidianSvgrepoCom} className="carousel-icon-resize" /> Obsidian
                    </>,
                    <>
                      <img src={iconMsOnenoteSvgrepoCom} className="carousel-icon-resize" /> Onenote
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
                      <img src={iconIllustratorSvgrepoCom} className="carousel-icon-resize" />{" "}
                      Illustrator
                    </>,
                    <>
                      <img src={iconInkscapeSvgrepoCom} className="carousel-icon-resize" /> Inkscape
                    </>,
                    <>
                      <img src={iconGimpSvgrepoCom} className="carousel-icon-resize" /> Gimp
                    </>,
                    <>
                      <img src={iconPhotoshopColorSvgrepoCom} className="carousel-icon-resize" />{" "}
                      Photoshop
                    </>,
                    <>Générateurs en ligne</>,
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
