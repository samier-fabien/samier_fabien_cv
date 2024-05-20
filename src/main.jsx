import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import Root from "./routes/Root";
import Error from "./routes/Error";
import Template from "./components/Template";
import Home from "./routes/Home";
import Technologies from "./routes/Technologies";
import Skills from "./routes/Skills";
import Experiences from "./routes/Experiences";
import Studies from "./routes/Studies";
import Hobbies from "./routes/Hobbies";

import Test from "./routes/Test"; // TODO: à supprimer avant prod
// css+icônes bootstrap
import "./scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
// js bootstrap
import * as bootstrap from "bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <Template />,
    errorElement: <Error />,
    children: [
      {
        path: "accueil",
        element: <Home />,
      },
      {
        path: "technologies",
        element: <Technologies />,
      },
      {
        path: "competences",
        element: <Skills />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "etudes",
        element: <Studies />,
      },
      {
        path: "hobbies",
        element: <Hobbies />,
      },
      {
        path: "test", // TODO: route à supprimer avant prod
        element: <Test />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // TODO: Réactiver après tests sur canvas terminés
  // <React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>
);
