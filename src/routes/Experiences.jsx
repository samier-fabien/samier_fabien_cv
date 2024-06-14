import React from "react";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import DoubleSidedCard from "../components/DoubleSidedCard";

export default function Experiences() {
  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Compétences</h1>
      </div>
      <Transition
        transitionPathOnTop="true"
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="bg-white"
        transitionFillColor="#202428"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <DoubleSidedCard
              otherFace={<p className="card-text">L'autre face, the dark side of the card...</p>}
            >
              <h5 className="card-title">lorem</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores architecto
                aliquam, esse similique excepturi saepe velit nam, eveniet laborum porro, veniam hic
                magnam tempora? Eos recusandae deleniti odio explicabo enim!
              </p>
            </DoubleSidedCard>
          </div>
          <div className="col">
            <DoubleSidedCard
              otherFace={<p className="card-text">L'autre face, the dark side of the card...</p>}
            >
              <h5 className="card-title">lorem</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores architecto
                aliquam, esse similique excepturi saepe velit nam, eveniet laborum porro, veniam hic
                magnam tempora? Eos recusandae deleniti odio explicabo enim!
              </p>
            </DoubleSidedCard>
          </div>
        </div>
      </div>
      <FooterTransition />
    </>
  );
}
