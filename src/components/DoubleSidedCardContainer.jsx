import React from "react";

export default function DoubleSidedCardContainer({ children = "", height = "35rem" }) {
  return (
    <div className="container-md my-5">
      <div className="row justify-content-center" style={{ height: height }}>
        {children}
      </div>
    </div>
  );
}
