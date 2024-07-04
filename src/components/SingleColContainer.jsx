import React from "react";

export default function SingleColContainer({ children }) {
  return (
    <div className="container-md my-5">
      <div className="row justify-content-center">
        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11 col-sm-11 col-xs-12">{children}</div>
      </div>
    </div>
  );
}
