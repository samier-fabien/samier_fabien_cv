import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "../../css/bubbles.css";
import Bubble from "./Bubble";

export default function BubblesContainer({ w = 100, h = 100 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bubble1 = new Bubble(canvas.width / 2, canvas.height - 30, 10, "#0095DD", canvas, ctx);
    setInterval(() => {
      bubble1.move(2, -2);
    }, 100);
  }, []);

  return <canvas ref={canvasRef} id="bubbles-container" width={w} height={h} />;
}
