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
    <div className="container-fluid bg-white p-0 m-0">
      <TransitionWrapper
        path={"/accueil"}
        isInTransit={hasClicked}
        transitionClass="anim-fade-out"
        transitionTime="500"
        // wrapperClass="container-fluid bg-primary full-page transition-opacity"
        wrapperClass="bg-white"
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
        <section className="container bg-white text-dark">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <h3 className="display-5">Une petite présentation.</h3>
              <p className="lead anim-fade-in p-4">
                <i className="bi bi-quote me-2"></i>Logique et curieux, je suis soucieux de la bonne
                exécution de mon travail et de sa qualité.
                <i className="bi bi-quote ms-2"></i>
              </p>
              <h4 className="h4">La découverte.</h4>
              <p>
                C'est avec <strong>PHP 5.3</strong> que je me suis mis au développement. J'avais
                découvert <strong>HTML et CSS</strong> précédemment au fil de ma curiosité et je
                trouvais tout ça passionnant mais il me manquait de l'interactivité.{" "}
                <strong>J'ai étudié l'algorithmie et les bases de données</strong> et après quelques
                essais de forums je me suis mis à l'<strong>orienté objet</strong>, puis aux{" "}
                <strong>design patterns</strong>.
              </p>
              <h4 className="h4 pt-4">Le développement dans mon métier d'alors.</h4>
              <p>
                <strong>C'était une passion</strong> quand j'ai changé d'orientation professionnelle
                pour devenir usineur. Je me suis aperçu que j'avais de très bonnes bases lorsque
                j'ai programmé pour les premières fois des machines à commande numérique. Le langage
                n'avait rien en commun avec PHP, Javascript ou SQL mais l'algorithmie en procédurale
                avec des boucles, des variables et des conditions, ça je connaissais.
              </p>
              <p>
                <strong>Ma passion est devenu une force</strong> dans ce cadre professionnelle.
                Quand j'ai évolué pour devenir contrôleur non-destructif, j'ai fais{" "}
                <strong>quelques incursions en C++ et en Java</strong> pour faire notamment un
                programme de calcul de balourd.
              </p>
              <h4 className="h4 pt-4">Développeur.</h4>
              <p>
                Lorsque{" "}
                <strong>j'ai eu l'opportunité faire de mon violon d'Ingres mon métier</strong>, je
                l'ai saisie: remise à niveau puis{" "}
                <strong>formation de Concepteur/Développeur d'Applications</strong>
                durant 10 mois. Une fois le titre acquis j'ai pu faire mes armes.
              </p>
              <p>
                Ma <strong>soif de connaissances et ma curiosité naturelles</strong> sont ma grande
                force. Elles m'ont permis d'en apprendre toujours plus sur diverses technologies et
                langages. Logique et curieux, je suis soucieux de la bonne exécution de mon travail
                ainsi que de sa qualité.
              </p>
            </div>
          </div>
        </section>
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
