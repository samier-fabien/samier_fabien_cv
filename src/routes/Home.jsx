import React, { useState, useEffect } from "react";
import TransitionWrapper from "../components/TransitionWrapper";
import RadialMenu from "../components/RadialMenu";
import MenuListElement from "../components/MenuListElement";
import WavyTransition from "../components/WavyTransition";
import "../css/menu.css";

export default function Home() {
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    document.body.classList.add("page-home");
    return () => {
      document.body.classList.remove("page-home");
    };
  }, []);

  return (
    <div className="container-fluid bg-dark p-0 m-0">
      <TransitionWrapper
        path={"/accueil"}
        isInTransit={hasClicked}
        transitionClass="anim-fade-out"
        transitionTime="500"
        // wrapperClass="container-fluid bg-primary full-page transition-opacity"
        wrapperClass="bg-dark"
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
                    iconName="bi bi-gear"
                    iconSize="2rem"
                    tooltipText="Compétences"
                    tooltipTextClasses="text-light"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center button"
                  />,
                  <MenuListElement
                    iconName="bi bi-journals"
                    iconSize="2rem"
                    tooltipText="Expériences"
                    tooltipTextClasses="text-light"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-code-slash"
                    iconSize="2rem"
                    tooltipText="Technologies"
                    tooltipTextClasses="text-light"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-award"
                    iconSize="2rem"
                    tooltipText="Etudes"
                    tooltipTextClasses="text-light"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-dribbble"
                    iconSize="2rem"
                    tooltipText="Hobbies"
                    tooltipTextClasses="text-light"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                ]}
                firstItemAngleInRadians={Math.PI}
                lastItemAngleInRadians={0}
                menuRadius={130}
                menuClasses="menu-button bg-transparent"
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
          backgroundRGBA="rgba(171, 116, 254, 1)"
          topRGB="rgb(86, 50, 216)"
          bottomRGB="rgb(32, 36, 40)"
        />
        <section className="container text-light">
          <div className="row text-center">
            <h3 className="h3 anim-fade-in">
              <i className="bi bi-quote me-3"></i>Logique et curieux, je suis soucieux de la bonne
              exécution de mon travail ainsi que de sa qualité.
              <i className="bi bi-quote ms-3 rotate-half"></i>
            </h3>
          </div>
          <h4 className="h4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nesciunt inventore
            voluptates! Voluptates, perspiciatis eveniet expedita fuga possimus culpa dolorum
            assumenda error fugiat consequuntur nobis eaque voluptas veniam iusto soluta? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Similique nesciunt ratione impedit
            enim quis repellendus voluptatum nulla accusantium! Vero, blanditiis distinctio! Commodi
            dolore doloremque ipsum molestiae aliquid dolor ducimus expedita. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Reprehenderit consectetur tenetur dolores delectus
            dolor, vero laboriosam repellendus porro, cumque beatae eum at laborum eos cum alias
            quos a explicabo maxime?
          </h4>
        </section>
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
