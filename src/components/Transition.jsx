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
 * @param {string} transitionShape - Type de courbe: random|custom|down|up
 * @param {number[]} transitionValues - Tableau de nombres utilisé pour construire une courbe [premierPointYPosition, premierPointVecteurX, premierPointVecteurY, deuxièmePointVecteurX, deuxièmePointVecteurY, deuxièmePointYPosition]
 * @param {string} transitionContainerClasses - Classes css à ajouter à la div qui contient le composant (pour donner un background-color par exemple)
 * @param {string} transitionFillColor - Couleur du SVG
 * @param {number} transitionDuration - Durée de la transition entre les coordonnées de par défaut et le useState
 */
export default function Transition({
  transitionHeight = 100,
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

    console.log(`[${x1Value};${y1Value}] [${x2Value};${y2Value}]`);
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

    console.log(`[${x1Value};${y1Value}] [${x2Value};${y2Value}]`);
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

    console.log(`[${x1Value};${y1Value}] [${x2Value};${y2Value}]`);
  }

  function getYStart() {
    console.log("### getYStart ###");
    if (yStart) {
      console.log("yStart existe");
      return yStart;
    } else {
      console.log("yStart n'existe pas");
      if (transitionValues) {
        console.log("transitionValues existe");
        if (transitionValues.length >= 1) {
          console.log("transitionValues.length >= 1");
          console.log(`transitionValues[0] ${transitionValues[0]}`);
          return transitionValues[0];
        } else {
          console.log("transitionValues.length < 1");
          return 0.1;
        }
      } else {
        console.log("transitionValues n'existe pas");
        return 0.1;
      }
    }
  }

  function getX1() {
    console.log("### getX1 ###");
    if (x1) {
      console.log("x1 existe");
      return x1;
    } else {
      console.log("x1 n'existe pas");
      if (transitionValues) {
        console.log("transitionValues existe");
        if (transitionValues.length >= 2) {
          console.log("transitionValues.length >= 2");
          console.log(`transitionValues[1] ${transitionValues[1]}`);
          return transitionValues[1];
        } else {
          console.log("transitionValues.length < 2");
          return 100;
        }
      } else {
        console.log("transitionValues n'existe pas");
        return 100;
      }
    }
  }

  function getY1() {
    console.log("### getY1 ###");
    if (y1) {
      console.log("y1 existe");
      return y1;
    } else {
      console.log("y1 n'existe pas");
      if (transitionValues) {
        console.log("transitionValues existe");
        if (transitionValues.length >= 3) {
          console.log("transitionValues.length >= 3");
          console.log(`transitionValues[2] ${transitionValues[2]}`);
          return transitionValues[2];
        } else {
          console.log("transitionValues.length < 3");
          return 100;
        }
      } else {
        console.log("transitionValues n'existe pas");
        return 100;
      }
    }
  }

  function getX2() {
    console.log("### getX2 ###");
    if (x2) {
      console.log("x2 existe");
      return x2;
    } else {
      console.log("x2 n'existe pas");
      if (transitionValues) {
        console.log("transitionValues existe");
        if (transitionValues.length >= 4) {
          console.log("transitionValues.length >= 4");
          console.log(`transitionValues[3] ${transitionValues[3]}`);
          return transitionValues[3];
        } else {
          console.log("transitionValues.length < 4");
          return 100;
        }
      } else {
        console.log("transitionValues n'existe pas");
        return 100;
      }
    }
  }

  function getY2() {
    console.log("### getY2 ###");
    if (y2) {
      console.log("y2 existe");
      return y2;
    } else {
      console.log("y2 n'existe pas");
      if (transitionValues) {
        console.log("transitionValues existe");
        if (transitionValues.length >= 5) {
          console.log("transitionValues.length >= 5");
          console.log(`transitionValues[4] ${transitionValues[4]}`);
          return transitionValues[4];
        } else {
          console.log("transitionValues.length < 5");
          return 100;
        }
      } else {
        console.log("transitionValues n'existe pas");
        return 100;
      }
    }
  }

  function getYEnd() {
    console.log("### getYEnd ###");
    if (yEnd) {
      console.log("yEnd existe");
      return yEnd;
    } else {
      console.log("yEnd n'existe pas");
      if (transitionValues) {
        console.log("transitionValues existe");
        if (transitionValues.length >= 6) {
          console.log("transitionValues.length >= 6");
          console.log(`transitionValues[5] ${transitionValues[5]}`);
          return transitionValues[5];
        } else {
          console.log("transitionValues.length < 6");
          return 0.1;
        }
      } else {
        console.log("transitionValues n'existe pas");
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
            d={`M0.00,${getYStart()} C${getX1()},${getY1()} ${getX2()},${getY2()} 500.00,${getYEnd()} L500.00,${transitionHeight} L0.00,${transitionHeight} Z`}
            style={{
              stroke: "none",
              fill: transitionFillColor,
              transition: `${transitionDuration}s`,
            }}
          ></path>
        </svg>
      </div>
    </div>
  );
}
