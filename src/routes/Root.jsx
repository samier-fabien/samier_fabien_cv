import React from "react";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="container-fluid bg-primary full-page">
        <div className="row">
          <div className="col position-absolute top-50 start-50 translate-middle text-center text-light">
            <img
              src="../../src/assets/bitmaps/head-square.jpg"
              className="rounded-circle shadow"
              alt="Une photo de moi"
            />
            <h1 className="h1 mt-3">Samier Fabien</h1>
            <h2 className="h5 mb-5">Concepteur, développeur d'applications</h2>
            <Link to="/test">
              <button type="button" class="btn btn btn-light">
                Jeter un œil
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
