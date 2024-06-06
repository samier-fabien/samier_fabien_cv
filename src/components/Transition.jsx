import React, { useState, useEffect } from "react";
/**
 *  Créé et affiche une transition SVG en forme de vague
 * @summary Sans paramètre ou si transitionShape === "random", créé une courbe aléatoire.
 * Si transitionShape === "down", créé un dos d'âne aléatoire.
 * Si transitionShape === "up", créé une bosse aléatoire.
 * Si transitionShape === "custom", créé une courbe personnalisée avec les données passés dans le tableau transitionValues.
 * Dans tous les cas, les données de transitionValues sont employées jusqu'au useEffect. Ensuite, les states seront utilisés. Le temps de transition entre les coordonnées est configurable avec le paramètre transitionDuration
 * Ainsi si on veut une courbe particulière sans effet de transition, on ajuste transitionShape sur "custom" et on donne les transitionValues.
 * @param {number} transitionHeight - Hauteur totale en pixels
 * @param {boolean} transitionPathOnTop - Si true, le chemin sera en haut du svg
 * @param {string} transitionShape - Type de courbe: random|custom|down|up
 * @param {number[]} transitionValues - Tableau de nombres utilisé pour construire une courbe [premierPointYPosition, premierPointVecteurX, premierPointVecteurY, deuxièmePointVecteurX, deuxièmePointVecteurY, deuxièmePointYPosition]
 * @param {string} transitionContainerClasses - Classes css à ajouter à la div qui contient le composant (pour donner un background-color par exemple)
 * @param {string} transitionFillColor - Couleur du SVG
 * @param {number} transitionDuration - Durée de la transition entre les coordonnées par défaut et le useState
 */
export default function Transition({
  transitionHeight = 100,
  transitionPathOnTop = 0,
  transitionShape = "random",
  transitionValues = [0.1, 100, 0.1, 400, 0.1, 0.1],
  transitionContainerClasses = "bg-dark",
  transitionFillColor = "#ffffff",
  transitionDuration = 0,
}) {
  const [yStart, setYStart] = useState(null);
  const [yEnd, setYEnd] = useState(null);
  const [x1, setX1] = useState(null);
  const [y1, setY1] = useState(null);
  const [x2, setX2] = useState(null);
  const [y2, setY2] = useState(null);

  useEffect(() => {
    switch (transitionShape) {
      case "random":
        generateRandomCurve();
        break;

      case "custom":
        generateCustomCurve();
        break;

      case "down":
        generateDownCurve();
        break;

      case "up":
        generateUpCurve();
        break;

      default:
        generateRandomCurve();
        break;
    }
    getYStart();
  }, []);

  function generateRandomCurve() {
    const yStart = Math.floor(Math.random() * transitionHeight);
    const yEnd = Math.floor(Math.random() * transitionHeight);
    const x1Value = Math.floor(Math.random() * 250);
    const y1Value = Math.floor(Math.random() * transitionHeight);
    const x2Value = Math.floor(Math.random() * 250) + 250;
    const y2Value = Math.floor(Math.random() * transitionHeight);

    setYStart(yStart);
    setYEnd(yEnd);
    setX1(x1Value);
    setY1(y1Value);
    setX2(x2Value);
    setY2(y2Value);
  }

  function generateCustomCurve() {
    setYStart(transitionValues[0] ? transitionValues[0] : transitionHeight / 2);
    setX1(transitionValues[1] ? transitionValues[1] : 100);
    setY1(transitionValues[2] ? transitionValues[2] : 0);
    setX2(transitionValues[3] ? transitionValues[3] : 400);
    setY2(transitionValues[4] ? transitionValues[4] : 100);
    setYEnd(transitionValues[5] ? transitionValues[5] : transitionHeight / 2);
  }

  function generateDownCurve() {
    const x1Value = Math.floor(Math.random() * 250);
    const y1Value = Math.floor(Math.random() * transitionHeight);
    const x2Value = Math.floor(Math.random() * 250) + 250;
    const y2Value = Math.floor(Math.random() * transitionHeight);

    setYStart(0.1);
    setYEnd(0.1);
    setX1(x1Value);
    setY1(y1Value);
    setX2(x2Value);
    setY2(y2Value);
  }

  function generateUpCurve() {
    const x1Value = Math.floor(Math.random() * 250);
    const y1Value = Math.floor(Math.random() * transitionHeight);
    const x2Value = Math.floor(Math.random() * 250) + 250;
    const y2Value = Math.floor(Math.random() * transitionHeight);

    setYStart(transitionHeight);
    setYEnd(transitionHeight);
    setX1(x1Value);
    setY1(y1Value);
    setX2(x2Value);
    setY2(y2Value);
  }

  function getYStart() {
    if (yStart) {
      return yStart;
    } else {
      if (transitionValues) {
        if (transitionValues.length >= 1) {
          return transitionValues[0];
        } else {
          return 0.1;
        }
      } else {
        return 0.1;
      }
    }
  }

  function getX1() {
    if (x1) {
      return x1;
    } else {
      if (transitionValues) {
        if (transitionValues.length >= 2) {
          return transitionValues[1];
        } else {
          return 100;
        }
      } else {
        return 100;
      }
    }
  }

  function getY1() {
    if (y1) {
      return y1;
    } else {
      if (transitionValues) {
        if (transitionValues.length >= 3) {
          return transitionValues[2];
        } else {
          return 100;
        }
      } else {
        return 100;
      }
    }
  }

  function getX2() {
    if (x2) {
      return x2;
    } else {
      if (transitionValues) {
        if (transitionValues.length >= 4) {
          return transitionValues[3];
        } else {
          return 100;
        }
      } else {
        return 100;
      }
    }
  }

  function getY2() {
    if (y2) {
      return y2;
    } else {
      if (transitionValues) {
        if (transitionValues.length >= 5) {
          return transitionValues[4];
        } else {
          return 100;
        }
      } else {
        return 100;
      }
    }
  }

  function getYEnd() {
    if (yEnd) {
      return yEnd;
    } else {
      if (transitionValues) {
        if (transitionValues.length >= 6) {
          return transitionValues[5];
        } else {
          return 0.1;
        }
      } else {
        return 0.1;
      }
    }
  }

  function getValueOf(valueName) {
    switch (valueName) {
      case "yStart":
        if (transitionValues[0]) {
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className={`${transitionContainerClasses}`}>
      <div style={{ height: `${transitionHeight}px`, overflow: "hidden" }}>
        <svg
          viewBox={`0 0 500 ${transitionHeight}`}
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d={`M0.00,${getYStart()} C${getX1()},${getY1()} ${getX2()},${getY2()} 500.00,${getYEnd()} L500.00,${
              transitionPathOnTop ? 0 : transitionHeight
            } L0.00,${transitionPathOnTop ? 0 : transitionHeight} Z`}
            style={{
              stroke: "none",
              fill: transitionFillColor,
              transition: `${transitionDuration}s`,
              transform: "rotate(180)",
            }}
          ></path>
        </svg>
      </div>
    </div>
  );
}
