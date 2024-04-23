import React, { useRef } from "react";
import RadialMenu from "../components/RadialMenu";

export default function Test() {
  const divRef = useRef(null);

  return (
    <div className="container-fluid bg-white full-page instantOutsideAnim">
      <div className="row">
        <div className="col bg-primary text-center text-dark">
          <h1 className="h1 mt-3">Test Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-dark d-block">
          <RadialMenu
            elements={[
              <span className="text-center align-middle d-inline">Etudes</span>,
              <span className="text-center align-middle d-inline">Compétences</span>,
              <span className="text-center align-middle d-inline">Expériences</span>,
              <span className="text-center align-middle d-inline">Technologies</span>,
              <span className="text-center align-middle d-inline">Hobbies</span>,
            ]}
            menuRadius={250}
            menuAngle={90}
            menuOrientation={2}
            liRadius={40}
            buttonRadius={150}
            buttonClass="d-inline-flex justify-content-center align-items-center"
            button={<i className="bi bi-list text-dark" style={{ fontSize: "3rem" }}></i>}
          />
        </div>
      </div>
    </div>
  );
}
