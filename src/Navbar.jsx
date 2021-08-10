import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <NavLink
            activeClassName="btn_active"
            className="nav-link-active"
            to="/"
          >
            Parth Kapadia
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink
                  activeClassName="btn_active"
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="btn_active"
                  className="nav-link active"
                  aria-current="page"
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="btn_active"
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="btn_active"
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
