import React, { useState, useEffect } from "react";
import "../css/bubbles.css";

export default function BubblesContainer({ w = 100, h = 100 }) {
  return <canvas id="bubbles-container" className="" width={w} height={h}></canvas>;
}
