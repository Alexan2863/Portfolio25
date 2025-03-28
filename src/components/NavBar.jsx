import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm shadow">
      <a
        className="navbar-brand text-white"
        href="https://www.linkedin.com/in/alex-powell2863/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-linkedin px-5"></i>
      </a>
      <div className="container d-flex flex-row justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
