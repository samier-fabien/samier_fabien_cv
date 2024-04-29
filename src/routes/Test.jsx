import React from "react";
import RadialMenu from "../components/RadialMenu";
import "../css/menuButton.css";
import MenuListElement from "../components/MenuListElement";

export default function Test() {
  return (
    <div className="container-fluid bg-white full-page instantOutsideAnim m-0 p-0">
      <div className="row">
        <div className="col bg-primary text-center text-dark">
          <h1 className="h1 mt-3">Test Page</h1>
        </div>
      </div>
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
    </div>
  );
}
