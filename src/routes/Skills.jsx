import React from "react";
import FooterTransition from "../components/FooterTransition";
import HeaderTransition from "../components/HeaderTransition";

export default function Skills() {
  return (
    <>
      <HeaderTransition title="Compétences" transitionContainerClasses="bg-dark sticky-top z-n1" />

      <FooterTransition />
    </>
  );
}
