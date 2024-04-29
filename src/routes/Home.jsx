import React, { useState, useEffect } from "react";
import TransitionWrapper from "../components/TransitionWrapper";
import RadialMenu from "../components/RadialMenu";
import MenuListElement from "../components/MenuListElement";
import "../css/menuButton.css";
import "../css/home.css";

export default function Home() {
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    document.body.classList.add("page-home");
    return () => {
      document.body.classList.remove("page-home");
    };
  }, []);

  return (
    <div className="container-fluid bg-primary p-0 m-0">
      <TransitionWrapper
        path={"/accueil"}
        isInTransit={hasClicked}
        transitionClass="anim-fade-out"
        transitionTime="500"
        // wrapperClass="container-fluid bg-primary full-page transition-opacity"
        wrapperClass="bg-primary"
      >
        <header className="container pb-5 mb-5 text-center">
          <div className="row">
            <div className="col text-dark d-block text-center">
              <RadialMenu
                elements={[
                  <MenuListElement
                    iconName="bi bi-gear"
                    iconSize="3rem"
                    tooltipText="Compétences"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-journals"
                    iconSize="3rem"
                    tooltipText="Expériences"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-code-slash"
                    iconSize="3rem"
                    tooltipText="Technologies"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-award"
                    iconSize="3rem"
                    tooltipText="Etudes"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                  <MenuListElement
                    iconName="bi bi-dribbble"
                    iconSize="3rem"
                    tooltipText="Hobbies"
                    hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
                  />,
                ]}
                firstItemAngleInRadians={Math.PI}
                lastItemAngleInRadians={0}
                menuRadius={130}
                menuClasses="menu-button bg-primary"
                listElementRadius={40}
                listElementClasses="bg-primary text-white"
                buttonRadius={60}
                buttonHyperlinkClasses="d-inline-flex justify-content-center align-items-center"
                button={
                  <i className="bi bi-list text-dark text-white" style={{ fontSize: "5rem" }}></i>
                }
                duration={300}
                delay={100}
              />
            </div>
          </div>
        </header>
        <section className="container">
          <div className="row text-center">
            <div className="col text-light">
              <h1 className="h1 mt-3 anim-left-inside">Samier Fabien</h1>
              <h2 className="h5 mb-5 anim-right-inside">Concepteur, développeur d'applications</h2>
            </div>
            <h3 className="h3 anim-fade-in">
              <i className="bi bi-quote me-3"></i>Logique et curieux, je suis soucieux de la bonne
              exécution de mon travail ainsi que de sa{" "}
              <pre className="d-inline">
                qualité.
                <i className="bi bi-quote ms-3 rotate-half"></i>
              </pre>
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
