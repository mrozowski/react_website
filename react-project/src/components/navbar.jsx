import React from "react";
import Logo from "../logoMain.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light project-color-main">
      <img className="logo_navbar" src={Logo} alt="" />
      <a className="navbar-brand font-weight-bold" href="/#">
        WebXsite
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse navbar-brand justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ">
          <li className="nav-item active ">
            <a className="nav-link" href="/#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/#">
                Page One
              </a>
              <a className="dropdown-item" href="/#">
                Page Two
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">
                Page Three
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
