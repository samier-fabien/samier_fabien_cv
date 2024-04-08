import React, { useEffect, useRef, useState } from "react";
import "../../css/bubbles.css";
import Bubble from "./Bubble";

export default function BubblesContainer({
  parentRef,
  h = 100,
  number = 3,
  speed = 2,
  minRadius = 10,
  maxRadius = 20,
  framerate = 10,
  clear = true,
  bubblesText = [],
}) {
  const canvasRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(700);
  const bubbles = [];
  const fpsInterval = 1000 / framerate; // Limite à 60 FPS
  let lastFrameTime = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Mise à jour de la largeur du canvas lorsque la taille de la div parent change
    const handleResize = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
        console.log("parentRef", parentRef.current.offsetWidth);
      }
    };

    handleResize(); // Appel initial pour définir la largeur initiale du canvas

    window.addEventListener("resize", handleResize);

    generateBubbles(canvas, ctx, bubblesText);
    generateNewFrame(canvas, ctx);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [parentRef]);

  useEffect(() => {
    // Utiliser la largeur de la div parent comme largeur du canvas
    if (canvasRef.current) {
      // if (canvasRef.current.width != 0) {
      //   console.log("parentWidth != 0");
      // }
      console.log(canvasRef.current.width);
      canvasRef.current.width = parentWidth;
      console.log("parentWidth", parentWidth);
    }
  }, [parentWidth]);

  function generateBubbles(canvas, ctx, bubblesText) {
    for (let i = 0; i < number; i++) {
      let text = bubblesText[i] ? bubblesText[i] : "";
      let r = Math.floor(Math.random() * (maxRadius - minRadius) + minRadius);
      let dx = Math.floor(Math.random() * speed);
      let dy = Math.floor(Math.random() * speed);
      let x = 0;
      let y = 0;

      let goodLocation = false;
      while (!goodLocation) {
        x = Math.floor(Math.random() * (canvas.width - 2 * r) + r);
        y = Math.floor(Math.random() * (canvas.height - 2 * r) + r);

        goodLocation = true;
        for (let j = 0; j < bubbles.length; j++) {
          const secondBubble = bubbles[j];
          if (isThereConnexion(x, y, r, secondBubble.x, secondBubble.y, secondBubble.r)) {
            goodLocation = false;
          }
        }
      }

      bubbles.push(new Bubble(canvas, ctx, x, y, dx, dy, r, text, "#fff"));
    }
  }

  function isThereConnexion(
    firstEntityX,
    firstEntityY,
    firstEntityR,
    secondEntityX,
    secondEntityY,
    secondEntityR
  ) {
    if (
      Math.sqrt((firstEntityX - secondEntityX) ** 2 + (firstEntityY - secondEntityY) ** 2) -
        firstEntityR -
        secondEntityR <=
      0
    ) {
      return true;
    } else {
      return false;
    }
  }

  function generateNewFrame(canvas, ctx) {
    const currentFrameTime = performance.now();
    const elapsedTime = currentFrameTime - lastFrameTime;

    // Si le temps écoulé depuis le dernier appel est inférieur à l'intervalle souhaité, on ne fait rien
    if (elapsedTime < fpsInterval) {
      window.requestAnimationFrame(function () {
        generateNewFrame(canvas, ctx);
      });
      return;
    }

    lastFrameTime = currentFrameTime;

    clear ? ctx.clearRect(0, 0, canvas.width, canvas.height) : null;
    handleCollisions(canvas);

    bubbles.forEach((bubble, index) => {
      bubble.draw();
    });

    window.requestAnimationFrame(function () {
      generateNewFrame(canvas, ctx);
    });
  }

  function handleCollisions(canvas) {
    for (let i = 0; i < bubbles.length; i++) {
      const firstBubble = bubbles[i];
      handleBubbleOutside(canvas, firstBubble);
      for (let j = 0; j < bubbles.length; j++) {
        if (i !== j) {
          const secondBubble = bubbles[j];
          if (isThereCollision(firstBubble, secondBubble)) {
            handleBubbleCollision(firstBubble, secondBubble);
            handleBorderCollision(canvas, firstBubble);
          } else {
            handleBorderCollision(canvas, firstBubble);
          }
        }
      }
    }
  }

  function isThereCollision(firstBubble, secondBubble) {
    if (
      Math.sqrt((firstBubble.x - secondBubble.x) ** 2 + (firstBubble.y - secondBubble.y) ** 2) -
        firstBubble.r -
        secondBubble.r <=
      0
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleBubbleCollision(firstBubble, secondBubble) {
    let dDiff = [firstBubble.dx - secondBubble.dx, firstBubble.dy - secondBubble.dy];
    // Aucun traitement de collision si les vitesses coïncident ou que les bulles sont cocentriques
    if (
      dDiff[0] * (secondBubble.x - firstBubble.x) + dDiff[1] * (secondBubble.y - firstBubble.y) >=
      0
    ) {
      let theta = -Math.atan2(secondBubble.y - firstBubble.y, secondBubble.x - firstBubble.x);
      let v1 = rotate([firstBubble.dx, firstBubble.dy], theta);
      let v2 = rotate([secondBubble.dx, secondBubble.dy], theta);
      let u1 = rotate(
        [
          (v1[0] * (firstBubble.m - secondBubble.m)) / (firstBubble.m + secondBubble.m) +
            (v2[0] * 2 * secondBubble.m) / (firstBubble.m + secondBubble.m),
          v1[1],
        ],
        -theta
      );
      let u2 = rotate(
        [
          (v2[0] * (secondBubble.m - firstBubble.m)) / (firstBubble.m + secondBubble.m) +
            (v1[0] * 2 * firstBubble.m) / (firstBubble.m + secondBubble.m),
          v2[1],
        ],
        -theta
      );

      firstBubble.dx = u1[0];
      firstBubble.dy = u1[1];
      secondBubble.dx = u2[0];
      secondBubble.dy = u2[1];
    }
  }

  function rotate(v, theta) {
    return [
      v[0] * Math.cos(theta) - v[1] * Math.sin(theta),
      v[0] * Math.sin(theta) + v[1] * Math.cos(theta),
    ];
  }

  function handleBubbleOutside(canvas, bubble) {
    if (bubble.x < 0 + bubble.r) {
      bubble.x = bubble.r;
    }
    if (bubble.x > canvas.width - bubble.r) {
      bubble.x = canvas.width - bubble.r;
    }
    if (bubble.y < 0 + bubble.r) {
      bubble.y = bubble.r;
    }
    if (bubble.y > canvas.height - bubble.r) {
      bubble.y = canvas.height - bubble.r;
    }
  }

  function handleBorderCollision(canvas, bubble) {
    if (bubble.dx < 0) {
      handleLeftCollision(0, bubble);
    }
    if (bubble.dx > 0) {
      handleRightCollision(canvas.width, bubble);
    }
    if (bubble.dy < 0) {
      handleTopCollision(0, bubble);
    }
    if (bubble.dy > 0) {
      handleBottomCollision(canvas.height, bubble);
    }
  }
  function handleLeftCollision(leftOrigine, bubble) {
    let lestmostPoint = bubble.x + bubble.dx - bubble.r;
    if (lestmostPoint <= leftOrigine) {
      bubble.x = -lestmostPoint + bubble.r;
      bubble.dx = -bubble.dx;
    } else {
      bubble.x = bubble.x + bubble.dx;
    }
  }
  function handleRightCollision(width, bubble) {
    let rightmostPoint = bubble.x + bubble.dx + bubble.r;
    if (rightmostPoint >= width) {
      bubble.x = width - (rightmostPoint - width) - bubble.r;
      bubble.dx = -bubble.dx;
    } else {
      bubble.x = bubble.x + bubble.dx;
    }
  }
  function handleTopCollision(topOrigin, bubble) {
    let highestPoint = bubble.y + bubble.dy - bubble.r;
    if (highestPoint <= topOrigin) {
      bubble.y = -highestPoint + bubble.r;
      bubble.dy = -bubble.dy;
    } else {
      bubble.y = bubble.y + bubble.dy;
    }
  }
  function handleBottomCollision(height, bubble) {
    let lowestPoint = bubble.y + bubble.dy + bubble.r;
    if (lowestPoint >= height) {
      bubble.y = height - (lowestPoint - height) - bubble.r;
      bubble.dy = -bubble.dy;
    } else {
      bubble.y = bubble.y + bubble.dy;
    }
  }

  return <canvas ref={canvasRef} id="bubbles-container" width="700" height={h} />;
}
