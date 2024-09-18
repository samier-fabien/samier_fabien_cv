import React, { useEffect, useState } from "react";
import RadialMenu from "../components/RadialMenu";
import MenuListElement from "../components/MenuListElement";
import OffcanvasMenu from "./OffcanvasMenu";
import OffcanvasItem from "./OffcanvasItem";

/**
 * It displays RadialMenu if viewport >= 992px, otherwise it displays OffcanvasMenu
 */
export default function Menu() {
  // Contains the menu that will be displayed RadialMenu or OffcanvasMenu
  const [content, setContent] = useState(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Chooses which menu to display depending on the size of the viewport and puts it in the useState `content`
   * @returns {any}
   */
  function handleResize() {
    if (window.innerWidth >= 992) {
      setContent(
        <RadialMenu
          elements={[
            <MenuListElement
              iconName="bi bi-person"
              iconSize="2rem"
              tooltipText="À-propos"
              tooltipClasses="text-light"
              uri="/a-propos"
              hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center button"
            />,
            <MenuListElement
              iconName="bi bi-code-slash"
              iconSize="2rem"
              tooltipText="Technologies"
              tooltipClasses="text-light"
              uri="/technologies"
              hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
            />,
            <MenuListElement
              iconName="bi bi-gear"
              iconSize="2rem"
              tooltipText="Compétences"
              tooltipClasses="text-light"
              uri="/competences"
              hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center button"
            />,
            <MenuListElement
              iconName="bi bi-journals"
              iconSize="2rem"
              tooltipText="Expériences"
              tooltipClasses="text-light"
              uri="/experiences"
              hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
            />,
            <MenuListElement
              iconName="bi bi-award"
              iconSize="2rem"
              tooltipText="Etudes"
              tooltipClasses="text-light"
              uri="/etudes"
              hyperlinkClasses="text-white text-center d-flex justify-content-center align-items-center"
            />,
          ]}
          menuRadius={170}
          listElementRadius={40}
          listElementClasses="bg-dark text-white"
          buttonRadius={50}
          buttonHyperlinkClasses="d-inline-flex justify-content-center align-items-center bg-dark rounded-circle"
          button={<i className="bi bi-list text-white" style={{ fontSize: "3rem" }}></i>}
          duration={300}
          delay={100}
        />
      );
    } else {
      setContent(
        <OffcanvasMenu
          buttonRadius={50}
          buttonHyperlinkClasses="d-inline-flex justify-content-center align-items-center bg-dark rounded-circle"
          button={<i className="bi bi-list text-white" style={{ fontSize: "3rem" }}></i>}
        >
          <OffcanvasItem text="À-propos" uri="/a-propos" iconName="bi bi-person" size="1.5rem" />
          <OffcanvasItem
            text="Technologies"
            uri="/technologies"
            iconName="bi bi-code-slash"
            size="1.5rem"
          />
          <OffcanvasItem
            text="Compétences"
            uri="/competences"
            iconName="bi bi-gear"
            size="1.5rem"
          />
          <OffcanvasItem
            text="Expériences"
            uri="/experiences"
            iconName="bi bi-journals"
            size="1.5rem"
          />
          <OffcanvasItem text="Etudes" uri="/etudes" iconName="bi bi-award" size="1.5rem" />
        </OffcanvasMenu>
      );
    }
  }

  return <>{content ? content : ""}</>;
}
