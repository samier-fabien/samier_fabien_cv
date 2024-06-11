import React from "react";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";
import Transition from "../components/Transition";
import "../css/skills.css";
import RadialTextDisplay from "../components/radialTextDisplay/RadialTextDisplay";
import ParallaxContainer from "../components/ParallaxContainer";

export default function Skills() {
  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Compétences</h1>
      </div>
      <Transition
        transitionPathOnTop="true"
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="transition-background-1"
        transitionFillColor="#202428"
      />
      <ParallaxContainer containerClasses="bg-color-parallax-1">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h1>Lorem ipsum</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center">
          <RadialTextDisplay
            textElements={[
              "lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet",
              "consectetur",
              "adipisicing",
              "elit",
            ]}
            menuRadiusVariation={70}
            elementClasses="badge rounded-pill bg-color-badge-1 p-3"
            containerClasses="bg-light bg-image-parallax-1"
          />
        </div>
      </ParallaxContainer>
      <Transition
        transitionPathOnTop={0}
        transitionContainerClasses="bg-transparent"
        transitionFillColor="rgb(208, 208, 255)"
      />
      <ParallaxContainer containerClasses="bg-color-parallax-2">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h1>Lorem ipsum</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center">
          <RadialTextDisplay
            textElements={[
              "lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet",
              "consectetur",
              "adipisicing",
              "elit",
            ]}
            menuRadiusVariation={70}
            elementClasses="badge rounded-pill bg-color-badge-2 p-3"
            containerClasses="bg-light bg-image-parallax-2"
          />
        </div>
      </ParallaxContainer>
      <Transition
        transitionPathOnTop={0}
        transitionContainerClasses="bg-transparent"
        transitionFillColor="rgb(253, 207, 255)"
      />
      <ParallaxContainer containerClasses="bg-color-parallax-3">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h1>Lorem ipsum</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center">
          <RadialTextDisplay
            textElements={[
              "lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet",
              "consectetur",
              "adipisicing",
              "elit",
            ]}
            menuRadiusVariation={70}
            elementClasses="badge rounded-pill bg-color-badge-3 p-3"
            containerClasses="bg-light bg-image-parallax-3"
          />
        </div>
      </ParallaxContainer>
      <FooterTransition />
    </>
  );
}

// <div className="sticky-top z-n1 bg-transparent mb-5">
// <div className="parallax-container bg-color-parallax-1 sticky-top">
//   <div className="container vh-100 align-items-center">
//     <div className="row justify-content-center">
//       <div className="col col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
//         <h1>Lorem ipsum</h1>
//       </div>
//     </div>
//     <div className="row justify-content-center">
//       <div className="col col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 d-flex justify-content-center align-items-center">
//         <RadialTextDisplay
//           textElements={[
//             "lorem",
//             "ipsum",
//             "dolor",
//             "sit",
//             "amet",
//             "consectetur",
//             "adipisicing",
//             "elit",
//           ]}
//           menuRadiusVariation={70}
//           elementClasses="badge rounded-pill bg-color-badge-1 p-3"
//           containerClasses="bg-light bg-image-parallax-1"
//         />
//       </div>
//     </div>
//   </div>
// </div>
// </div>
