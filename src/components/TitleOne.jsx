import React from "react";

export default function TitleOne({ title = "", titleBorderColor = "black" }) {
  return (
    <h2 className="display-6 pt-3 text-center">
      <span className="px-4" style={{ borderLeft: `0.3rem solid ${titleBorderColor}` }}>
        {title}
      </span>
    </h2>
  );
}
