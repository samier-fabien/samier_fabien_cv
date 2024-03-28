import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import Root from "./routes/Root";
import Error from "./routes/Error";
// importe tout le css bootstrap
import "./scss/main.scss";
// importe tout le js bootstrap
import * as bootstrap from "bootstrap";
import Test from "./routes/Test";
import Presentation from "./routes/Presentation";
import "bootstrap-icons/font/bootstrap-icons.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/test", // TODO: route à supprimer avant prod
    element: <Test />,
    errorElement: <Error />,
  },
  {
    path: "/accueil",
    element: <Presentation />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
