import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import TransitionWrapper from "../components/TransitionWrapper";
import RadialMenu from "../components/RadialMenu";
import MenuListElement from "../components/MenuListElement";
import WavyTransition from "../components/WavyTransition";
import ImageFromAssets from "./ImageFromAssets";
import "../css/home.css";

export default function Root() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
    document.body.classList.add("page-home");
    return () => {
      document.body.classList.remove("page-home");
    };
  }, []);

  return (
    <div className="container-fluid bg-white p-0 m-0">
      <TransitionWrapper
        path={"/accueil"}
        isInTransit={hasClicked}
        transitionClass="anim-fade-out"
        transitionTime="500"
        wrapperClass="container-fluid p-0 transition-opacity"
      >
        <header className="container-fluid menu-padding bg-light">
          <div className="row text-center bg-dark">
            <div className="col text-right text-light">
              <span className="anim-left-inside">Samier Fabien</span>
            </div>
            <div className="col text-left text-light">
              <span className="anim-right-inside">Concepteur, développeur d'applications</span>
            </div>
          </div>
          <div className="row menu-gradient py-4 px-0">
            <div className="col text-dark d-block text-center">
              <RadialMenu
                elements={[
                  <MenuListElement
                    iconName="bi bi-person"
                    iconSize="2rem"
                    tooltipText="À-propos"
                    tooltipTextClasses="text-light"
                    hyperlink="/a-propos"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center button"
                  />,
                  <MenuListElement
                    iconName="bi bi-code-slash"
                    iconSize="2rem"
                    tooltipText="Technologies"
                    tooltipTextClasses="text-light"
                    hyperlink="/technologies"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-gear"
                    iconSize="2rem"
                    tooltipText="Compétences"
                    tooltipTextClasses="text-light"
                    hyperlink="/competences"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center button"
                  />,
                  <MenuListElement
                    iconName="bi bi-journals"
                    iconSize="2rem"
                    tooltipText="Expériences"
                    tooltipTextClasses="text-light"
                    hyperlink="/experiences"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-award"
                    iconSize="2rem"
                    tooltipText="Etudes"
                    tooltipTextClasses="text-light"
                    hyperlink="/etudes"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                ]}
                firstItemAngleInRadians={Math.PI + 0.12}
                lastItemAngleInRadians={-0.12}
                menuRadius={170}
                menuClasses="menu-button"
                listElementRadius={40}
                listElementClasses="bg-dark text-white"
                buttonRadius={60}
                buttonHyperlinkClasses="d-inline-flex justify-content-center align-items-center bg-dark rounded-circle"
                button={<i className="bi bi-list text-white" style={{ fontSize: "3rem" }}></i>}
                duration={300}
                delay={100}
              />
            </div>
          </div>
        </header>
        <WavyTransition
          transitionHeight="155"
          backgroundRGBA="rgba(171, 116, 254, 1)"
          topRGB="rgb(86, 50, 216)"
          bottomRGB="rgb(32, 36, 40)"
        />
        <Outlet />
        <footer className="container-fluid d-flex justify-content-center bg-dark text-light p-5">
          <ImageFromAssets
            src="/vectors/html-5-logo-coloured-no-text.svg"
            alt="logo d'HTML 5"
            height="3rem"
          />
          <ImageFromAssets
            src="/vectors/css-3-logo-coloured-no-text.svg"
            alt="logo de CSS 3"
            height="3rem"
          />
          <ImageFromAssets
            src="/vectors/sass-logo-coloured-text.svg"
            alt="logo de sass"
            height="3rem"
          />
          <ImageFromAssets
            src="/vectors/js-logo-coloured.svg"
            alt="logo de JavaScript"
            height="2.8rem"
          />
          <ImageFromAssets
            src="/vectors/node-logo-coloured-no-text.svg"
            alt="logo de Node.js"
            height="3rem"
          />
          <ImageFromAssets
            src="/vectors/react-logo-coloured-no-text.svg"
            alt="logo de React"
            height="3rem"
          />
          <ImageFromAssets
            src="/vectors/vite-svgrepo-com.svg"
            alt="logo de Vite.js"
            height="3rem"
          />
        </footer>
      </TransitionWrapper>
    </div>
  );
}
