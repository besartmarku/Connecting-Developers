import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html">
            <i className="fas fa-code" /> DevConnector
          </a>
        </h1>
        <ul>
          <li>
            <Link to="profiles.html">Developers</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="login ">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
