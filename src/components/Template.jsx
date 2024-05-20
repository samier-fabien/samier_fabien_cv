import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import TransitionWrapper from "../components/TransitionWrapper";
import RadialMenu from "../components/RadialMenu";
import MenuListElement from "../components/MenuListElement";
import WavyTransition from "../components/WavyTransition";
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
                    iconName="bi bi-house"
                    iconSize="2rem"
                    tooltipText="Accueil"
                    tooltipTextClasses="text-light"
                    hyperlink="/accueil"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center button"
                  />,
                  <MenuListElement
                    iconName="bi bi-gear"
                    iconSize="2rem"
                    tooltipText="Compétences"
                    tooltipTextClasses="text-light"
                    hyperlink="/test"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center button"
                  />,
                  <MenuListElement
                    iconName="bi bi-journals"
                    iconSize="2rem"
                    tooltipText="Expériences"
                    tooltipTextClasses="text-light"
                    hyperlink="/test"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-code-slash"
                    iconSize="2rem"
                    tooltipText="Technologies"
                    tooltipTextClasses="text-light"
                    hyperlink="/test"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-award"
                    iconSize="2rem"
                    tooltipText="Etudes"
                    tooltipTextClasses="text-light"
                    hyperlink="/test"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-dribbble"
                    iconSize="2rem"
                    tooltipText="Hobbies"
                    tooltipTextClasses="text-light"
                    hyperlink="/test"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                ]}
                firstItemAngleInRadians={Math.PI + 0.1}
                lastItemAngleInRadians={-0.1}
                menuRadius={155}
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
        <div className="bg-dark">
          <div style={{ height: "100px", overflow: "hidden" }}>
            <svg
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M0.00,50.00 C100.00,100.00 349.20,-50.00 500.00,50.00 L500.00,100.00 L0.00,100.00 Z"
                style={{ stroke: "none", fill: "#ffffff" }}
              ></path>
            </svg>
          </div>
        </div>
        <Outlet />
        <div style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,50.00 C120.20,151.48 269.75,151.48 500.00,50.00 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#202428" }}
            ></path>
          </svg>
        </div>
        <footer className="container-fluid d-flex justify-content-center bg-dark text-light p-5">
          <img
            src="../../src/assets/vectors/html-5-logo-coloured-no-text.svg"
            alt="logo d'html 5"
            style={{ height: "3rem" }}
          />
          <img
            src="../../src/assets/vectors/css-3-logo-coloured-no-text.svg"
            alt="logo de css 3"
            style={{ height: "3rem" }}
          />
          <img
            src="../../src/assets/vectors/sass-logo-coloured-text.svg"
            alt="logo de sass"
            style={{ height: "3rem" }}
          />
          <img
            src="../../src/assets/vectors/js-logo-coloured.svg"
            alt="logo de css 3"
            style={{ height: "2.6rem", padding: "0.1rem" }}
          />
          <img
            src="../../src/assets/vectors/node-logo-coloured-no-text.svg"
            alt="logo de css 3"
            style={{ height: "3rem", padding: "0.1rem" }}
          />
          <img
            src="../../src/assets/vectors/react-logo-coloured-no-text.svg"
            alt="logo de css 3"
            style={{ height: "3rem" }}
          />
          <img src="../../src/assets/vectors/" alt="" style={{ height: "3rem" }} />
        </footer>
      </TransitionWrapper>
    </div>
  );
}
