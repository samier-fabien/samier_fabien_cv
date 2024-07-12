import React from "react";

export default function ListGroupItem({ children, cssClasses }) {
  return <li className={`list-group-item bg-transparent ${cssClasses}`}>{children}</li>;
}
