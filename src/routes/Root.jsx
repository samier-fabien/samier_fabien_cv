import { Link, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/test");
  }

  return (
    <>
      <div className="container-fluid bg-primary full-page">
        <div className="row">
          <div className="col position-absolute top-50 start-50 translate-middle text-center">
            <img
              src="../../src/assets/bitmaps/head-square.jpg"
              className="rounded-circle border border-5 border-primary-subtle"
              alt="Une photo de moi"
            />
            <h1 className="h1 m-4 text-light">Samier Fabien</h1>
            <button onClick={handleClick} type="button" class="btn btn-lg btn-outline-light">
              Go !
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
