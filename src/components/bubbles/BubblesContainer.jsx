import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "../../css/bubbles.css";
import Bubble from "./Bubble";
// import World from "./World";

export default function BubblesContainer({
  w = 100,
  h = 100,
  number = 10,
  speed = 2,
  minRadius = 10,
  maxRadius = 20,
  clear = true,
}) {
  const canvasRef = useRef(null);
  const bubbles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    generateBubbles(canvas, ctx);
    generateNewFrame(canvas, ctx);
    // setInterval(() => {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   generateNewFrame(canvas);
    // }, 40);
  }, []);

  function generateBubbles(canvas, ctx) {
    for (let i = 0; i < number; i++) {
      let r = Math.floor(Math.random() * (maxRadius - minRadius) + minRadius);
      let dx = Math.floor(Math.random() * speed * 1);
      let dy = Math.floor(Math.random() * speed * 1);
      let x = 0;
      let y = 0;
      console.log(dx, dy);

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

      let bubble = new Bubble(canvas, ctx, x, y, dx, dy, r, "#fff");
      bubbles.push(bubble);
      console.log(bubble.x, bubble.y, bubble.dx, bubble.dy);
    }
    bubbles.push(new Bubble(canvas, ctx, 0, 0, 0, 0, 0, "#fff"));
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleCollisions(canvas);
    bubbles.forEach((bubble, index) => {
      // console.log(`Bulle ${index} draw`, bubble);
      bubble.draw();
    });
    // bubbles.forEach((bubble) => {
    //   bubble.draw(canvas, bubbles, bubbles.indexOf(bubble));
    // });
    window.requestAnimationFrame(function () {
      generateNewFrame(canvas, ctx);
    });
  }

  function handleCollisions(canvas) {
    for (let i = 0; i < bubbles.length; i++) {
      const firstBubble = bubbles[i];
      for (let j = i + 1; j < bubbles.length; j++) {
        const secondBubble = bubbles[j];
        // console.log(`Cas: ${i} ${j}`);
        if (isThereCollision(firstBubble, secondBubble)) {
          // console.log("###################");
          // console.log(`${i} et ${j}: Il y a bien collision`, firstBubble, secondBubble);
          handleBubbleCollision(firstBubble, secondBubble);
          handleBorderCollision(canvas, firstBubble);
        } else {
          // console.log("###################");
          // console.log(`${i} et ${j}: Il n'y a pas collision`, firstBubble, secondBubble);
          handleBorderCollision(canvas, firstBubble);
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
      // console.log(
      //   "Collision",
      //   Math.sqrt((firstBubble.x - secondBubble.x) ** 2 + (firstBubble.y - secondBubble.y) ** 2) -
      //     firstBubble.r -
      //     secondBubble.r
      // );
      return true;
    } else {
      return false;
    }
  }

  function handleBubbleCollision(firstBubble, secondBubble) {
    var res = [firstBubble.dx - secondBubble.dx, firstBubble.dy - secondBubble.dy];
    if (
      res[0] * (secondBubble.x - firstBubble.x) + res[1] * (secondBubble.y - firstBubble.y) >=
      0
    ) {
      var m1 = firstBubble.m;
      var m2 = secondBubble.m;
      var theta = -Math.atan2(secondBubble.y - firstBubble.y, secondBubble.x - firstBubble.x);
      var v1 = rotate([firstBubble.dx, firstBubble.dy], theta);
      var v2 = rotate([secondBubble.dx, secondBubble.dy], theta);
      var u1 = rotate(
        [(v1[0] * (m1 - m2)) / (m1 + m2) + (v2[0] * 2 * m2) / (m1 + m2), v1[1]],
        -theta
      );
      var u2 = rotate(
        [(v2[0] * (m2 - m1)) / (m1 + m2) + (v1[0] * 2 * m1) / (m1 + m2), v2[1]],
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

  function handleBorderCollision(canvas, bubble) {
    if (bubble.x - bubble.r <= 0) {
      bubble.x = bubble.r;
    }
    if (bubble.x + bubble.r >= canvas.width) {
      bubble.x = canvas.width - bubble.r;
    }
    if (
      (bubble.x - bubble.r <= 0 && bubble.dx < 0) ||
      (bubble.x + bubble.r >= canvas.width && bubble.dx > 0)
    ) {
      bubble.dx = -bubble.dx;
    }
    if (bubble.y - bubble.r <= 0) {
      bubble.y = bubble.r;
    }
    if (bubble.y + bubble.r >= canvas.height) {
      bubble.y = canvas.height - bubble.r;
    }
    if (
      (bubble.y - bubble.r <= 0 && bubble.dy < 0) ||
      (bubble.y + bubble.r >= canvas.height && bubble.dy > 0)
    ) {
      bubble.dy = -bubble.dy;
    }
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;
  }

  return <canvas ref={canvasRef} id="bubbles-container" width={w} height={h} />;
}
