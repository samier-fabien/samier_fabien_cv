import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Composant permettant d'appliquer des transitions à la page courante
 * quand l'utilisateur change de page.
 * Requis: react-router-dom 6
 * Mise en place: envelopper l'enfant dans un composant TransitionWrapper
 * dès que la prop isInTransit === true, la transition s'amorce.
 * @param {any} children Le composant enfant du wrapper. Défaut: ""
 * @param {string} path Le chemin de la page à atteindre. Défaut: "/"
 * @param {boolean} isInTransit Si true: transition se lance. Défaut: false
 * @param {string} transitionClass Classe(s) css à appliquer au wrapper quand transition. Défaut: ""
 * @param {number} transitionTime Temps (ms) avant la fin de la transition. défaut: 300
 * @param {string} wrapperClass Classe(s) de base du wrapper. Défaut: ""
 * @returns {React.ReactElement | null}
 */
export default function TransitionWrapper({
  children = "",
  path = "/",
  isInTransit = false,
  transitionClass = "",
  transitionTime = 300,
  wrapperClass = "",
}) {
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  function handleTransition() {
    setTransitioning(true);
    setTimeout(() => {
      navigate(path); // commande à react router dom d'aller à la page donnée par la prop "path"
    }, parseInt(transitionTime)); // Temps de transition, ajuster selon vos besoins
  }

  // Lorsque la transition est terminée, réinitialisez l'état
  // TODO: Quand on l'utilise: arrête la transition avant le délai
  const handleTransitionEnd = (e) => {
    setTransitioning(false);
  };

  useEffect(() => {
    isInTransit === true ? handleTransition() : null;
  }, [isInTransit]);

  return (
    <div
      className={`${wrapperClass} ${transitioning ? transitionClass : ""}`}
      // onTransitionEnd={handleTransitionEnd}// TODO: Utile ?
    >
      {children}
    </div>
  );
}
