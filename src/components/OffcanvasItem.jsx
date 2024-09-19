import React from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "bootstrap";
/**
 * Displays a link in an `OffcanvasItem`. Use it with an `OffcanvasItem`.
 * @param {String} uri - Link's URI. Example `/pagename`.
 * @param {String} text - Link's text.
 * @param {String} iconName - The CSS class name of the icon to display. Example of use: `<i class="iconName"></i>`. If none, no icon displayed.
 * @param {String} size - The css size of the icon. Examples: `1rem`, `10px`.
 * @param {boolean} active - If `true`, displayed as an active nav link.
 * @param {React.useRef} offcanvasRef - Given by default by the parent `OffcanvasItem` if used in an `OffcanvasMenu`. `Offcanvas` React reference to automatically hide `Offcanvas` after click.
 */
export default function OffcanvasItem({
  uri = "#",
  text = "Link",
  iconName = null,
  size = "1rem",
  active = false,
  offcanvasRef,
}) {
  function handleClick() {
    if (offcanvasRef.current) {
      // Crée une instance Bootstrap Offcanvas et lui demande de se cacher
      const bsOffcanvas = Offcanvas.getInstance(offcanvasRef.current);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  }

  return (
    <li className="nav-item" style={{ fontSize: size }}>
      <Link className={`nav-link${active ? " active" : ""}`} to={uri} onClick={handleClick}>
        {iconName ? <i className={iconName}></i> : ""} {text}
      </Link>
    </li>
  );
}
