import React, { useRef, useEffect, useState } from "react";
import "../css/radialMenu.css";

/**
 * Menu for tablet and smartphone, displayed to the right of the viewport.
 * @param {any} children - For each React component inside this components's children, a ref to `OffcanvasMenu` is added to automatically hide `Offcanvas` after click.
 * @param {String} menuClasses -
 * @param {any} button - The html button tag contained inside the `<a>...</a>` link that triggers the `OffcanvasMenu`.
 * @param {String} buttonHyperlinkClasses - CSS classes added to the `<a>...</a>` link.
 * @param {Number} buttonRadius - The radius of the button.
 */
export default function OffcanvasMenu({
  children,
  menuClasses = "",
  button,
  buttonHyperlinkClasses = "",
  buttonRadius = 128,
}) {
  const offcanvasRef = useRef(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Clones React children and adds 'offcanvas' useRef in it.
    const updatedChildren = React.Children.map(children, (child) => {
      // Checks if the child is a valid React element before cloning it
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { offcanvasRef: offcanvasRef });
      }
      return child;
    });

    // Update the 'content' useState with the cloned components
    setContent(updatedChildren);
  }, []);

  return (
    <nav
      id="radial-menu"
      className={`d-inline-block position-relative ${menuClasses}`}
      data-bs-theme="dark"
    >
      {button ? (
        <a
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="offcanvasMenu"
          href="#offcanvasMenu"
          className={buttonHyperlinkClasses}
          style={{ width: `${buttonRadius * 2}px`, height: `${buttonRadius * 2}px` }}
          // onClick={handleClick}
        >
          {button}
        </a>
      ) : (
        <a href="#">Menu</a>
      )}
      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {content ? content : ""}
          </ul>
        </div>
      </div>
    </nav>
  );
}
