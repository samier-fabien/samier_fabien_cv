import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import Root from "./routes/Root";
import Error from "./routes/Error";
import Template from "./components/Template";
import About from "./routes/About";
import Technologies from "./routes/Technologies";
import Skills from "./routes/Skills";
import Experiences from "./routes/Experiences";
import Studies from "./routes/Studies";

// css+icônes bootstrap
import "./scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
// js bootstrap
import * as bootstrap from "bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/",
    element: <Template />, // Template utilisé comme Layout global
    children: [
      {
        path: "a-propos",
        element: <About />,
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
        path: "*", // Route 404 pour gérer les erreurs
        element: <Error />, // Affiche le composant Error en tant qu'enfant de Template
        errorElement: <Error />, // Affiche l'erreur à ce niveau si une route ne correspond pas
        loader: () => {
          throw new Response("Not Found", { status: 404 });
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // TODO: Réactiver après tests sur canvas terminés
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
