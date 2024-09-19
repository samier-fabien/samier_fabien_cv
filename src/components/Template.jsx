import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import TransitionWrapper from "../components/TransitionWrapper";
import WavyTransition from "../components/WavyTransition";
import ImageFromAssets from "./ImageFromAssets";
import Menu from "./Menu";
import "../css/template.css";

export default function Root() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [cda, setCda] = useState("");

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
    document.body.classList.add("page-home");

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("page-home");
    };
  }, []);

  function handleResize() {
    window.innerWidth >= 600
      ? setCda(
          <div className="col text-light d-flex align-items-center justify-content-center">
            <div className="text-center">
              <span className="text-indigo-300">C</span>onception
              <br />
              <span className="text-pink-300">D</span>éveloppement
            </div>
            <div className="fs-3 pb-1 px-2 text-blue-300">{"}"}</div>
            <div className="">
              <span className="text-orange-300">A</span>pplication
            </div>
          </div>
        )
      : setCda(null);
  }

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
          <div className="row d-flex d-flex align-items-center bg-dark shadow">
            <div className="col text-start text-light">
              <Link className={"handwriting fs-4 text-white text-decoration-none"} to={"/"}>
                Samier Fabien
              </Link>
            </div>
            {cda ? cda : ""}
            <div className="col text-end text-white">
              <Link to="https://www.linkedin.com/in/fabien-samier-0140a021b/">
                <i className="bi bi-linkedin fs-2 text-blue-300"></i>
              </Link>
            </div>
          </div>
          <div className="row menu-gradient py-4 px-0">
            <div className="col text-dark d-block text-center">
              <Menu />
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
            imgClasses="footer-icon"
          />
          <ImageFromAssets
            src="/vectors/css-3-logo-coloured-no-text.svg"
            alt="logo de CSS 3"
            imgClasses="footer-icon"
          />
          <ImageFromAssets
            src="/vectors/sass-logo-coloured-text.svg"
            alt="logo de sass"
            imgClasses="footer-icon"
          />
          <ImageFromAssets
            src="/vectors/js-logo-coloured.svg"
            alt="logo de JavaScript"
            imgClasses="footer-icon"
          />
          <ImageFromAssets
            src="/vectors/node-logo-coloured-no-text.svg"
            alt="logo de Node.js"
            imgClasses="footer-icon"
          />
          <ImageFromAssets
            src="/vectors/react-logo-coloured-no-text.svg"
            alt="logo de React"
            imgClasses="footer-icon"
          />
          <ImageFromAssets
            src="/vectors/vite-svgrepo-com.svg"
            alt="logo de Vite.js"
            imgClasses="footer-icon"
          />
        </footer>
      </TransitionWrapper>
    </div>
  );
}
