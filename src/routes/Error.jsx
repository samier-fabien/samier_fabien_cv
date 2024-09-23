import React from "react";
import { useRouteError, useLocation } from "react-router-dom";
import Transition from "../components/Transition";
import FooterTransition from "../components/FooterTransition";
import SingleColContainer from "../components/SingleColContainer";

export default function Error() {
  const error = useRouteError();
  const location = useLocation();
  console.error(error);

  return (
    <>
      <div className="container-fluid py-4 text-center bg-dark text-light">
        <h1 className="display-4 m-0 p-0">Oops !</h1>
      </div>
      <Transition
        transitionPathOnTop={1}
        transitionShape="custom"
        transitionValues={[50, 100, 100, 349, -50, 50]}
        transitionContainerClasses="bg-white"
        transitionFillColor="#202428"
      />
      <SingleColContainer>
        <div>
          <h2 className="mb-5">Une erreur est survenue...</h2>
          <p>
            {error?.status && <span className="fs-3 fw-bold ">{error.status} </span>}
            {error?.data && (
              <>
                <span className="fs-3 fst-italic text-danger">{error.data}</span>
                <br />
              </>
            )}
            {error?.statusText && (
              <>
                <i>Message : {error.statusText}</i> <br />
              </>
            )}
            {error.status == 404 ? `La page "${location.pathname}" n'existe pas.` : ""}
          </p>
        </div>
      </SingleColContainer>
      <FooterTransition />
    </>
  );
}
