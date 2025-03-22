import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo"></span>

      <nav>
        <ul>
          <li>
            <Link onClick={"getData"} to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/About">Professionnel</Link>
          </li>
          <li>
            <Link to="/Activity">Activités</Link>
          </li>
          <li>
            <Link to="/Contact">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
